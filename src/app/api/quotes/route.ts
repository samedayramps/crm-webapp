// src/app/api/quotes/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote, IQuote } from '@/models';
import { ApiResponse } from '@/types'; // Import ApiResponse type

export async function GET() {
  await dbConnect();

  try {
    const quotes = await Quote.find().populate('customer').sort({ createdAt: -1 });
    const response: ApiResponse<IQuote[]> = { data: quotes };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch quotes',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received quote data:', data);

    // Validate required fields
    if (!data.customer || !data.installPrice || !data.deliveryPrice || !data.monthlyRate || !data.components) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const quote = await Quote.create(data);
    console.log('Quote created:', quote);

    const populatedQuote = await Quote.findById(quote._id).populate('customer');
    console.log('Quote populated:', populatedQuote);

    const response: ApiResponse<IQuote> = { data: populatedQuote };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating quote:', error);
    const response: ApiResponse<never> = { error: 'Failed to create quote' };
    return NextResponse.json(response, { status: 500 });
  }
}