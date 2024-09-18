import React from 'react';
import { Customer } from '@/types';

interface CustomerDetailsProps {
  customer: Customer;
  showActions: boolean;
  onCustomerUpdate?: (updatedCustomer: Customer) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, showActions }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">{customer.firstName} {customer.lastName}</h2>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phoneNumber}</p>
      <p><strong>Installation Address:</strong> {customer.installAddress}</p>
      <p><strong>Mobility Aids:</strong> {customer.mobilityAids?.join(', ') || 'None'}</p>
      {showActions && (
        <div className="mt-4">
          {/* Add action buttons here if needed */}
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;