import { Customer, CustomerCreateRequest } from '@/types';
import { Customer as CustomerModel } from '@/models';

export class CustomerService {
  static async getAllCustomers(): Promise<Customer[]> {
    const customers = await CustomerModel.find().sort({ createdAt: -1 });
    return customers.map(customer => customer.toObject());
  }

  static async createCustomer(data: CustomerCreateRequest): Promise<Customer> {
    const customer = await CustomerModel.create(data);
    return customer.toObject();
  }

  static async getCustomerById(id: string): Promise<Customer | null> {
    const customer = await CustomerModel.findById(id);
    return customer ? customer.toObject() : null;
  }

  static async updateCustomer(id: string, data: Partial<CustomerCreateRequest>): Promise<Customer | null> {
    const customer = await CustomerModel.findByIdAndUpdate(id, data, { new: true });
    return customer ? customer.toObject() : null;
  }

  static async deleteCustomer(id: string): Promise<boolean> {
    const result = await CustomerModel.findByIdAndDelete(id);
    return !!result;
  }

  static async searchCustomers(term: string): Promise<Customer[]> {
    const customers = await CustomerModel.find({
      $or: [
        { firstName: { $regex: term, $options: 'i' } },
        { lastName: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } },
      ]
    }).limit(10);
    return customers.map(customer => customer.toObject());
  }
}