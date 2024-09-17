import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models';

export async function GET() {
  await dbConnect();

  try {
    const quotes = await Quote.find().populate('customer');
    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received quote data:', data);

    // Validate the data
    if (!data.customer || !data.components || !Array.isArray(data.components)) {
      return NextResponse.json({ error: 'Invalid quote data' }, { status: 400 });
    }

    // Remove the _id field if it exists
    delete data._id;

    // Create the quote
    const quote = new Quote(data);
    await quote.save();
    console.log('Created quote:', quote);

    // Populate the customer field
    const populatedQuote = await Quote.findById(quote._id).populate('customer');
    console.log('Populated quote:', populatedQuote);

    return NextResponse.json(populatedQuote, { status: 201 });
  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json({ 
      error: 'Failed to create quote', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}