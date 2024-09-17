'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuoteContext, QuoteProvider } from '@/contexts/QuoteContext';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerCard from '@/components/CustomerCard';
import RampConfiguration from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

const NewQuotePageContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addQuote } = useQuoteContext();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Check if a customer ID was provided in the URL
  React.useEffect(() => {
    const customerId = searchParams.get('customerId');
    if (customerId) {
      const fetchCustomer = async () => {
        try {
          const response = await fetch(`/api/customers/${customerId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch customer');
          }
          const customerData = await response.json();
          setSelectedCustomer(customerData);
        } catch (error) {
          console.error('Error fetching customer:', error);
          // Handle error (e.g., show an error message to the user)
        }
      };

      fetchCustomer();
    }
  }, [searchParams]);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }

    try {
      await addQuote({
        customer: {
          firstName: selectedCustomer.firstName,
          lastName: selectedCustomer.lastName,
          email: selectedCustomer.email,
          phoneNumber: selectedCustomer.phoneNumber,
        },
        totalPrice: 0, // TODO: Calculate this based on ramp configuration and pricing
        components: [], // TODO: Add this based on ramp configuration
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
        {!selectedCustomer && <CustomerSearch onSelectCustomer={handleSelectCustomer} />}
        {selectedCustomer && (
          <CustomerCard 
            customer={{
              _id: selectedCustomer._id,
              firstName: selectedCustomer.firstName,
              lastName: selectedCustomer.lastName,
              email: selectedCustomer.email,
              phoneNumber: selectedCustomer.phoneNumber,
              address: selectedCustomer.address,
              mobilityAids: selectedCustomer.mobilityAids
            }} 
          />
        )}
        <RampConfiguration />
        <PricingComponent />
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