import { useState, useEffect } from 'react';

export const useDistanceCalculation = (origin: string, destination: string) => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    const calculateDistance = async () => {
      try {
        const response = await fetch(`/api/distance?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to calculate distance');
        }
        
        setDistance(data.distance);
        setError(null);
      } catch (err) {
        console.error('Error calculating distance:', err);
        setError('Error calculating distance. Please try again.');
        setDistance(null);
      }
    };

    calculateDistance();
  }, [origin, destination]);

  return { distance, error };
};