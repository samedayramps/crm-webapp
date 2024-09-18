import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export const apiClient = {
  get: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await api.get<T>(url);
      return { data: response.data };
    } catch (error) {
      console.error('API error:', error);
      return { error: 'An error occurred while fetching data' };
    }
  },
  post: async <T>(url: string, data: unknown): Promise<ApiResponse<T>> => {
    try {
      const response = await api.post<T>(url, data);
      return { data: response.data };
    } catch (error) {
      console.error('API error:', error);
      return { error: 'An error occurred while posting data' };
    }
  },
  put: async <T>(url: string, data: unknown): Promise<ApiResponse<T>> => {
    try {
      const response = await api.put<T>(url, data);
      return { data: response.data };
    } catch (error) {
      console.error('API error:', error);
      return { error: 'An error occurred while updating data' };
    }
  },
  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await api.delete<T>(url);
      return { data: response.data };
    } catch (error) {
      console.error('API error:', error);
      return { error: 'An error occurred while deleting data' };
    }
  },
};