'use client';

import React, { useState } from 'react';
import { Customer } from '@/types';

interface CustomerSearchProps {
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerSearch: React.FC<CustomerSearchProps> = ({ onSelectCustomer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/customers/search?term=${encodeURIComponent(term)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      setError('An error occurred while searching for customers');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a customer"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-3 py-2 border rounded-md"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {searchResults.length > 0 && (
        <ul className="mt-2 border rounded-md max-h-80 overflow-y-auto">
          {searchResults.map(customer => (
            <li 
              key={customer._id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={() => onSelectCustomer(customer)}
            >
              <div className="font-semibold">{customer.firstName} {customer.lastName}</div>
              <div className="text-sm text-gray-600">{customer.email}</div>
              <div className="text-sm text-gray-600">Phone: {customer.phoneNumber}</div>
              {customer.installAddress && (
                <div className="text-sm text-gray-600">Install Address: {customer.installAddress}</div>
              )}
              {customer.mobilityAids && customer.mobilityAids.length > 0 && (
                <div className="text-sm text-gray-600">
                  Mobility Aids: {customer.mobilityAids.join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerSearch;