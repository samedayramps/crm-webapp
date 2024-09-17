'use client';

import React, { useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { RentalRequest } from '@/types';

type FormErrors = {
  [K in keyof Omit<RentalRequest, '_id' | 'createdAt'>]?: string;
};

type ChangeEventOrCustomChange = 
  | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  | { name: string; value: string | string[] };

interface RentalRequestFormProps {
  onSubmit: (data: Omit<RentalRequest, '_id' | 'createdAt'>) => Promise<void>;
}

export const RentalRequestForm: React.FC<RentalRequestFormProps> = ({ onSubmit }) => {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState<Omit<RentalRequest, '_id' | 'createdAt'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    knowRampLength: '',
    estimatedRampLength: '',
    knowRentalDuration: '',
    estimatedRentalDuration: '',
    installationTimeframe: '',
    mobilityAids: [],
    installAddress: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEventOrCustomChange) => {
    const { name, value } = 'target' in e ? e.target : e;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleNextPage = () => {
    if (validatePage(1)) {
      setPage(2);
    }
  };

  const handlePrevPage = () => {
    setPage(1);
  };

  const validatePage = (pageNum: number): boolean => {
    const newErrors: FormErrors = {};
    if (pageNum === 1) {
      if (!values.firstName) newErrors.firstName = 'First name is required';
      if (!values.lastName) newErrors.lastName = 'Last name is required';
      if (!values.email) newErrors.email = 'Email is required';
      if (!values.phone) newErrors.phone = 'Phone number is required';
    } else if (pageNum === 2) {
      // Add validation for page 2 fields here
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validatePage(2)) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        // Handle successful submission (e.g., show success message, redirect)
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show error message)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      {page === 1 && (
        <ContactInfoForm
          formData={values}
          errors={errors}
          onChange={handleChange}
          onNextPage={handleNextPage}
        />
      )}
      {page === 2 && (
        <RampDetailsForm
          formData={values}
          errors={errors}
          onChange={handleChange}
          onPrevPage={handlePrevPage}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};