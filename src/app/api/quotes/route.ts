import { NextRequest } from 'next/server';
import { createApiHandler } from '@/lib/apiHandler';
import { QuoteService } from '@/services/quoteService';
import { Quote } from '@/types';

export const GET = createApiHandler<Quote[]>(async () => {
  const quotes = await QuoteService.getAllQuotes();
  return { data: quotes };
});

export const POST = createApiHandler<Quote>(async (req: NextRequest) => {
  const data = await req.json();
  const quote = await QuoteService.createQuote(data);
  return { data: quote };
});