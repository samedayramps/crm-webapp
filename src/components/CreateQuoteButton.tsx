'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { useAppSelector } from '@/store/hooks';

const CreateQuoteButton: React.FC = () => {
  const router = useRouter();
  const { customers } = useAppSelector(state => state.customers);

  const handleClick = () => {
    if (customers.length === 0) {
      alert('Please add a customer before creating a quote.');
      router.push('/customers/new');
    } else {
      router.push('/quotes/new');
    }
  };

  return (
    <Button onClick={handleClick}>
      Create New Quote
    </Button>
  );
};

export default CreateQuoteButton;