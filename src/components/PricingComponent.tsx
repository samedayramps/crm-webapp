'use client';

import React, { useEffect, useState } from 'react';
import { usePricingVariables } from '@/hooks/usePricingVariables';
import { useDistanceCalculation } from '@/hooks/useDistanceCalculation';
import { RampComponent } from '@/types';

interface PricingComponentProps {
  rampComponents: RampComponent[];
  totalLength: number;
  installAddress: string;
  onPriceCalculated: (installPrice: number, deliveryPrice: number, monthlyRate: number) => void;
  initialInstallPrice?: number;
  initialDeliveryPrice?: number;
  initialMonthlyRate?: number;
  readOnly?: boolean;
}

const PricingComponent: React.FC<PricingComponentProps> = ({ 
  rampComponents, 
  totalLength, 
  installAddress,
  onPriceCalculated,
  initialInstallPrice,
  initialDeliveryPrice,
  initialMonthlyRate,
  readOnly = false
}) => {
  const { pricingVariables, isLoading: isPricingLoading, error: pricingError } = usePricingVariables();
  const { distance, error: distanceError } = useDistanceCalculation(pricingVariables.warehouseAddress, installAddress);
  const [installPrice, setInstallPrice] = useState(initialInstallPrice || 0);
  const [deliveryPrice, setDeliveryPrice] = useState(initialDeliveryPrice || 0);
  const [monthlyRate, setMonthlyRate] = useState(initialMonthlyRate || 0);

  useEffect(() => {
    if (isPricingLoading || distance === null) return;

    const calculatePrices = () => {
      const install = rampComponents.reduce((total, component) => 
        total + (component.quantity * pricingVariables.installRatePerComponent), 0);
      const delivery = distance * pricingVariables.deliveryRatePerMile;
      const monthly = totalLength * pricingVariables.monthlyRatePerFt;

      setInstallPrice(Number(install.toFixed(2)));
      setDeliveryPrice(Number(delivery.toFixed(2)));
      setMonthlyRate(Number(monthly.toFixed(2)));

      onPriceCalculated(install, delivery, monthly);
    };

    calculatePrices();
  }, [rampComponents, totalLength, distance, pricingVariables, isPricingLoading, onPriceCalculated]);

  if (isPricingLoading) {
    return <div>Loading pricing information...</div>;
  }

  if (pricingError) {
    return <div>Error loading pricing variables: {pricingError}</div>;
  }

  if (distanceError) {
    return (
      <div>
        <p>Error calculating distance: {distanceError}</p>
        <p>Unable to provide accurate pricing at this time.</p>
      </div>
    );
  }

  if (distance === null) {
    return <div>Calculating distance...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Pricing Details</h2>
      <div className="space-y-2">
        <p>Installation Price: ${installPrice.toFixed(2)}</p>
        <p>Delivery Price: ${deliveryPrice.toFixed(2)}</p>
        <p>Monthly Rate: ${monthlyRate.toFixed(2)}</p>
      </div>
      {!readOnly && (
        <button 
          onClick={() => onPriceCalculated(installPrice, deliveryPrice, monthlyRate)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Pricing
        </button>
      )}
    </div>
  );
};

export default PricingComponent;