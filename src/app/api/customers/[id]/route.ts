import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType, CustomerCreateRequest } from '@/types';

export const GET = createApiHandler<CustomerType>(async (_request, { params }) => {
  const customer = await Customer.findById(params.id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: customer.toObject() };
});

export const PUT = createApiHandler<CustomerType>(async (request, { params }) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await Customer.findByIdAndUpdate(params.id, data, { new: true });
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: customer.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request, { params }) => {
  const customer = await Customer.findByIdAndDelete(params.id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: { message: 'Customer deleted successfully' } };
});