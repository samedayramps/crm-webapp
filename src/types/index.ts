// src/types/index.ts

import { Document } from 'mongoose';

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress?: string;
  mobilityAids: string[]; // Changed from optional to required, with an empty array as default
}

export interface CustomerCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress?: string;
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

export interface RentalRequestCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength?: string;
  knowRentalDuration: string;
  estimatedRentalDuration?: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
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

export interface QuoteCreateRequest {
  customer: string;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: RampComponent[];
  status: string;
}

export interface Settings {
  _id: string;
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
  baseInstallFee: number;  // Add this line
  baseDeliveryFee: number;  // Add this line
}

export interface SettingsUpdateRequest {
  warehouseAddress?: string;
  monthlyRatePerFt?: number;
  installRatePerComponent?: number;
  deliveryRatePerMile?: number;
  baseInstallFee?: number;  // Add this line
  baseDeliveryFee?: number;  // Add this line
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

export interface DistanceResponse {
  distance: number;
}

// Mongoose document interfaces
export interface ICustomer extends Document, Omit<Customer, '_id'> {}
export interface IRentalRequest extends Document, Omit<RentalRequest, '_id'> {}
export interface IQuote extends Document, Omit<Quote, '_id' | 'customer'> {
  customer: string | ICustomer;
}
export interface ISettings extends Document, Omit<Settings, '_id'> {}

// Utility types
export type WithId<T> = T & { _id: string };
export type WithoutId<T> = Omit<T, '_id'>;