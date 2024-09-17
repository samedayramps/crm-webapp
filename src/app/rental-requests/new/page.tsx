import React from 'react';
import RentalRequestForm from '@/components/RentalRequestForm/RentalRequestForm';

export default function NewRentalRequest() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">New Rental Request</h1>
      <RentalRequestForm />
    </div>
  );
}