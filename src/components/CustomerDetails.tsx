"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { api } from '@/utils/api';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface CustomerDetailsProps {
  customer: Customer;
  showActions?: boolean;
  onCustomerUpdate?: (updatedCustomer: Customer) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, showActions = false, onCustomerUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer>(customer);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    const response = await api.put<Customer>(`/customers/${customer._id}`, editedCustomer);
    if (response.data) {
      setIsEditing(false);
      if (onCustomerUpdate) {
        onCustomerUpdate(response.data);
      }
    } else if (response.error) {
      setError(response.error);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      const response = await api.delete<void>(`/customers/${customer._id}`);
      if (!response.error) {
        router.push('/customers');
      } else {
        setError(response.error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCustomer({
      ...editedCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (value: string) => {
    setEditedCustomer({
      ...editedCustomer,
      installAddress: value,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <Input
              id="firstName"
              name="firstName"
              value={editedCustomer.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <Input
              id="lastName"
              name="lastName"
              value={editedCustomer.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              value={editedCustomer.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={editedCustomer.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <AddressField
            value={editedCustomer.installAddress || ''}
            onChange={handleAddressChange}
            label="Install Address"
            placeholder="Enter customer's install address"
          />
          <div className="flex justify-between">
            <Button type="button" onClick={handleCancelEdit} variant="secondary">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">{customer.firstName} {customer.lastName}</h2>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phoneNumber}</p>
          <p><strong>Install Address:</strong> {customer.installAddress || 'Not provided'}</p>
          <p><strong>Mobility Aids:</strong> {customer.mobilityAids.join(', ')}</p>
          {showActions && (
            <div className="mt-6 flex justify-between">
              <ActionButton onClick={handleEdit} label="Edit" variant="secondary" />
              <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomerDetails;