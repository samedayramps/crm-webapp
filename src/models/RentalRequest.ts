import mongoose, { Document } from 'mongoose';

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

export const RentalRequest = mongoose.models.RentalRequest || mongoose.model<IRentalRequest>('RentalRequest', RentalRequestSchema);