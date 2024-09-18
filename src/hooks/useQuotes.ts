import { useState, useEffect } from 'react';
import { Quote } from '@/types';

export const useQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('/api/quotes');
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        setQuotes(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching quotes');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  return { quotes, isLoading, error };
};