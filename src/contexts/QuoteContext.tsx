'use client';  // Add this line at the top of the file

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define a type for quote components
interface QuoteComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
  // Add any other relevant fields
}

interface Quote {
  _id: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  totalPrice: number;
  components: QuoteComponent[]; // Replace 'any' with the new type
  status: string;
  createdAt: string;
  sentAt: string | null;
  signedAt: string | null;
  paymentStatus: string;
}

interface QuoteContextType {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  fetchQuotes: () => Promise<void>;
  getQuote: (id: string) => Quote | undefined;
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

  const getQuote = (id: string) => quotes.find(quote => quote._id === id);

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

  const updateQuote = async (id: string, quote: Partial<Quote>) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/quotes/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quote),
      });
      if (!response.ok) {
        throw new Error('Failed to update quote');
      }
      const updatedQuote = await response.json();
      setQuotes(prevQuotes => prevQuotes.map(q => q._id === id ? updatedQuote : q));
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
      setQuotes(prevQuotes => prevQuotes.filter(quote => quote._id !== id));
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