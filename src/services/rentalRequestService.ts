import { RentalRequest } from '@/models';

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
  static async createRentalRequest(data: RentalRequestData) {
    try {
      const newRentalRequest = await RentalRequest.create(data);
      return newRentalRequest.toObject();
    } catch (error) {
      console.error('Error creating rental request:', error);
      throw error;
    }
  }

  static async getAllRentalRequests() {
    try {
      const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
      return rentalRequests.map(request => request.toObject());
    } catch (error) {
      console.error('Error fetching rental requests:', error);
      throw error;
    }
  }
}