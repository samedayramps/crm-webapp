import { createApiHandler } from '@/lib/apiHandler';
import { CustomerService } from '@/services/customerService';
import { Customer, CustomerCreateRequest } from '@/types';

export const POST = createApiHandler<Customer>(async (request) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await CustomerService.createCustomer(data);
  return { data: customer };
});

export const GET = createApiHandler<Customer[]>(async () => {
  const customers = await CustomerService.getAllCustomers();
  return { data: customers };
});