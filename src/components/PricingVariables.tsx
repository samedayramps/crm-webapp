'use client';

import React, { useState, useEffect } from 'react';
import { AddressField } from '@/components/ui/AddressField';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { usePricingVariables } from '@/hooks/usePricingVariables';

const PricingVariables: React.FC = () => {
  const { pricingVariables, updatePricingVariables, isLoading, error } = usePricingVariables();
  const [formData, setFormData] = useState(pricingVariables);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setFormData(pricingVariables);
  }, [pricingVariables]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (value: string) => {
    setFormData(prev => ({ ...prev, warehouseAddress: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    try {
      await updatePricingVariables(formData);
      // Optionally, you can add a success message here
    } catch (error) {
      setSaveError('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-4">Loading pricing variables...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">Error loading pricing variables: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Pricing Variables</h2>
      
      <div>
        <AddressField
          value={formData.warehouseAddress}
          onChange={handleAddressChange}
          label="Warehouse Address"
          placeholder="Enter warehouse address"
        />
      </div>
      
      <div>
        <label htmlFor="monthlyRatePerFt" className="block text-sm font-medium text-gray-700">
          Monthly Rate per ft ($)
        </label>
        <Input
          type="number"
          id="monthlyRatePerFt"
          name="monthlyRatePerFt"
          value={formData.monthlyRatePerFt}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      <div>
        <label htmlFor="installRatePerComponent" className="block text-sm font-medium text-gray-700">
          Install Rate per Component ($)
        </label>
        <Input
          type="number"
          id="installRatePerComponent"
          name="installRatePerComponent"
          value={formData.installRatePerComponent}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      <div>
        <label htmlFor="deliveryRatePerMile" className="block text-sm font-medium text-gray-700">
          Delivery Rate per Mile ($)
        </label>
        <Input
          type="number"
          id="deliveryRatePerMile"
          name="deliveryRatePerMile"
          value={formData.deliveryRatePerMile}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>

      <div>
        <label htmlFor="baseInstallFee" className="block text-sm font-medium text-gray-700">
          Base Install Fee ($)
        </label>
        <Input
          type="number"
          id="baseInstallFee"
          name="baseInstallFee"
          value={formData.baseInstallFee}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>

      <div>
        <label htmlFor="baseDeliveryFee" className="block text-sm font-medium text-gray-700">
          Base Delivery Fee ($)
        </label>
        <Input
          type="number"
          id="baseDeliveryFee"
          name="baseDeliveryFee"
          value={formData.baseDeliveryFee}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      {saveError && <div className="text-red-500">{saveError}</div>}
      
      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default PricingVariables;