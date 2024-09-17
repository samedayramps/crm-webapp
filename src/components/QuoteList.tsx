'use client';  // Add this line at the top of the file

import React from 'react';
import Link from 'next/link';
import { useQuoteContext } from '@/contexts/QuoteContext';

const QuoteList: React.FC = () => {
  const { quotes, loading, error } = useQuoteContext();

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quotes || quotes.length === 0) {
    return <div>No quotes available.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quotes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {quotes.map((quote) => (
            <tr key={quote._id}>
              <td className="px-6 py-4 whitespace-nowrap">{quote.customer.firstName} {quote.customer.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">${quote.totalPrice.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{quote.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(quote.createdAt).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/quotes/${quote._id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteList;