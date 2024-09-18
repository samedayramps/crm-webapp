import { RentalRequest as RentalRequestModel } from '@/models';
import { RentalRequest, RentalRequestCreateRequest } from '@/types';

// Define an interface for the rental request data
interface RentalRequestData {
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

export class RentalRequestService {
  static async createRentalRequest(data: RentalRequestCreateRequest): Promise<RentalRequest> {
    try {
      const newRentalRequest = await RentalRequestModel.create(data);
      return newRentalRequest.toObject();
    } catch (error) {
      console.error('Error creating rental request:', error);
      throw error;
    }
  }

  static async getAllRentalRequests(): Promise<RentalRequest[]> {
    try {
      const rentalRequests = await RentalRequestModel.find().sort({ createdAt: -1 });
      return rentalRequests.map(request => request.toObject());
    } catch (error) {
      console.error('Error fetching rental requests:', error);
      throw error;
    }
  }

  static async getRentalRequestById(id: string): Promise<RentalRequest | null> {
    try {
      const rentalRequest = await RentalRequestModel.findById(id);
      return rentalRequest ? rentalRequest.toObject() : null;
    } catch (error) {
      console.error('Error fetching rental request:', error);
      throw error;
    }
  }

  static async updateRentalRequest(id: string, data: Partial<RentalRequestData>): Promise<RentalRequest | null> {
    try {
      const updatedRentalRequest = await RentalRequestModel.findByIdAndUpdate(id, data, { new: true });
      return updatedRentalRequest ? updatedRentalRequest.toObject() : null;
    } catch (error) {
      console.error('Error updating rental request:', error);
      throw error;
    }
  }

  static async deleteRentalRequest(id: string): Promise<boolean> {
    try {
      const result = await RentalRequestModel.findByIdAndDelete(id);
      return !!result;
    } catch (error) {
      console.error('Error deleting rental request:', error);
      throw error;
    }
  }
}