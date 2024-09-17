// src/app/quotes/page.tsx

import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';
import QuoteList from '@/components/QuoteList';
import CreateQuoteButton from '@/components/CreateQuoteButton';

export default function Quotes() {
  return (
    <QuoteProvider>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Quotes</h1>
          <CreateQuoteButton />
        </div>
        <QuoteList />
      </div>
    </QuoteProvider>
  );
}