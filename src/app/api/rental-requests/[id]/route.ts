import { NextRequest, NextResponse } from 'next/server';
import { createApiHandler } from '@/lib/apiHandler';
import { RentalRequest } from '@/models';
import { RentalRequest as RentalRequestType, RentalRequestCreateRequest, ApiResponse } from '@/types';
import { corsMiddleware } from '@/lib/cors';

export async function OPTIONS(req: NextRequest) {
  return corsMiddleware(req, async () => {
    return new NextResponse(null, { status: 204 });
  });
}

export const GET = createApiHandler<RentalRequestType>(async (_request: NextRequest, { params }): Promise<ApiResponse<RentalRequestType>> => {
  const rentalRequest = await RentalRequest.findById(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: rentalRequest.toObject() };
});

export const PUT = createApiHandler<RentalRequestType>(async (request: NextRequest, { params }): Promise<ApiResponse<RentalRequestType>> => {
  const data: RentalRequestCreateRequest = await request.json();
  const updatedRentalRequest = await RentalRequest.findByIdAndUpdate(params.id, data, { new: true });
  if (!updatedRentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: updatedRentalRequest.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }): Promise<ApiResponse<{ message: string }>> => {
  const rentalRequest = await RentalRequest.findByIdAndDelete(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: { message: 'Rental request deleted successfully' } };
});