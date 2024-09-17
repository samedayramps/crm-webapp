'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const CreateQuoteButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quotes/new');
  };

  return (
    <Button onClick={handleClick}>
      Create New Quote
    </Button>
  );
};

export default CreateQuoteButton;