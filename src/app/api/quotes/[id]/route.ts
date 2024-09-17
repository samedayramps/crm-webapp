// src/app/api/quotes/[id]/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models';
import { ApiResponse, Quote as QuoteType } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const quote = await Quote.findById(params.id).populate('customer');
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching quote:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch quote',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const data = await request.json();
    const quote = await Quote.findByIdAndUpdate(params.id, data, { new: true }).populate('customer');
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error updating quote:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to update quote',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const quote = await Quote.findByIdAndDelete(params.id);
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    const response: ApiResponse<{ message: string }> = { 
      data: { message: 'Quote deleted successfully' } 
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error deleting quote:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to delete quote',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received quote data:', data); // Log received data

    // Validate required fields
    if (!data.customer || !data.totalPrice) {
      throw new Error('Missing required fields: customer or totalPrice');
    }

    const quote = await Quote.create(data);
    console.log('Quote created:', quote); // Log created quote

    await quote.populate('customer');
    console.log('Quote populated:', quote); // Log populated quote

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