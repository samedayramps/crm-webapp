import React, { useState } from 'react';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';
import { Customer, RampComponent, QuoteData } from '@/types';

interface QuoteFormProps {
  customer: Customer;
  onCreateQuote: (quoteData: QuoteData) => Promise<void>;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ customer, onCreateQuote }) => {
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);
  const [totalLength, setTotalLength] = useState(0);
  const [installPrice, setInstallPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [monthlyRate, setMonthlyRate] = useState(0);

  const handleRampConfigurationChange = (components: RampComponent[], length: number) => {
    setRampComponents(components);
    setTotalLength(length);
  };

  const handlePriceCalculated = (install: number, delivery: number, monthly: number) => {
    setInstallPrice(install);
    setDeliveryPrice(delivery);
    setMonthlyRate(monthly);
  };

  const handleSubmit = async () => {
    const quoteData: QuoteData = {
      customer: customer._id,
      installPrice,
      deliveryPrice,
      monthlyRate,
      components: rampComponents,
      status: 'DRAFT',
      createdAt: new Date().toISOString(),
      sentAt: null,
      signedAt: null,
      paymentStatus: 'PENDING',
    };

    await onCreateQuote(quoteData);
  };

  return (
    <div>
      <RampConfigurationV2 onConfigurationChange={handleRampConfigurationChange} />
      <PricingComponent 
        rampComponents={rampComponents} 
        totalLength={totalLength} 
        installAddress={customer.installAddress || ''}
        onPriceCalculated={handlePriceCalculated}
      />
      <button 
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Create Quote
      </button>
    </div>
  );
};

export default QuoteForm;