'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCustomers } from '@/store/customersSlice';
import { Customer } from '@/types';

const CustomerList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { customers, loading, error } = useAppSelector(state => state.customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  useEffect(() => {
    console.log('Customers state:', customers);
  }, [customers]);

  if (loading) return <div>Loading customers...</div>;
  if (error) return <div>Error: {error}</div>;

  // Check if customers is an array and has items
  const hasCustomers = Array.isArray(customers) && customers.length > 0;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      {!hasCustomers ? (
        <p>No customers found.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer: Customer) => (
              <tr key={customer._id}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.firstName} {customer.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/customers/${customer._id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerList;