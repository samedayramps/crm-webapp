import { NextRequest, NextResponse } from 'next/server';
import { RentalRequestService } from '@/services/rentalRequestService';
import { corsMiddleware } from '@/lib/cors';

export const OPTIONS = corsMiddleware;

export async function POST(request: NextRequest) {
  return corsMiddleware(request, async () => {
    try {
      const body = await request.json();
      console.log('Received body:', body);

      const newRentalRequest = await RentalRequestService.createRentalRequest(body);
      
      return NextResponse.json({ data: newRentalRequest }, { status: 201 });
    } catch (error) {
      console.error('Error in POST /api/rental-requests:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  });
}

export async function GET(request: NextRequest) {
  return corsMiddleware(request, async () => {
    try {
      const rentalRequests = await RentalRequestService.getAllRentalRequests();
      
      return NextResponse.json({ data: rentalRequests }, { status: 200 });
    } catch (error) {
      console.error('Error in GET /api/rental-requests:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  });
}