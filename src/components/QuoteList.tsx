'use client';

import React from 'react';
import Link from 'next/link';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Customer } from '@/types';

const QuoteList: React.FC = () => {
  const { quotes, loading, error } = useQuoteContext();

  const getCustomerName = (customer: string | Customer): string => {
    if (typeof customer === 'string') {
      return 'N/A';
    }
    return `${customer.firstName} ${customer.lastName}`;
  };

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {quotes.map((quote) => (
                  <tr key={quote._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getCustomerName(quote.customer)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{quote.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(quote.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/quotes/${quote._id}`} className="text-indigo-600 hover:text-indigo-900">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteList;