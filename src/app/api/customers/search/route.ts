import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';

export async function GET(request: Request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
  }

  try {
    const customers = await Customer.find({
      $or: [
        { firstName: { $regex: term, $options: 'i' } },
        { lastName: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } },
      ]
    }).select('firstName lastName email phoneNumber installAddress mobilityAids').limit(10);

    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error searching customers:', error);
    return NextResponse.json({ error: 'Failed to search customers' }, { status: 500 });
  }
}