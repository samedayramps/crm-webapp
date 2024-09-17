import React from 'react';
import QuoteList from '@/components/QuoteList';
import { QuoteProvider } from '@/contexts/QuoteContext';

export default function Quotes() {
  return (
    <QuoteProvider>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6">Quotes</h1>
        <QuoteList />
      </div>
    </QuoteProvider>
  );
}