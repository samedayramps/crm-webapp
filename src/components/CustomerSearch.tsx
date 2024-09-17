'use client';

import React, { useState } from 'react';

interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

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
        <ul className="mt-2 border rounded-md">
          {searchResults.map(customer => (
            <li 
              key={customer._id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelectCustomer(customer)}
            >
              <div>{customer.firstName} {customer.lastName}</div>
              <div className="text-sm text-gray-600">{customer.email}</div>
              <div className="text-sm text-gray-600">{customer.address}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerSearch;