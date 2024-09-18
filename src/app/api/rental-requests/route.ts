import { NextRequest, NextResponse } from 'next/server';
import { RentalRequest } from '@/models';
import { RentalRequest as RentalRequestCreateRequest } from '@/types';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: RentalRequestCreateRequest = await request.json();
    console.log('Received body:', body);

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a new rental request
    const newRentalRequest = await RentalRequest.create(body);
    
    const response = NextResponse.json({ data: newRentalRequest.toObject() }, { status: 201 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
}

export async function GET() {
  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response = NextResponse.json({ data: rentalRequests.map(request => request.toObject()) });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } catch (error) {
    console.error('Error in GET /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
}