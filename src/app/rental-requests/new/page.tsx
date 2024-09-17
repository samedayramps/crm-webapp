'use client'; // Add this line to make it a Client Component

import React from 'react';
import RentalRequestForm from '@/components/RentalRequestForm/RentalRequestForm';
import { RentalRequest } from '@/types';

export default function NewRentalRequest() {
  const handleSubmit = async (data: Omit<RentalRequest, '_id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/rental-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit rental request');
      }

      const result = await response.json();
      console.log('Rental request submitted:', result);
      // You can add a success message or redirect here
    } catch (error) {
      console.error('Error submitting rental request:', error);
      // You can add an error message here
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">New Rental Request</h1>
      <RentalRequestForm onSubmit={handleSubmit} />
    </div>
  );
}