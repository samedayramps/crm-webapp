'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CreateQuoteButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quotes/new');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Create New Quote
    </button>
  );
};

export default CreateQuoteButton;