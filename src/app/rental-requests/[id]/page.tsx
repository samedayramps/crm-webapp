'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ActionButton } from '@/components/ui/ActionButton';
import { IRentalRequest } from '@/models';

export default function RentalRequestDetails({ params }: { params: { id: string } }) {
  const [request, setRequest] = useState<IRentalRequest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRentalRequest = async () => {
      try {
        const response = await fetch(`/api/rental-requests/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch rental request');
        }
        const data = await response.json();
        setRequest(data.data);
      } catch (err) {
        setError('Failed to load rental request. Please try again later.');
        console.error('Error fetching rental request:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalRequest();
  }, [params.id]);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this rental request?')) {
      try {
        const response = await fetch(`/api/rental-requests/${params.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete rental request');
        }
        router.push('/rental-requests');
      } catch (err) {
        console.error('Error deleting rental request:', err);
        alert('Failed to delete rental request. Please try again.');
      }
    }
  };

  const handleCreateCustomer = async () => {
    if (!request) return;

    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: request.firstName,
          lastName: request.lastName,
          email: request.email,
          phoneNumber: request.phone,
          installAddress: request.installAddress,
          mobilityAids: request.mobilityAids || [],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }

      const result = await response.json();
      console.log('Customer creation response:', result);
      if (result.data && result.data.id) {
        router.push(`/customers/${result.data.id}`);
      } else {
        throw new Error('Customer ID not returned from server');
      }
    } catch (err) {
      console.error('Error creating customer:', err);
      alert('Failed to create customer. Please try again.');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!request) return <p>Rental request not found.</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Rental Request Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{request.firstName} {request.lastName}</h2>
        <p><strong>Email:</strong> {request.email}</p>
        <p><strong>Phone:</strong> {request.phone}</p>
        <p><strong>Installation Timeframe:</strong> {request.installationTimeframe}</p>
        <p><strong>Installation Address:</strong> {request.installAddress}</p>
        <p><strong>Ramp Length:</strong> {request.knowRampLength === 'yes' ? `${request.estimatedRampLength} feet` : 'Unknown'}</p>
        <p><strong>Rental Duration:</strong> {request.knowRentalDuration === 'yes' ? `${request.estimatedRentalDuration} days` : 'Unknown'}</p>
        <p><strong>Mobility Aids:</strong> {request.mobilityAids && request.mobilityAids.length > 0 ? request.mobilityAids.join(', ') : 'None specified'}</p>
        <p><strong>Submitted:</strong> {request.createdAt ? new Date(request.createdAt).toLocaleString() : 'Unknown'}</p>
      </div>
      <div className="flex justify-between mt-6">
        <ActionButton onClick={handleCreateCustomer} label="Create Customer" variant="default" />
        <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
      </div>
    </div>
  );
}