import { Quote as QuoteModel } from '@/models';
import { Document } from 'mongoose';
import { Quote, QuoteCreateRequest } from '@/types';

export class QuoteService {
  static async createQuote(data: QuoteCreateRequest): Promise<Quote> {
    try {
      const quote = await QuoteModel.create(data);
      const populatedQuote = await QuoteModel.findById(quote._id).populate('customer');
      if (!populatedQuote) {
        throw new Error('Failed to create quote');
      }
      return populatedQuote.toObject();
    } catch (error) {
      console.error('Error creating quote:', error);
      throw error;
    }
  }

  static async getAllQuotes(): Promise<Quote[]> {
    try {
      const quotes = await QuoteModel.find().populate('customer').sort({ createdAt: -1 });
      return quotes.map((quote: Document) => quote.toObject());
    } catch (error) {
      console.error('Error fetching quotes:', error);
      throw error;
    }
  }

  static async getQuoteById(id: string): Promise<Quote | null> {
    try {
      const quote = await QuoteModel.findById(id).populate('customer');
      return quote ? quote.toObject() : null;
    } catch (error) {
      console.error('Error fetching quote:', error);
      throw error;
    }
  }

  static async updateQuote(id: string, data: Partial<QuoteCreateRequest>): Promise<Quote | null> {
    try {
      const quote = await QuoteModel.findByIdAndUpdate(id, data, { new: true }).populate('customer');
      return quote ? quote.toObject() : null;
    } catch (error) {
      console.error('Error updating quote:', error);
      throw error;
    }
  }

  static async deleteQuote(id: string): Promise<boolean> {
    try {
      const result = await QuoteModel.findByIdAndDelete(id);
      return !!result;
    } catch (error) {
      console.error('Error deleting quote:', error);
      throw error;
    }
  }

  static async sendQuote(quoteId: string): Promise<{ message: string }> {
    try {
      const quote = await QuoteModel.findById(quoteId).populate('customer');
      if (!quote) {
        throw new Error('Quote not found');
      }

      // TODO: Implement email sending logic
      // TODO: Implement Stripe payment link generation
      // TODO: Implement esignatures.io agreement link generation

      quote.status = 'SENT';
      quote.sentAt = new Date();
      await quote.save();

      return { message: 'Quote sent successfully' };
    } catch (error) {
      console.error('Error sending quote:', error);
      throw error;
    }
  }
}