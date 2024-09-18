import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';
import { Quote as QuoteType, QuoteCreateRequest } from '@/types';
import { NextRequest } from 'next/server';

export const GET = createApiHandler<QuoteType>(async (_request: NextRequest, { params }) => {
  const quote = await Quote.findById(params.id).populate('customer');
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: quote.toObject() };
});

export const PUT = createApiHandler<QuoteType>(async (request: NextRequest, { params }) => {
  const data: QuoteCreateRequest = await request.json();
  const quote = await Quote.findByIdAndUpdate(params.id, data, { new: true }).populate('customer');
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: quote.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }) => {
  const quote = await Quote.findByIdAndDelete(params.id);
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: { message: 'Quote deleted successfully' } };
});