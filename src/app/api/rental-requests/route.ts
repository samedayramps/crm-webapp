// src/app/api/rental-requests/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';
import { ApiResponse, RentalRequest as RentalRequestType } from '@/types'; // Add this import

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    const rentalRequest = await RentalRequest.create(data);
    const response: ApiResponse<RentalRequestType> = { data: rentalRequest };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating rental request:', error);
    const response: ApiResponse<never> = { error: 'Failed to create rental request' };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response: ApiResponse<RentalRequestType[]> = { data: rentalRequests };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in GET /api/rental-requests:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch rental requests',
    };
    return NextResponse.json(response, { status: 500 });
  }
}