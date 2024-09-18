import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';
import { Quote as QuoteType, QuoteCreateRequest } from '@/types';

export const GET = createApiHandler<QuoteType[]>(async () => {
  const quotes = await Quote.find().populate('customer').sort({ createdAt: -1 });
  return { data: quotes };
});

export const POST = createApiHandler<QuoteType>(async (request) => {
  const data: QuoteCreateRequest = await request.json();
  
  if (!data.customer || !data.installPrice || !data.deliveryPrice || !data.monthlyRate || !data.components) {
    throw new Error('Missing required fields');
  }

  const quote = await Quote.create(data);
  const populatedQuote = await Quote.findById(quote._id).populate('customer');
  
  if (!populatedQuote) {
    throw new Error('Failed to create quote');
  }

  return { data: populatedQuote };
});