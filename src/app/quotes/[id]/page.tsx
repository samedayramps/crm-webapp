import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';
import QuoteDetails from '@/components/QuoteDetails';

interface QuotePageProps {
  params: { id: string };
}

const QuotePage: React.FC<QuotePageProps> = ({ params }) => {
  return (
    <QuoteProvider>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
        <QuoteDetails id={params.id} />
      </div>
    </QuoteProvider>
  );
};

export default QuotePage;