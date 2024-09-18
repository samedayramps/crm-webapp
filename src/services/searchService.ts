import { CustomerService } from './customerService';
import { Customer } from '@/types';

export class SearchService {
  static async searchCustomers(term: string): Promise<Customer[]> {
    return CustomerService.searchCustomers(term);
  }
}