import React from 'react';

interface Customer {
  _id: string;  // Change this from 'id' to '_id'
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{customer.firstName} {customer.lastName}</h2>
      <p className="mb-1">Email: {customer.email}</p>
      <p className="mb-1">Phone: {customer.phoneNumber}</p>
      <p className="mb-1">Address: {customer.address}</p>
      <p className="mb-1">Mobility Aids: {customer.mobilityAids.length > 0 ? customer.mobilityAids.join(', ') : 'None'}</p>
    </div>
  );
};

export default CustomerCard;