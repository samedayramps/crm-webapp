// src/components/RentalRequestForm/RampDetailsForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';
import { RentalRequest } from '@/types';

interface RampDetailsFormProps {
  values: Partial<RentalRequest>;
  errors: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }) => void;
  onPrevPage: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const RampDetailsForm: React.FC<RampDetailsFormProps> = ({
  values,
  errors,
  onChange,
  onPrevPage,
  onSubmit,
  isSubmitting,
}) => {
  const handleCheckboxChange = (aid: string) => (checked: boolean) => {
    const newAids = checked
      ? [...(values.mobilityAids || []), aid]
      : (values.mobilityAids || []).filter((item) => item !== aid);
    onChange({ name: 'mobilityAids', value: newAids });
  };

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">Ramp Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Do you know the length of ramp you need?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="yes"
                checked={values.knowRampLength === 'yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="no"
                checked={values.knowRampLength === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {values.knowRampLength === 'yes' && (
          <div>
            <label htmlFor="estimatedRampLength" className="block text-sm font-medium">Estimated ramp length (in feet)</label>
            <Input
              id="estimatedRampLength"
              name="estimatedRampLength"
              type="number"
              value={values.estimatedRampLength || ''}
              onChange={onChange}
              error={errors.estimatedRampLength}
              className="mt-1"
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium">Do you know how long you need the ramp?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="yes"
                checked={values.knowRentalDuration === 'yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="no"
                checked={values.knowRentalDuration === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {values.knowRentalDuration === 'yes' && (
          <div>
            <label htmlFor="estimatedRentalDuration" className="block text-sm font-medium">Estimated rental duration (in days)</label>
            <Input
              id="estimatedRentalDuration"
              name="estimatedRentalDuration"
              type="number"
              value={values.estimatedRentalDuration || ''}
              onChange={onChange}
              error={errors.estimatedRentalDuration}
              className="mt-1"
            />
          </div>
        )}

        <div>
          <label htmlFor="installationTimeframe" className="block text-sm font-medium">How soon do you need the ramp installed?</label>
          <Select
            id="installationTimeframe"
            name="installationTimeframe"
            value={values.installationTimeframe || ''}
            onChange={onChange}
            error={errors.installationTimeframe}
          >
            <option value="">Select timeframe</option>
            <option value="Within 24 hours">Within 24 hours</option>
            <option value="Within 2-3 days">Within 2-3 days</option>
            <option value="Within 1 week">Within 1 week</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="More than 2 weeks">More than 2 weeks</option>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium">Mobility Aids (select any that apply)</label>
          <div className="mt-2 space-y-2">
            {['Wheelchair', 'Motorized scooter', 'Walker'].map((aid) => (
              <label key={aid} className="inline-flex items-center">
                <Checkbox
                  checked={values.mobilityAids?.includes(aid) || false}
                  onCheckedChange={handleCheckboxChange(aid)}
                />
                <span className="ml-2 text-sm">{aid}</span>
              </label>
            ))}
          </div>
        </div>
        <AddressField
          value={values.installAddress || ''}
          onChange={(value) => onChange({ target: { name: 'installAddress', value } } as React.ChangeEvent<HTMLInputElement>)}
          error={errors.installAddress}
          label="Installation Address"
          placeholder="Enter the address where the ramp will be installed"
        />

        <div className="flex justify-between pt-4">
          <Button onClick={onPrevPage} variant="secondary">Previous</Button>
          <Button onClick={onSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </div>
    </div>
  );
};