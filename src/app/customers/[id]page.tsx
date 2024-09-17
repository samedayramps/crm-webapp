import React from 'react';
import CustomerDetails from '@/components/CustomerDetails';

export default function CustomerDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
      <CustomerDetails id={params.id} />
    </div>
  );
}