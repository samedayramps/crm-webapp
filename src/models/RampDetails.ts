import mongoose, { Document } from 'mongoose';

const RampDetailsSchema = new mongoose.Schema({
  knowRampLength: { type: Boolean, required: true },
  estimatedRampLength: { type: Number },
  knowRentalDuration: { type: Boolean, required: true },
  estimatedRentalDuration: { type: Number },
  installationTimeframe: { type: String, required: true },
  mobilityAids: [{ type: String }],
  installationAddress: { type: String, required: true },
});

export interface IRampDetails extends Document {
  knowRampLength: boolean;
  estimatedRampLength?: number;
  knowRentalDuration: boolean;
  estimatedRentalDuration?: number;
  installationTimeframe: string;
  mobilityAids: string[];
  installationAddress: string;
}

export const RampDetails = mongoose.models.RampDetails || mongoose.model<IRampDetails>('RampDetails', RampDetailsSchema);