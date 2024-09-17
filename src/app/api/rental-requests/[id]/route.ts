import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const rentalRequest = await RentalRequest.findById(params.id);
    if (!rentalRequest) {
      return NextResponse.json({ error: 'Rental request not found' }, { status: 404 });
    }
    return NextResponse.json(rentalRequest);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rental request' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const rentalRequest = await RentalRequest.findByIdAndDelete(params.id);
    if (!rentalRequest) {
      return NextResponse.json({ error: 'Rental request not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Rental request deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete rental request' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const data = await request.json();
    const updatedRentalRequest = await RentalRequest.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedRentalRequest) {
      return NextResponse.json({ error: 'Rental request not found' }, { status: 404 });
    }
    return NextResponse.json(updatedRentalRequest);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update rental request' }, { status: 500 });
  }
}