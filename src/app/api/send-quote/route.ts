import { createApiHandler } from '@/lib/apiHandler';
import { QuoteService } from '@/services/quoteService';

export const POST = createApiHandler<{ message: string }>(async (request) => {
  const { quoteId } = await request.json();
  const result = await QuoteService.sendQuote(quoteId);
  return { data: result };
});