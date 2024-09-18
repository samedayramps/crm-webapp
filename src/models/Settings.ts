import mongoose, { Document } from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  warehouseAddress: { type: String, required: true },
  monthlyRatePerFt: { type: Number, required: true },
  installRatePerComponent: { type: Number, required: true },
  deliveryRatePerMile: { type: Number, required: true },
  baseInstallFee: { type: Number, required: true },
  baseDeliveryFee: { type: Number, required: true },
});

export interface ISettings extends Document {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
  baseInstallFee: number;
  baseDeliveryFee: number;
}

export const Settings = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);