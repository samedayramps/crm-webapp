import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType } from '@/types';

export const GET = createApiHandler<CustomerType[]>(async (request) => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term is required');
  }

  const customers = await Customer.find({
    $or: [
      { firstName: { $regex: term, $options: 'i' } },
      { lastName: { $regex: term, $options: 'i' } },
      { email: { $regex: term, $options: 'i' } },
    ]
  }).select('firstName lastName email phoneNumber installAddress mobilityAids').limit(10);

  return { data: customers };
});