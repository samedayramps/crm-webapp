'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

export default function CustomerDetails({ params }: { params: { id: string } }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [editedCustomer, setEditedCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`/api/customers/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch customer');
        }
        const data = await response.json();
        setCustomer(data.data);
        setEditedCustomer(data.data);
      } catch (err) {
        setError('Failed to load customer. Please try again later.');
        console.error('Error fetching customer:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomer();
  }, [params.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    if (!editedCustomer) return;

    try {
      const response = await fetch(`/api/customers/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCustomer),
      });

      if (!response.ok) {
        throw new Error('Failed to update customer');
      }

      const updatedCustomer = await response.json();
      setCustomer(updatedCustomer.data);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating customer:', err);
      alert('Failed to update customer. Please try again.');
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      try {
        const response = await fetch(`/api/customers/${params.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete customer');
        }
        router.push('/customers');
      } catch (err) {
        console.error('Error deleting customer:', err);
        alert('Failed to delete customer. Please try again.');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedCustomer) return;
    setEditedCustomer({
      ...editedCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (value: string) => {
    if (!editedCustomer) return;
    setEditedCustomer({
      ...editedCustomer,
      installAddress: value,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!customer) return <p>Customer not found.</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {isEditing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <Input
                id="firstName"
                name="firstName"
                value={editedCustomer?.firstName || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                value={editedCustomer?.lastName || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                name="email"
                value={editedCustomer?.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={editedCustomer?.phoneNumber || ''}
                onChange={handleInputChange}
              />
            </div>
            <AddressField
              value={editedCustomer?.installAddress || ''}
              onChange={handleAddressChange}
              label="Installation Address"
              placeholder="Enter customer's installation address"
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
            <p><strong>Installation Address:</strong> {customer.installAddress}</p>
            <p><strong>Mobility Aids:</strong> {customer.mobilityAids.join(', ')}</p>
            <div className="mt-6 flex justify-between">
              <ActionButton onClick={handleEdit} label="Edit" variant="secondary" />
              <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}