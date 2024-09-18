import { useState, useEffect } from 'react';
import { api } from '@/utils/api';

export const useDistanceCalculation = (origin: string, destination: string) => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const calculateDistance = async () => {
      if (!origin || !destination) {
        setDistance(null);
        setError('Origin and destination are required');
        return;
      }

      try {
        const response = await api.get<{ distance: number }>(`/distance?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`);
        if (response.data && typeof response.data.distance === 'number') {
          setDistance(response.data.distance);
          setError(null); // Clear any previous errors
        } else {
          throw new Error('Invalid distance data received');
        }
      } catch (err) {
        console.error('Error calculating distance:', err);
        setError('Failed to calculate distance');
        setDistance(null);
      }
    };

    calculateDistance();
  }, [origin, destination]);

  return { distance, error };
};