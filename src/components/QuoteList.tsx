'use client';

import React from 'react';
import { useQuotes } from '@/hooks/useQuotes';
import { Quote, Customer } from '@/types';
import Link from 'next/link';

const QuoteList: React.FC = () => {
  const { quotes, isLoading, error } = useQuotes();

  const getCustomerName = (customer: Customer | string | null): string => {
    if (typeof customer === 'string') {
      return 'Customer ID: ' + customer;
    }
    if (customer && 'firstName' in customer && 'lastName' in customer) {
      return `${customer.firstName} ${customer.lastName}`;
    }
    return 'Unknown Customer';
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
  };

  if (isLoading) return <div>Loading quotes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Customer</th>
            <th className="py-2 px-4 border-b">Created At</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote: Quote) => (
            <tr key={quote._id}>
              <td className="py-2 px-4 border-b">{getCustomerName(quote.customer)}</td>
              <td className="py-2 px-4 border-b">{formatDate(quote.createdAt)}</td>
              <td className="py-2 px-4 border-b">{quote.status}</td>
              <td className="py-2 px-4 border-b">
                <Link href={`/quotes/${quote._id}`} className="text-blue-500 hover:underline">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteList;