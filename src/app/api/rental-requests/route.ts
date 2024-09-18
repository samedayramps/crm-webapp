import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';
import { allowedOrigins } from '@/config/cors';

// Define the ApiResponse type
type ApiResponse<T> = {
  data?: T;
  error?: string;
};

// Updated CORS function
function setCORSHeaders(req: NextRequest, res: NextResponse): NextResponse {
  const origin = req.headers.get('origin');
  
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set('Access-Control-Allow-Origin', origin);
  } else {
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

    // Create a new rental request
    const newRentalRequest = new RentalRequest(body);
    await newRentalRequest.save();

    const response: ApiResponse<typeof body> = { data: body };
    const res = NextResponse.json(response, { status: 201 });
    return setCORSHeaders(req, res);
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response: ApiResponse<never> = { error: errorMessage };
    const res = NextResponse.json(response, { status: 500 });
    return setCORSHeaders(req, res);
  }
}

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response: ApiResponse<typeof rentalRequests> = { data: rentalRequests };
    const res = NextResponse.json(response);
    return setCORSHeaders(req, res);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response: ApiResponse<never> = { error: errorMessage };
    const res = NextResponse.json(response, { status: 500 });
    return setCORSHeaders(req, res);
  }
}