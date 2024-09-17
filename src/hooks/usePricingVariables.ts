import { useState, useEffect } from 'react';

interface PricingVariables {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

const defaultPricingVariables: PricingVariables = {
  warehouseAddress: '',
  monthlyRatePerFt: 0,
  installRatePerComponent: 0,
  deliveryRatePerMile: 0,
};

export const usePricingVariables = () => {
  const [pricingVariables, setPricingVariables] = useState<PricingVariables>(defaultPricingVariables);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (!response.ok) throw new Error('Failed to fetch settings');
        const { data } = await response.json();
        setPricingVariables(data || defaultPricingVariables);
      } catch (error) {
        console.error('Error fetching settings:', error);
        setError('Failed to load settings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updatePricingVariables = async (newVariables: PricingVariables) => {
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
      throw error; // Re-throw the error to be handled in the component
    }
  };

  return { pricingVariables, updatePricingVariables, isLoading, error };
};