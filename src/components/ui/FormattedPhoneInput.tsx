'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/Input';

interface FormattedPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export const FormattedPhoneInput: React.FC<FormattedPhoneInputProps> = ({
  value,
  onChange,
  error,
  className
}) => {
  const [formattedValue, setFormattedValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const format = (val: string) => {
    const digits = val.replace(/\D/g, '');
    const chars = digits.split('');
    let formatted = '(___) ___-____';
    chars.forEach((char) => {
      formatted = formatted.replace('_', char);
    });
    return formatted;
  };

  useEffect(() => {
    setFormattedValue(format(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const selectionStart = input.selectionStart || 0; // Provide a default value
    const formatted = format(input.value);
    const digits = formatted.replace(/\D/g, '');
    
    onChange(digits);

    // Set cursor position after React updates the input
    setTimeout(() => {
      if (inputRef.current) {
        const newCursorPosition = selectionStart + (formatted.length - input.value.length);
        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    }, 0);
  };

  return (
    <Input
      ref={inputRef}
      type="tel"
      value={formattedValue}
      onChange={handleChange}
      placeholder="(___) ___-____"
      error={error}
      className={className}
    />
  );
};