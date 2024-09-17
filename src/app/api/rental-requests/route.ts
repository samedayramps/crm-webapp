import { NextResponse } from 'next/server';
import { z } from 'zod';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest, IRentalRequest } from '@/models';

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

export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const validatedData = RentalRequestSchema.parse(body);

    // Save the validated data to the database
    const newRentalRequest = new RentalRequest(validatedData);
    await newRentalRequest.save();

    const response: ApiResponse<RentalRequestType> = { data: validatedData };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const response: ApiResponse<never> = { error: JSON.stringify(error.errors) };
      return NextResponse.json(response, { status: 400 });
    }
    const response: ApiResponse<never> = { error: 'Internal Server Error' };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response: ApiResponse<IRentalRequest[]> = { data: rentalRequests };
    return NextResponse.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response: ApiResponse<never> = { error: errorMessage };
    return NextResponse.json(response, { status: 500 });
  }
}