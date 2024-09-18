import { createApiHandler } from '@/lib/apiHandler';
import { CustomerService } from '@/services/customerService';
import { Customer } from '@/types';

export const GET = createApiHandler<Customer[]>(async (request) => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    return { error: 'Search term is required' };
  }

  const customers = await CustomerService.searchCustomers(term);
  return { data: customers };
});