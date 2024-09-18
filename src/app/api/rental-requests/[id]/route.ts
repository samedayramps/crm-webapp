import { NextRequest, NextResponse } from 'next/server';
import { createApiHandler } from '@/lib/apiHandler';
import { RentalRequestService } from '@/services/rentalRequestService';
import { RentalRequest, RentalRequestCreateRequest, ApiResponse } from '@/types';
import { corsMiddleware } from '@/lib/cors';

export async function OPTIONS(req: NextRequest) {
  return corsMiddleware(req, async () => {
    return new NextResponse(null, { status: 204 });
  });
}

export const GET = createApiHandler<RentalRequest>(async (_request: NextRequest, { params }): Promise<ApiResponse<RentalRequest>> => {
  const rentalRequest = await RentalRequestService.getRentalRequestById(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: rentalRequest };
});

export const PUT = createApiHandler<RentalRequest>(async (request: NextRequest, { params }): Promise<ApiResponse<RentalRequest>> => {
  const data: RentalRequestCreateRequest = await request.json();
  const updatedRentalRequest = await RentalRequestService.updateRentalRequest(params.id, data);
  if (!updatedRentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: updatedRentalRequest };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }): Promise<ApiResponse<{ message: string }>> => {
  const result = await RentalRequestService.deleteRentalRequest(params.id);
  if (!result) {
    return { error: 'Rental request not found' };
  }
  return { data: { message: 'Rental request deleted successfully' } };
});