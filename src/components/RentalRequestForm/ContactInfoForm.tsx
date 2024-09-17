// src/components/RentalRequestForm/ContactInfoForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FormattedPhoneInput } from '@/components/ui/FormattedPhoneInput';
import { RentalRequest } from '@/types';

interface ContactInfoFormProps {
  values: Partial<RentalRequest>;
  errors: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextPage: () => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  values,
  errors,
  onChange,
  onNextPage,
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
            value={values.firstName || ''}
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
            value={values.lastName || ''}
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
            value={values.email || ''}
            onChange={onChange}
            error={errors.email}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
          <FormattedPhoneInput
            value={values.phone || ''}
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