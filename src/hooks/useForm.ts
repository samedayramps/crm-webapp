'use client';

import { useState, ChangeEvent } from 'react';

interface FormErrors {
  [key: string]: string;
}

type ChangeEventOrCustomChange = ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] };

export function useForm<T>(initialState: T, validate: (values: T) => FormErrors) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEventOrCustomChange) => {
    const { name, value } = 'target' in e ? e.target : e;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (onSubmit: (values: T) => Promise<void>) => {
    setIsSubmitting(true);
    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    setIsSubmitting(false);
  };

  return { values, errors, isSubmitting, handleChange, handleSubmit, setValues };
}