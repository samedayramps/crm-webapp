'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Quote } from '@/types/quote';

interface QuoteDetailsProps {
  id: string;
}

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ id }) => {
  const { getQuote, updateQuote, deleteQuote } = useQuoteContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuote, setEditedQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      const quote = await getQuote(id);
      if (quote) {
        setEditedQuote(quote);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, [id, getQuote]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!editedQuote) {
    return <div>Quote not found</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (editedQuote) {
      await updateQuote(id, editedQuote);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      await deleteQuote(id);
      router.push('/quotes');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedQuote(prev => prev ? { ...prev, [name]: value } : null);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Quote Details</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Customer</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
                <input
                  type="text"
                  name="customerName"
                  value={`${editedQuote.customer.firstName} ${editedQuote.customer.lastName}`}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  disabled
                />
              ) : (
                `${editedQuote.customer.firstName} ${editedQuote.customer.lastName}`
              )}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
                <input
                  type="number"
                  name="totalPrice"
                  value={editedQuote.totalPrice}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                `$${editedQuote.totalPrice.toFixed(2)}`
              )}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
                <input
                  type="text"
                  name="status"
                  value={editedQuote.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                editedQuote.status
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteDetails;