import { createApiHandler } from '@/lib/apiHandler';
import { CustomerService } from '@/services/customerService';
import { Customer } from '@/types';

export const GET = createApiHandler<Customer[]>(async () => {
  const customers = await CustomerService.getAllCustomers();
  return { data: customers };
});

export const POST = createApiHandler<Customer>(async (request) => {
  const data = await request.json();
  const customer = await CustomerService.createCustomer(data);
  return { data: customer };
});