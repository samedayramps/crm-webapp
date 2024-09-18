import React from 'react';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerDetails from '@/components/CustomerDetails';
import { Customer } from '@/types';

interface CustomerSelectionProps {
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
  onCustomerUpdate: (updatedCustomer: Customer) => void;
}

const CustomerSelection: React.FC<CustomerSelectionProps> = ({
  selectedCustomer,
  onSelectCustomer,
  onCustomerUpdate,
}) => {
  return (
    <div>
      <CustomerSearch onSelectCustomer={onSelectCustomer} />
      {selectedCustomer && (
        <div className="mt-6 mb-6">
          <CustomerDetails 
            customer={selectedCustomer} 
            showActions={false}
            onCustomerUpdate={onCustomerUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default CustomerSelection;