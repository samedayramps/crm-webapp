import { NextRequest, NextResponse } from 'next/server';
import { RentalRequest } from '@/models';

const allowedOrigins = ['https://form.samedayramps.com', 'https://samedayramps.com'];

function setHeaders(response: NextResponse, origin: string) {
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  
  if (allowedOrigins.includes(origin)) {
    const response = new NextResponse(null, { status: 204 });
    setHeaders(response, origin);
    return response;
  }
  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  
  try {
    const body = await request.json();
    console.log('Received body:', body);

    // Create a new rental request without validation
    const newRentalRequest = await RentalRequest.create(body);
    
    const response = NextResponse.json({ data: newRentalRequest.toObject() }, { status: 201 });
    
    if (allowedOrigins.includes(origin)) {
      setHeaders(response, origin);
    }
    
    return response;
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    
    if (allowedOrigins.includes(origin)) {
      setHeaders(response, origin);
    }
    
    return response;
  }
}