'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuoteContext, QuoteProvider } from '@/contexts/QuoteContext';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerCard from '@/components/CustomerCard';
import RampConfigurationV2 from '@/components/RampConfiguration';

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

interface RampComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const NewQuotePageContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addQuote } = useQuoteContext();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);

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

  const handleRampConfigurationChange = (components: RampComponent[]) => {
    setRampComponents(components);
  };

  const handleCreateQuote = async () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }

    try {
      const quoteData = {
        customer: selectedCustomer._id,
        totalPrice: 0, // This will be calculated later
        components: rampComponents,
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        sentAt: null,
        signedAt: null,
        paymentStatus: 'UNPAID',
        // Add a placeholder rentalRequest for now
        rentalRequest: '000000000000000000000000', // Placeholder ObjectId
      };

      console.log('Sending quote data:', quoteData);

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to create quote');
      }

      const newQuote = await response.json();
      await addQuote(newQuote);
      router.push('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
      alert('Failed to create quote. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Quote</h1>
      <div className="space-y-4">
        {!selectedCustomer && <CustomerSearch onSelectCustomer={handleSelectCustomer} />}
        {selectedCustomer && <CustomerCard customer={selectedCustomer} />}
        <RampConfigurationV2 onConfigurationChange={handleRampConfigurationChange} />
        <button 
          type="button"
          onClick={handleCreateQuote}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Quote
        </button>
      </div>
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