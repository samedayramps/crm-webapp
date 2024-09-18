'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CustomerCreateRequest, Customer } from '@/types';
import CustomerForm from '@/components/CustomerForm';

const NewCustomerPage: React.FC = () => {
  const router = useRouter();

  const handleCreateCustomer = async (customerData: CustomerCreateRequest) => {
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }

      const result = await response.json();
      console.log('Customer creation response:', result);

      if (!result.data || !result.data._id) {
        throw new Error('Customer ID not returned from server');
      }

      const createdCustomer = result.data as Customer;
      router.push(`/customers/${createdCustomer._id}`);
    } catch (error) {
      console.error('Error creating customer:', error);
      alert('Failed to create customer. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Create New Customer</h1>
      <CustomerForm onSubmit={handleCreateCustomer} />
    </div>
  );
};

export default NewCustomerPage;