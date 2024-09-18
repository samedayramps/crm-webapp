import { createApiHandler } from '@/lib/apiHandler';
import { QuoteService } from '@/services/quoteService';
import { Quote, QuoteCreateRequest, ApiResponse } from '@/types';
import { NextRequest } from 'next/server';

export const GET = createApiHandler<Quote>(async (_request: NextRequest, { params }): Promise<ApiResponse<Quote>> => {
  const quote = await QuoteService.getQuoteById(params.id);
  if (!quote) {
    return { error: 'Quote not found' };
  }
  return { data: quote };
});

export const PUT = createApiHandler<Quote>(async (request: NextRequest, { params }): Promise<ApiResponse<Quote>> => {
  const data: QuoteCreateRequest = await request.json();
  const updatedQuote = await QuoteService.updateQuote(params.id, data);
  if (!updatedQuote) {
    return { error: 'Quote not found' };
  }
  return { data: updatedQuote };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }): Promise<ApiResponse<{ message: string }>> => {
  const result = await QuoteService.deleteQuote(params.id);
  if (!result) {
    return { error: 'Quote not found' };
  }
  return { data: { message: 'Quote deleted successfully' } };
});