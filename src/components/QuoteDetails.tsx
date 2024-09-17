"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Quote } from '@/types';
import { api } from '@/utils/api';
import CustomerDetails from '@/components/CustomerDetails';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';

interface QuoteDetailsProps {
  id: string;
}

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ id }) => {
  const { updateQuote, deleteQuote } = useQuoteContext();
  const [isEditing, setIsEditing] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      const response = await api.get<Quote>(`/quotes/${id}`);
      if (response.data) {
        setQuote(response.data);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (updatedQuote: Quote) => {
    const response = await updateQuote(id, updatedQuote);
    if (response.error) {
      setError(response.error);
    } else {
      setQuote(response.data!);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      const response = await deleteQuote(id);
      if (response.error) {
        setError(response.error);
      } else {
        router.push('/quotes');
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quote) {
    return <div>Quote not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
      
      <div className="mb-6">
        {quote.customer && typeof quote.customer !== 'string' && (
          <CustomerDetails 
            customer={quote.customer} 
            showActions={false}
          />
        )}
      </div>

      <div className="mb-6">
        <RampConfigurationV2 
          onConfigurationChange={() => {}}
          initialComponents={quote.components}
          readOnly={!isEditing}
        />
      </div>

      <div className="mb-6">
        <PricingComponent 
          rampComponents={quote.components}
          totalLength={quote.components.reduce((total, component) => {
            const match = component.name.match(/(\d+)ft/);
            return total + (match ? parseInt(match[1]) * component.quantity : 0);
          }, 0)}
          installAddress={typeof quote.customer !== 'string' ? quote.customer.installAddress || '' : ''}
          onPriceCalculated={() => {}}
          initialInstallPrice={quote.installPrice}
          initialDeliveryPrice={quote.deliveryPrice}
          initialMonthlyRate={quote.monthlyRate}
          readOnly={!isEditing}
        />
      </div>

      <div className="mt-6 flex justify-between">
        {isEditing ? (
          <>
            <button 
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => handleSave(quote)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteDetails;