'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { api } from '@/utils/api';
import { Quote, ApiResponse } from '@/types';

interface QuoteContextType {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  fetchQuotes: () => Promise<void>;
  getQuote: (id: string) => Promise<ApiResponse<Quote>>;
  addQuote: (quote: Omit<Quote, '_id'>) => Promise<ApiResponse<Quote>>;
  updateQuote: (id: string, quote: Partial<Quote>) => Promise<ApiResponse<Quote>>;
  deleteQuote: (id: string) => Promise<ApiResponse<void>>;
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
    const response = await api.get<Quote[]>('/quotes');
    if (response.data) {
      setQuotes(Array.isArray(response.data) ? response.data : []);
    } else if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

  const getQuote = async (id: string): Promise<ApiResponse<Quote>> => {
    return await api.get<Quote>(`/quotes/${id}`);
  };

  const addQuote = async (quote: Omit<Quote, '_id'>): Promise<ApiResponse<Quote>> => {
    const response = await api.post<Quote>('/quotes', quote);
    if (response.data) {
      setQuotes(prevQuotes => [...prevQuotes, response.data!]);
    }
    return response;
  };

  const updateQuote = async (id: string, updatedQuote: Partial<Quote>): Promise<ApiResponse<Quote>> => {
    const response = await api.put<Quote>(`/quotes/${id}`, updatedQuote);
    if (response.data) {
      setQuotes(prevQuotes => prevQuotes.map(q => q._id === id ? response.data! : q));
    }
    return response;
    };

  const deleteQuote = async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete<void>(`/quotes/${id}`);
    if (!response.error) {
      setQuotes(prevQuotes => prevQuotes.filter(q => q._id !== id));
    }
    return response;
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