import { Customer as CustomerModel } from '@/models';
import { Customer, CustomerCreateRequest } from '@/types';

export class CustomerService {
  static async createCustomer(data: CustomerCreateRequest): Promise<Customer> {
    try {
      const customer = await CustomerModel.create(data);
      return customer.toObject();
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  }

  static async getAllCustomers(): Promise<Customer[]> {
    try {
      const customers = await CustomerModel.find().sort({ createdAt: -1 });
      return customers.map(customer => customer.toObject());
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  }

  static async getCustomerById(id: string): Promise<Customer | null> {
    try {
      const customer = await CustomerModel.findById(id);
      return customer ? customer.toObject() : null;
    } catch (error) {
      console.error('Error fetching customer:', error);
      throw error;
    }
  }

  static async updateCustomer(id: string, data: Partial<CustomerCreateRequest>): Promise<Customer | null> {
    try {
      const customer = await CustomerModel.findByIdAndUpdate(id, data, { new: true });
      return customer ? customer.toObject() : null;
    } catch (error) {
      console.error('Error updating customer:', error);
      throw error;
    }
  }

  static async deleteCustomer(id: string): Promise<boolean> {
    try {
      const result = await CustomerModel.findByIdAndDelete(id);
      return !!result;
    } catch (error) {
      console.error('Error deleting customer:', error);
      throw error;
    }
  }

  static async searchCustomers(term: string): Promise<Customer[]> {
    try {
      const customers = await CustomerModel.find({
        $or: [
          { firstName: { $regex: term, $options: 'i' } },
          { lastName: { $regex: term, $options: 'i' } },
          { email: { $regex: term, $options: 'i' } },
        ]
      }).select('firstName lastName email phoneNumber installAddress mobilityAids').limit(10);
      return customers.map(customer => customer.toObject());
    } catch (error) {
      console.error('Error searching customers:', error);
      throw error;
    }
  }
}