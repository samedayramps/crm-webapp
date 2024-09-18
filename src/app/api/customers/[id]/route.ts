import { createApiHandler } from '@/lib/apiHandler';
import { CustomerService } from '@/services/customerService';
import { Customer, CustomerCreateRequest, ApiResponse } from '@/types';

export const GET = createApiHandler<Customer>(async (_request, { params }): Promise<ApiResponse<Customer>> => {
  const customer = await CustomerService.getCustomerById(params.id);
  if (!customer) {
    return { error: 'Customer not found' };
  }
  return { data: customer };
});

export const PUT = createApiHandler<Customer>(async (request, { params }): Promise<ApiResponse<Customer>> => {
  const data: CustomerCreateRequest = await request.json();
  const updatedCustomer = await CustomerService.updateCustomer(params.id, data);
  if (!updatedCustomer) {
    return { error: 'Customer not found' };
  }
  return { data: updatedCustomer };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request, { params }): Promise<ApiResponse<{ message: string }>> => {
  const result = await CustomerService.deleteCustomer(params.id);
  if (!result) {
    return { error: 'Customer not found' };
  }
  return { data: { message: 'Customer deleted successfully' } };
});