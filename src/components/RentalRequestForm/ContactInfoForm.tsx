// src/components/RentalRequestForm/ContactInfoForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FormattedPhoneInput } from '@/components/ui/FormattedPhoneInput';

interface ContactInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextPage: () => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  formData,
  errors,
  onChange,
  onNextPage
}) => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={onChange}
            error={errors.firstName}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={onChange}
            error={errors.lastName}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={onChange}
            error={errors.email}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
          <FormattedPhoneInput
            value={formData.phone || ''}
            onChange={(value) => onChange({ target: { name: 'phone', value } } as React.ChangeEvent<HTMLInputElement>)}
            error={errors.phone}
            className="mt-1"
          />
        </div>
      </div>
      <div className="pt-4">
        <Button onClick={onNextPage} className="w-full">Next</Button>
      </div>
    </div>
  );
};