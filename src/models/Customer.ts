import mongoose, { Document } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  installAddress: { type: String, required: true },
  mobilityAids: [{ type: String }],
}, { timestamps: true });

export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress: string;
  mobilityAids: string[];
}

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);