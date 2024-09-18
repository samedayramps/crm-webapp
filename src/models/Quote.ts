import mongoose, { Document } from 'mongoose';
import { ICustomer } from './Customer';

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

export const Quote = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);