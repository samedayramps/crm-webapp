import React from 'react';
import CustomerList from '@/components/CustomerList';

export default function Customers() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <CustomerList />
    </div>
  );
}