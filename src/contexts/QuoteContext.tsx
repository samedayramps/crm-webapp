'use client';  // Add this line at the top of the file

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
// Remove the following line:
interface Quote {
  _id: string;
  customer: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  rentalRequest: string;
  totalPrice: number;
  components: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    _id: string;
  }>;
  status: string;
  createdAt: string;
  sentAt: string | null;
  signedAt: string | null;
  paymentStatus: string;
  updatedAt: string;
  __v: number;
}

interface QuoteContextType {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  fetchQuotes: () => Promise<void>;
  getQuote: (id: string) => Promise<Quote | null>;
  addQuote: (quote: Omit<Quote, '_id'>) => Promise<void>;
  updateQuote: (id: string, quote: Partial<Quote>) => Promise<void>;
  deleteQuote: (id: string) => Promise<void>;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuoteContext must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/quotes');
      if (!response.ok) {
        throw new Error('Failed to fetch quotes');
      }
      const data = await response.json();
      setQuotes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getQuote = async (id: string): Promise<Quote | null> => {
    try {
      const response = await fetch(`/api/quotes/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data: Quote = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching quote:', err);
      return null;
    }
  };

  const addQuote = async (quote: Omit<Quote, '_id'>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quote),
      });
      if (!response.ok) {
        throw new Error('Failed to add quote');
      }
      const newQuote = await response.json();
      setQuotes(prevQuotes => [...prevQuotes, newQuote]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const updateQuote = async (id: string, updatedQuote: Partial<Quote>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/quotes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedQuote),
      });
      if (!response.ok) {
        throw new Error('Failed to update quote');
      }
      const updatedQuoteData = await response.json();
      setQuotes(prevQuotes => prevQuotes.map(q => q._id === id ? updatedQuoteData : q));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const deleteQuote = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/quotes/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete quote');
      }
      setQuotes(prevQuotes => prevQuotes.filter(q => q._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <QuoteContext.Provider value={{ quotes, loading, error, fetchQuotes, getQuote, addQuote, updateQuote, deleteQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};