import React from 'react';
import QuoteDetails from '@/components/QuoteDetails';
import { QuoteProvider } from '@/contexts/QuoteContext';

export default function QuoteDetailsPage({ params }: { params: { id: string } }) {
  return (
    <QuoteProvider>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
        <QuoteDetails id={params.id} />
      </div>
    </QuoteProvider>
  );
}