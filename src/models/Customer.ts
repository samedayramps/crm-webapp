import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  // Add any other fields you need
}, { timestamps: true });

export const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);