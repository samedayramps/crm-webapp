import { createApiHandler } from '@/lib/apiHandler';
import { SearchService } from '@/services/searchService';
import { Customer } from '@/types';

export const GET = createApiHandler<Customer[]>(async (request) => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term is required');
  }

  const customers = await SearchService.searchCustomers(term);
  return { data: customers };
});