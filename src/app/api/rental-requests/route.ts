import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';

export async function POST(request: Request) {
	await dbConnect();

	try {
		const data = await request.json();
		const rentalRequest = await RentalRequest.create(data);
		return NextResponse.json({ message: 'Rental request submitted successfully', id: rentalRequest._id }, { status: 201 });
	} catch (error) {
		console.error('Error creating rental request:', error);
		return NextResponse.json({ error: 'Failed to create rental request' }, { status: 500 });
	}
}

export async function GET() {
	await dbConnect();

	try {
		const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
		return NextResponse.json(rentalRequests);
	} catch (error) {
		console.error('Error in GET /api/rental-requests:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch rental requests', details: (error as Error).message },
			{ status: 500 }
		);
	}
}