import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await dbConnect();
      const rentalRequest = await RentalRequest.create(req.body);
      res.status(201).json({ success: true, data: rentalRequest });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(400).json({ success: false, error: errorMessage });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}