import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { createQuote } from '@/store/quotesSlice';
import { Customer, QuoteCreateRequest, RampComponent } from '@/types';
import CustomerSearch from './CustomerSearch';
import CustomerDetails from './CustomerDetails';
import RampConfigurationV2 from './RampConfiguration';
import PricingComponent from './PricingComponent';

const CreateQuoteForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);
  const [totalLength, setTotalLength] = useState(0);
  const [quoteData, setQuoteData] = useState<Partial<QuoteCreateRequest>>({});
  const [error, setError] = useState<string | null>(null);

  const handleCustomerSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
    setQuoteData(prevData => ({ ...prevData, customer: customer._id }));
  };

  const handleRampConfigurationChange = (components: RampComponent[], length: number) => {
    setRampComponents(components);
    setTotalLength(length);
    setQuoteData(prevData => ({ ...prevData, components }));
  };

  const handlePriceCalculated = (installPrice: number, deliveryPrice: number, monthlyRate: number) => {
    setQuoteData(prevData => ({
      ...prevData,
      installPrice,
      deliveryPrice,
      monthlyRate
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomer) {
      setError('Please select a customer');
      return;
    }

    try {
      const newQuote: QuoteCreateRequest = {
        ...quoteData as QuoteCreateRequest,
        status: 'DRAFT',
      };
      const resultAction = await dispatch(createQuote(newQuote));
      if (createQuote.fulfilled.match(resultAction)) {
        router.push('/quotes');
      } else {
        throw new Error('Failed to create quote');
      }
    } catch (error) {
      setError('Failed to create quote. Please try again.');
      console.error('Error creating quote:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CustomerSearch onSelectCustomer={handleCustomerSelect} />
      {selectedCustomer && (
        <CustomerDetails 
          customer={selectedCustomer} 
          showActions={false}
        />
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Quote
      </button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  );
};

export default CreateQuoteForm;