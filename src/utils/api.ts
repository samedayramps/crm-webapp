// src/utils/api.ts

import { ApiResponse } from '../types';

async function fetchAPI<T>(
  endpoint: string,
  method: string = 'GET',
  body?: object
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
}

export const api = {
  get: <T>(endpoint: string) => fetchAPI<T>(`/api${endpoint}`),
  post: <T>(endpoint: string, body: object) => fetchAPI<T>(`/api${endpoint}`, 'POST', body),
  put: <T>(endpoint: string, body: object) => fetchAPI<T>(`/api${endpoint}`, 'PUT', body),
  delete: <T>(endpoint: string) => fetchAPI<T>(`/api${endpoint}`, 'DELETE'),
};