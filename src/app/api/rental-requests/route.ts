import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest, IRentalRequest } from '@/models';
import { allowedOrigins } from '@/config/cors';

// Define the RentalRequestType
type RentalRequestType = z.infer<typeof RentalRequestSchema>;

// Define the ApiResponse type
type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// Define the schema for input validation
const RentalRequestSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  knowRampLength: z.enum(['yes', 'no']),
  estimatedRampLength: z.string().optional(),
  knowRentalDuration: z.enum(['yes', 'no']),
  estimatedRentalDuration: z.string().optional(),
  installationTimeframe: z.string(),
  mobilityAids: z.array(z.string()),
  installAddress: z.string(),
});

// Updated CORS function
function setCORSHeaders(req: NextRequest, res: NextResponse): NextResponse {
  const origin = req.headers.get('origin');
  
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set('Access-Control-Allow-Origin', origin);
  } else {
    // If the origin is not in the list, you might want to deny the request
    // or set a default origin. Here we're setting it to the first allowed origin.
    res.headers.set('Access-Control-Allow-Origin', allowedOrigins[0]);
  }
  
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  res.headers.set('Access-Control-Allow-Credentials', 'true');
  return res;
}

export async function OPTIONS(req: NextRequest) {
  const res = new NextResponse(null, { status: 200 });
  return setCORSHeaders(req, res);
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log('Received body:', body);

    const validatedData = RentalRequestSchema.parse(body);

    // Save the validated data to the database
    const newRentalRequest = new RentalRequest(validatedData);
    await newRentalRequest.save();

    const response: ApiResponse<RentalRequestType> = { data: validatedData };
    const res = NextResponse.json(response, { status: 201 });
    return setCORSHeaders(req, res);
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    let response: ApiResponse<never>;
    let status: number;

    if (error instanceof z.ZodError) {
      console.log('Validation errors:', error.errors);
      response = { error: JSON.stringify(error.errors) };
      status = 400;
    } else {
      response = { error: 'Internal Server Error' };
      status = 500;
    }

    const res = NextResponse.json(response, { status });
    return setCORSHeaders(req, res);
  }
}

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response: ApiResponse<IRentalRequest[]> = { data: rentalRequests };
    const res = NextResponse.json(response);
    return setCORSHeaders(req, res);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response: ApiResponse<never> = { error: errorMessage };
    const res = NextResponse.json(response, { status: 500 });
    return setCORSHeaders(req, res);
  }
}