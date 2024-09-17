'use client';

import React, { useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { Button } from '@/components/ui/Button';
import { IRentalRequest } from '@/models';

interface RentalRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength: string;
  knowRentalDuration: string;
  estimatedRentalDuration: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
}

// Define a new type for errors where all values are strings
type FormErrors = {
  [K in keyof RentalRequestFormData]?: string;
};

interface EditRentalRequestFormProps {
  initialData: IRentalRequest;
  onSubmit: (data: IRentalRequest) => Promise<void>;
  onCancel: () => void;
}

export const EditRentalRequestForm: React.FC<EditRentalRequestFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<RentalRequestFormData>({
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    email: initialData.email,
    phone: initialData.phone,
    knowRampLength: initialData.knowRampLength,
    estimatedRampLength: initialData.estimatedRampLength || '',
    knowRentalDuration: initialData.knowRentalDuration,
    estimatedRentalDuration: initialData.estimatedRentalDuration || '',
    installationTimeframe: initialData.installationTimeframe,
    mobilityAids: initialData.mobilityAids,
    installAddress: initialData.installAddress,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }
  ) => {
    const { name, value } = 'target' in e ? e.target : e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    // Implement form validation logic here
    // For example:
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    // Add more validation as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData as IRentalRequest);
      } catch (error) {
        console.error('Error updating rental request:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ContactInfoForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onNextPage={() => {}} // Not used in edit mode
      />
      <RampDetailsForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onPrevPage={() => {}} // Not used in edit mode
        onSubmit={() => {}} // Not used in edit mode
        isSubmitting={isSubmitting}
      />
      <div className="flex justify-between">
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Updating...' : 'Update Request'}
        </Button>
      </div>
    </form>
  );
};