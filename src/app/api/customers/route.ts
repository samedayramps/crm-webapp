import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    const customer = await Customer.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.installAddress,
      mobilityAids: data.mobilityAids,
    });
    return NextResponse.json(customer, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
  }
}