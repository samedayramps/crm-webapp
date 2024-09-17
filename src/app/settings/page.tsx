'use client';

import React from 'react';
import PricingVariables from '@/components/PricingVariables';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <PricingVariables />
    </div>
  );
};

export default SettingsPage;