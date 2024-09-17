'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { api } from '@/utils/api';
import { RentalRequest } from '@/types';

const RentalRequestCard: React.FC<{ request: RentalRequest }> = ({ request }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h3 className="text-lg font-semibold mb-2">{request.firstName} {request.lastName}</h3>
    <p className="text-sm text-gray-600 mb-1">Email: {request.email}</p>
    <p className="text-sm text-gray-600 mb-1">Phone: {request.phone}</p>
    <p className="text-sm text-gray-600 mb-1">Installation: {request.installationTimeframe}</p>
    <p className="text-sm text-gray-600 mb-1">Address: {request.installAddress}</p>
    <p className="text-sm text-gray-600 mb-4">Submitted: {new Date(request.createdAt).toLocaleDateString()}</p>
    <Link href={`/rental-requests/${request._id}`} passHref>
      <Button variant="secondary" className="w-full">View Details</Button>
    </Link>
  </div>
);

const RentalRequestsPage = () => {
  const [rentalRequests, setRentalRequests] = useState<RentalRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentalRequests = async () => {
      try {
        const response = await api.get<RentalRequest[]>('/rental-requests');
        if (response.data) {
          setRentalRequests(Array.isArray(response.data) ? response.data : []);
        } else if (response.error) {
          setError(response.error);
        }
      } catch (err) {
        setError('Failed to load rental requests. Please try again later.');
        console.error('Error fetching rental requests:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalRequests();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Rental Requests</h1>
      <div className="mb-6">
        <Link href="/rental-requests/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Rental Request
        </Link>
      </div>
      {isLoading ? (
        <p>Loading rental requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : rentalRequests.length === 0 ? (
        <p>No rental requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rentalRequests.map((request) => (
            <RentalRequestCard key={request._id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalRequestsPage;