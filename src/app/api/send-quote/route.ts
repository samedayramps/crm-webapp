import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';

export const POST = createApiHandler<{ message: string }>(async (request) => {
  const { quoteId } = await request.json();
  const quote = await Quote.findById(quoteId).populate('customer');
  
  if (!quote) {
    throw new Error('Quote not found');
  }

  // TODO: Implement email sending logic
  // TODO: Implement Stripe payment link generation
  // TODO: Implement esignatures.io agreement link generation

  quote.status = 'SENT';
  quote.sentAt = new Date();
  await quote.save();

  return { data: { message: 'Quote sent successfully' } };
});