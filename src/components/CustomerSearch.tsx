'use client';

import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCustomers } from '@/store/customersSlice';
import { Customer } from '@/types';

interface CustomerSearchProps {
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerSearch: React.FC<CustomerSearchProps> = ({ onSelectCustomer }) => {
  const dispatch = useAppDispatch();
  const { customers, loading, error } = useAppSelector(state => state.customers);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Customer[]>([]);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filteredCustomers = customers.filter(customer =>
        `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredCustomers);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, customers]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectCustomer = (customer: Customer) => {
    onSelectCustomer(customer);
    setSearchTerm('');
    setSearchResults([]);
  };

  if (loading) return <div>Loading customers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a customer"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-3 py-2 border rounded-md"
      />
      {searchResults.length > 0 && (
        <ul className="mt-2 border rounded-md max-h-80 overflow-y-auto">
          {searchResults.map(customer => (
            <li 
              key={customer._id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={() => handleSelectCustomer(customer)}
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