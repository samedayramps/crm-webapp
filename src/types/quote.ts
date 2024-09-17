export interface Quote {
  _id: string;
  customer: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  rentalRequest: string;
  totalPrice: number;
  components: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    _id: string;
  }>;
  status: string;
  createdAt: string;
  sentAt: string | null;
  signedAt: string | null;
  paymentStatus: string;
  updatedAt: string;
  __v: number;
}