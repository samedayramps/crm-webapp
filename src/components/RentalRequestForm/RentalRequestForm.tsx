'use client';

import React from 'react';
import { useForm } from '@/hooks/useForm';
import { api } from '@/utils/api';
import { RentalRequest } from '@/types';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { ConfirmationPage } from './ConfirmationPage';

const initialState: Omit<RentalRequest, '_id' | 'createdAt'> = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  knowRampLength: 'no',
  estimatedRampLength: '',
  knowRentalDuration: 'no',
  estimatedRentalDuration: '',
  installationTimeframe: '',
  mobilityAids: [],
  installAddress: '',
};

const validateForm = (values: Omit<RentalRequest, '_id' | 'createdAt'>) => {
  const errors: { [key: string]: string } = {};
  if (!values.firstName) errors.firstName = 'First name is required';
  if (!values.lastName) errors.lastName = 'Last name is required';
  if (!values.email) errors.email = 'Email is required';
  // Add more validation as needed
  return errors;
};

const RentalRequestForm: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { values, errors, isSubmitting, handleChange, handleSubmit, setValues } = useForm(initialState, validateForm);

  const handleNextPage = () => {
    if (Object.keys(validateForm(values)).length === 0) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setPage(prev => prev - 1);
  };

  const onSubmit = async (formData: Omit<RentalRequest, '_id' | 'createdAt'>) => {
    const response = await api.post<RentalRequest>('/rental-requests', formData);
    if (response.data) {
      setPage(3); // Move to confirmation page
    } else if (response.error) {
      console.error('Error submitting form:', response.error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleStartOver = () => {
    setPage(1);
    setValues(initialState);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {page < 3 ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-gray-800 dark:text-gray-100">
            {page === 1 && (
              <ContactInfoForm
                values={values}
                errors={errors}
                onChange={handleChange}
                onNextPage={handleNextPage}
              />
            )}
            {page === 2 && (
              <RampDetailsForm
                values={values}
                errors={errors}
                onChange={handleChange}
                onPrevPage={handlePrevPage}
                onSubmit={() => handleSubmit(onSubmit)}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
          {errors.submit && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Error: {errors.submit}
            </div>
          )}
        </form>
      ) : (
        <ConfirmationPage onStartOver={handleStartOver} />
      )}
    </div>
  );
};

export default RentalRequestForm;