import { NextRequest, NextResponse } from 'next/server';
import { RentalRequest } from '@/models';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received body:', body);

    // Create a new rental request without validation
    const newRentalRequest = await RentalRequest.create(body);
    
    const response = NextResponse.json({ data: newRentalRequest.toObject() }, { status: 201 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    return response;
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Credentials', 'true');
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