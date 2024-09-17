import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    return NextResponse.json({ error: 'Origin and destination are required' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error('GOOGLE_MAPS_API_KEY is not set');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const response = await client.distancematrix({
      params: {
        origins: [origin],
        destinations: [destination],
        key: apiKey,
      },
    });

    if (response.data.rows[0].elements[0].status === 'OK') {
      const distance = response.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
      return NextResponse.json({ distance });
    } else {
      console.error('Google Maps API error:', response.data);
      return NextResponse.json({ error: 'Unable to calculate distance' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error calculating distance:', error);
    return NextResponse.json({ error: 'Failed to calculate distance' }, { status: 500 });
  }
}