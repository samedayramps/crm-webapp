// src/types/index.ts

export interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    installAddress?: string; // Optional property
    mobilityAids: string[];
  }
  
  export interface RentalRequest {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    knowRampLength: string;
    estimatedRampLength: string;
    knowRentalDuration: string;
    estimatedRentalDuration: string;
    installationTimeframe: string;
    mobilityAids: string[];
    installAddress: string;
    createdAt: string;
  }
  
  export interface RampComponent {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }
  
  export interface Quote {
    _id: string;
    customer: string | Customer;
    installPrice: number;
    deliveryPrice: number;
    monthlyRate: number;
    components: RampComponent[];
    status: string;
    createdAt: string;
    updatedAt: string;
    sentAt: string | null;
    signedAt: string | null;
    paymentStatus: string;
  }
  
  export interface ApiResponse<T> {
    data?: T;
    error?: string;
  }