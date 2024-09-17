import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface RampDetailsFormProps {
  formData: {
    knowRampLength: string;
    estimatedRampLength: string;
    knowRentalDuration: string;
    estimatedRentalDuration: string;
    installationTimeframe: string;
    mobilityAids: string[];
    installAddress: string;
  };
  errors?: Partial<{
    knowRampLength: string;
    estimatedRampLength: string;
    knowRentalDuration: string;
    estimatedRentalDuration: string;
    installationTimeframe: string;
    mobilityAids: string[];
    installAddress: string;
  }>;
  onChange: (name: string, value: string | string[]) => void;
  onPrevPage: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export const RampDetailsForm: React.FC<RampDetailsFormProps> = ({
  formData,
  errors,
  onChange,
  onPrevPage,
  onSubmit,
  isSubmitting,
}) => {
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
                checked={formData.knowRampLength === 'yes'}
                onChange={(e) => onChange('knowRampLength', e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="no"
                checked={formData.knowRampLength === 'no'}
                onChange={(e) => onChange('knowRampLength', e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {formData.knowRampLength === 'yes' && (
          <div>
            <label htmlFor="estimatedRampLength" className="block text-sm font-medium">Estimated ramp length (in feet)</label>
            <Input
              id="estimatedRampLength"
              type="number"
              value={formData.estimatedRampLength}
              onChange={(e) => onChange('estimatedRampLength', e.target.value)}
              error={errors?.estimatedRampLength}
              className="mt-1"
            />
          </div>
        )}
        
        {/* New section for rental duration */}
        <div>
          <label className="block text-sm font-medium">Do you know how long you need the ramp?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="yes"
                checked={formData.knowRentalDuration === 'yes'}
                onChange={(e) => onChange('knowRentalDuration', e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="no"
                checked={formData.knowRentalDuration === 'no'}
                onChange={(e) => onChange('knowRentalDuration', e.target.value)}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {formData.knowRentalDuration === 'yes' && (
          <div>
            <label htmlFor="estimatedRentalDuration" className="block text-sm font-medium">Estimated rental duration (in days)</label>
            <Input
              id="estimatedRentalDuration"
              type="number"
              value={formData.estimatedRentalDuration}
              onChange={(e) => onChange('estimatedRentalDuration', e.target.value)}
              error={errors?.estimatedRentalDuration}
              className="mt-1"
            />
          </div>
        )}

        <div>
          <label htmlFor="installationTimeframe" className="block text-sm font-medium">How soon do you need the ramp installed?</label>
          <Select
            id="installationTimeframe"
            value={formData.installationTimeframe}
            onChange={(e) => onChange('installationTimeframe', e.target.value)}
            error={errors?.installationTimeframe}
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
                  checked={formData.mobilityAids.includes(aid)}
                  onCheckedChange={(checked: boolean) => {
                    const newAids = checked
                      ? [...formData.mobilityAids, aid]
                      : formData.mobilityAids.filter((item) => item !== aid);
                    onChange('mobilityAids', newAids);
                  }}
                />
                <span className="ml-2 text-sm">{aid}</span>
              </label>
            ))}
          </div>
        </div>
        <AddressField
          value={formData.installAddress}
          onChange={(value) => onChange('installAddress', value)}
          error={errors?.installAddress}
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