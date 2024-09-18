import { createApiHandler } from '@/lib/apiHandler';
import { QuoteService } from '@/services/quoteService';
import { Quote, QuoteCreateRequest } from '@/types';

export const GET = createApiHandler<Quote[]>(async () => {
  const quotes = await QuoteService.getAllQuotes();
  return { data: quotes };
});

export const POST = createApiHandler<Quote>(async (request) => {
  const data: QuoteCreateRequest = await request.json();
  
  if (!data.customer) {
    throw new Error('Customer is required');
  }

  const quote = await QuoteService.createQuote(data);
  return { data: quote };
});