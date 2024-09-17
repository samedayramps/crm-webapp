// src/app/api/quotes/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models';
import { ApiResponse, Quote as QuoteType } from '@/types';

export async function GET() {
  await dbConnect();

  try {
    const quotes = await Quote.find().populate('customer').sort({ createdAt: -1 });
    const response: ApiResponse<QuoteType[]> = { data: quotes };
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
    if (!data.customer || typeof data.totalPrice !== 'number') {
      return NextResponse.json({ error: 'Missing required fields: customer or totalPrice' }, { status: 400 });
    }

    // Create a new quote object with only the necessary fields
    const quoteData = {
      customer: data.customer, // This should now be a valid ObjectId string
      totalPrice: data.totalPrice,
      components: data.components || [],
      status: data.status || 'DRAFT',
      createdAt: data.createdAt || new Date(),
      sentAt: data.sentAt,
      signedAt: data.signedAt,
      paymentStatus: data.paymentStatus || 'PENDING',
    };

    const quote = await Quote.create(quoteData);
    console.log('Quote created:', quote);

    await quote.populate('customer');
    console.log('Quote populated:', quote);

    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating quote:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const response: ApiResponse<never> = {
      error: `Failed to create quote: ${errorMessage}`,
    };
    return NextResponse.json(response, { status: 500 });
  }
}