'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerDetails from '@/components/CustomerDetails';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';
import { Customer, RampComponent } from '@/types';

const NewQuotePage: React.FC = () => {
  const router = useRouter();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);
  const [totalLength, setTotalLength] = useState(0);
  const [installPrice, setInstallPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [monthlyRate, setMonthlyRate] = useState(0);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleRampConfigurationChange = (components: RampComponent[], length: number) => {
    setRampComponents(components);
    setTotalLength(length);
  };

  const handlePriceCalculated = (install: number, delivery: number, monthly: number) => {
    setInstallPrice(install);
    setDeliveryPrice(delivery);
    setMonthlyRate(monthly);
  };

  const handleCreateQuote = async () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }

    try {
      const quoteData = {
        customer: selectedCustomer._id,
        installPrice,
        deliveryPrice,
        monthlyRate,
        components: rampComponents,
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        sentAt: null,
        signedAt: null,
        paymentStatus: 'PENDING',
      };

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create quote');
      }

      await response.json();
      router.push('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
      alert('Failed to create quote. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Quote</h1>
      <CustomerSearch onSelectCustomer={handleSelectCustomer} />
      {selectedCustomer && (
        <div className="mt-6 mb-6">
          <CustomerDetails 
            customer={selectedCustomer} 
            showActions={false}
            onCustomerUpdate={(updatedCustomer) => setSelectedCustomer(updatedCustomer)}
          />
        </div>
      )}
      <RampConfigurationV2 onConfigurationChange={handleRampConfigurationChange} />
      {selectedCustomer && (
        <PricingComponent 
          rampComponents={rampComponents} 
          totalLength={totalLength} 
          installAddress={selectedCustomer.installAddress || ''}
          onPriceCalculated={handlePriceCalculated}
        />
      )}
      <button 
        onClick={handleCreateQuote}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Create Quote
      </button>
    </div>
  );
};

export default NewQuotePage;