import mongoose, { Document } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  installAddress: { type: String, required: true }, // Changed from 'address' to 'installAddress'
  mobilityAids: [{ type: String }],
});

const RampDetailsSchema = new mongoose.Schema({
  knowRampLength: { type: Boolean, required: true },
  estimatedRampLength: { type: Number },
  knowRentalDuration: { type: Boolean, required: true },
  estimatedRentalDuration: { type: Number },
  installationTimeframe: { type: String, required: true },
  mobilityAids: [{ type: String }],
  installationAddress: { type: String, required: true },
});

const RentalRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  knowRampLength: String,
  estimatedRampLength: String,
  knowRentalDuration: String,
  estimatedRentalDuration: String,
  installationTimeframe: String,
  mobilityAids: [String],
  installAddress: String,
  createdAt: { type: Date, default: Date.now },
}, { strict: false });

const QuoteSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  installPrice: { type: Number, required: true },
  deliveryPrice: { type: Number, required: true },
  monthlyRate: { type: Number, required: true },
  components: [{ 
    id: String,
    name: String,
    quantity: Number,
    price: Number
  }],
  status: { type: String, default: 'DRAFT' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sentAt: { type: Date },
  signedAt: { type: Date },
  paymentStatus: { type: String, default: 'PENDING' },
});

const SettingsSchema = new mongoose.Schema({
  warehouseAddress: { type: String, required: true },
  monthlyRatePerFt: { type: Number, required: true },
  installRatePerComponent: { type: Number, required: true },
  deliveryRatePerMile: { type: Number, required: true },
});

export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

export interface IRampDetails extends Document {
  knowRampLength: boolean;
  estimatedRampLength?: number;
  knowRentalDuration: boolean;
  estimatedRentalDuration?: number;
  installationTimeframe: string;
  mobilityAids: string[];
  installationAddress: string;
}

export interface IRentalRequest extends Document {
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
  createdAt: Date;
}

export interface IQuote extends Document {
  customer: mongoose.Types.ObjectId | ICustomer;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date;
  signedAt?: Date;
  paymentStatus: string;
}

export interface ISettings extends Document {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);
export const RampDetails = mongoose.models.RampDetails || mongoose.model<IRampDetails>('RampDetails', RampDetailsSchema);
export const RentalRequest = mongoose.models.RentalRequest || mongoose.model<IRentalRequest>('RentalRequest', RentalRequestSchema);
export const Quote = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);
export const Settings = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);

// Remove this line:
// export { Customer } from './Customer';