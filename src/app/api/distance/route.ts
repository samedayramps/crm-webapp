import { createApiHandler } from '@/lib/apiHandler';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

export const GET = createApiHandler<{ distance: number }>(async (request) => {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY is not set');
  }

  const response = await client.distancematrix({
    params: {
      origins: [origin],
      destinations: [destination],
      key: apiKey,
    },
  });

  if (response.data.rows[0].elements[0].status !== 'OK') {
    throw new Error('Unable to calculate distance');
  }

  const distance = response.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
  return { data: { distance } };
});