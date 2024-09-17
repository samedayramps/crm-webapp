import React from 'react';
import dynamic from 'next/dynamic';
import { QuoteProvider } from '@/contexts/QuoteContext';
import ErrorBoundary from '@/components/ErrorBoundary';

const QuoteList = dynamic(() => import('@/components/QuoteList'), { ssr: false });
const CreateQuoteButton = dynamic(() => import('@/components/CreateQuoteButton'), { ssr: false });

export default function Quotes() {
  return (
    <ErrorBoundary>
      <QuoteProvider>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Quotes</h1>
            <CreateQuoteButton />
          </div>
          <QuoteList />
        </div>
      </QuoteProvider>
    </ErrorBoundary>
  );
}