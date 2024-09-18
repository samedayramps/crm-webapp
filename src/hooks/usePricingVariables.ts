import { useState, useEffect } from 'react';
import { Settings } from '@/types';

const defaultPricingVariables: Settings = {
  _id: '',
  warehouseAddress: '',
  monthlyRatePerFt: 0,
  installRatePerComponent: 0,
  deliveryRatePerMile: 0,
  baseInstallFee: 0,
  baseDeliveryFee: 0,
};

export const usePricingVariables = () => {
  const [pricingVariables, setPricingVariables] = useState<Settings>(defaultPricingVariables);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (!response.ok) throw new Error('Failed to fetch settings');
        const { data } = await response.json();
        console.log('Fetched settings:', data);
        if (data) {
          setPricingVariables({
            _id: data._id,
            warehouseAddress: data.warehouseAddress || '',
            monthlyRatePerFt: Number(data.monthlyRatePerFt) || 0,
            installRatePerComponent: Number(data.installRatePerComponent) || 0,
            deliveryRatePerMile: Number(data.deliveryRatePerMile) || 0,
            baseInstallFee: Number(data.baseInstallFee) || 0,
            baseDeliveryFee: Number(data.baseDeliveryFee) || 0,
          });
        } else {
          setPricingVariables(defaultPricingVariables);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
        setError('Failed to load settings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updatePricingVariables = async (newVariables: Partial<Settings>) => {
    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVariables),
      });
      if (!response.ok) throw new Error('Failed to update settings');
      const { data } = await response.json();
      setPricingVariables(data);
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  };

  return { pricingVariables, updatePricingVariables, isLoading, error };
};