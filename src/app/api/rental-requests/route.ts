import { NextRequest } from 'next/server';
import { createApiHandler } from '@/lib/apiHandler';
import { RentalRequest } from '@/models';
import { RentalRequest as RentalRequestType, RentalRequestCreateRequest, ApiResponse } from '@/types';
import { rateLimit } from '@/lib/rate-limit';
import { corsMiddleware } from '@/lib/cors';

const limiter = rateLimit(10, 60 * 1000); // 10 requests per minute

export async function OPTIONS(req: NextRequest) {
  return corsMiddleware(req);
}

export const POST = createApiHandler<RentalRequestType>(async (request: NextRequest): Promise<ApiResponse<RentalRequestType>> => {
  // Apply rate limiting
  if (!limiter.check(request, 'RENTAL_REQUEST_CREATE')) {
    return { error: 'Rate limit exceeded' };
  }

  try {
    const body: RentalRequestCreateRequest = await request.json();
    console.log('Received body:', body);

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return { error: 'Missing required fields' };
    }

    // Create a new rental request
    const newRentalRequest = await RentalRequest.create(body);
    return { data: newRentalRequest.toObject() };
  } catch (error) {
    console.error('Error creating rental request:', error);
    return { error: 'Failed to create rental request' };
  }
});

export const GET = createApiHandler<RentalRequestType[]>(async (): Promise<ApiResponse<RentalRequestType[]>> => {
  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    return { data: rentalRequests.map(request => request.toObject()) };
  } catch (error) {
    console.error('Error fetching rental requests:', error);
    return { error: 'Failed to fetch rental requests' };
  }
});