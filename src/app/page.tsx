import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Wheelchair Ramp Rental</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/rental-requests/new" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">New Rental Request</h5>
          <p className="font-normal text-gray-700">Submit a new request for a wheelchair ramp rental.</p>
        </Link>
        <Link href="/quotes" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">View Quotes</h5>
          <p className="font-normal text-gray-700">Check and manage existing quotes.</p>
        </Link>
        <Link href="/customers" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Customer List</h5>
          <p className="font-normal text-gray-700">View and manage customer information.</p>
        </Link>
      </div>
    </div>
  );
}