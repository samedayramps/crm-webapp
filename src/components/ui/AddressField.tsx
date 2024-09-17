'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Input } from './Input';

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  placeholder?: string;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: AutocompleteOptions) => google.maps.places.Autocomplete;
        };
      };
    };
  }
}

interface AutocompleteOptions {
  types: string[];
  componentRestrictions: { country: string };
  fields: string[];
}

interface Place {
  formatted_address?: string;
}

export const AddressField: React.FC<AddressFieldProps> = ({
  value,
  onChange,
  error,
  label = 'Address',
  placeholder = 'Enter your address'
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.google && !isLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else if (window.google && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address']
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace() as Place;
        if (place.formatted_address) {
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange]);

  return (
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <Input
        ref={inputRef}
        id="address"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        error={error}
        className="mt-1"
      />
    </div>
  );
};