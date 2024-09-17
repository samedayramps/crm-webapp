'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteContext, QuoteProvider } from '@/contexts/QuoteContext';

const NewQuotePageContent: React.FC = () => {
  const router = useRouter();
  const { addQuote } = useQuoteContext();
  const [formData, setFormData] = useState({
    customerFirstName: '',
    customerLastName: '',
    customerEmail: '',
    customerPhoneNumber: '',
    totalPrice: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addQuote({
        customer: {
          firstName: formData.customerFirstName,
          lastName: formData.customerLastName,
          email: formData.customerEmail,
          phoneNumber: formData.customerPhoneNumber,
        },
        totalPrice: parseFloat(formData.totalPrice),
        components: [], // You might want to add a way to input components
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        sentAt: null,
        signedAt: null,
        paymentStatus: 'UNPAID',
      });
      router.push('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
      alert('Failed to create quote. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Quote</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="customerFirstName" className="block mb-2">Customer First Name</label>
          <input
            type="text"
            id="customerFirstName"
            name="customerFirstName"
            value={formData.customerFirstName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="customerLastName" className="block mb-2">Customer Last Name</label>
          <input
            type="text"
            id="customerLastName"
            name="customerLastName"
            value={formData.customerLastName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="customerEmail" className="block mb-2">Customer Email</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="customerPhoneNumber" className="block mb-2">Customer Phone Number</label>
          <input
            type="tel"
            id="customerPhoneNumber"
            name="customerPhoneNumber"
            value={formData.customerPhoneNumber}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="totalPrice" className="block mb-2">Total Price</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleChange}
            required
            step="0.01"
            min="0"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Quote
        </button>
      </form>
    </div>
  );
};

const NewQuotePage: React.FC = () => {
  return (
    <QuoteProvider>
      <NewQuotePageContent />
    </QuoteProvider>
  );
};

export default NewQuotePage;