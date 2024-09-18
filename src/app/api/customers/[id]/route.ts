import { createApiHandler } from '@/lib/apiHandler';
import { CustomerService } from '@/services/customerService';
import { Customer } from '@/types';

export const GET = createApiHandler<Customer>(async (_request, { params }) => {
  const customer = await CustomerService.getCustomerById(params.id as string);
  if (!customer) {
    return { error: 'Customer not found' };
  }
  return { data: customer };
});

export const PUT = createApiHandler<Customer>(async (request, { params }) => {
  const data = await request.json();
  const updatedCustomer = await CustomerService.updateCustomer(params.id as string, data);
  if (!updatedCustomer) {
    return { error: 'Customer not found' };
  }
  return { data: updatedCustomer };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request, { params }) => {
  const result = await CustomerService.deleteCustomer(params.id as string);
  if (!result) {
    return { error: 'Customer not found' };
  }
  return { data: { message: 'Customer deleted successfully' } };
});