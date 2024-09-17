import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';

interface QuoteLayoutProps {
  children: React.ReactNode;
}

const QuoteLayout: React.FC<QuoteLayoutProps> = ({ children }) => {
  return (
    <QuoteProvider>
      {children}
    </QuoteProvider>
  );
};

export default QuoteLayout;