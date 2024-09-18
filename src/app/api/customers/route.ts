import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType, CustomerCreateRequest } from '@/types';

export const POST = createApiHandler<CustomerType>(async (request) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await Customer.create(data);
  return { data: customer.toObject() };
});

export const GET = createApiHandler<CustomerType[]>(async () => {
  const customers = await Customer.find().sort({ createdAt: -1 });
  return { data: customers.map(customer => customer.toObject()) };
});