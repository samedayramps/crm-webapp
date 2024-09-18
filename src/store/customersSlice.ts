// src/app/store/customersSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Customer, CustomerCreateRequest } from '@/types';
import { api } from '@/utils/api';

interface CustomersState {
  customers: Customer[];
  loading: boolean;
  error: string | null;
}

const initialState: CustomersState = {
  customers: [],
  loading: false,
  error: null,
};

export const fetchCustomers = createAsyncThunk<Customer[], void, { rejectValue: string }>(
  'customers/fetchCustomers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<Customer[]>('/customers');
      return response.data ?? [];
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to fetch customers');
    }
  }
);

export const createCustomer = createAsyncThunk<Customer, CustomerCreateRequest, { rejectValue: string }>(
  'customers/createCustomer',
  async (customerData, { rejectWithValue }) => {
    try {
      const response = await api.post<Customer>('/customers', customerData);
      if (!response.data) {
        throw new Error('Failed to create customer');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to create customer');
    }
  }
);

export const updateCustomer = createAsyncThunk<Customer, { id: string; data: Partial<Customer> }, { rejectValue: string }>(
  'customers/updateCustomer',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.put<Customer>(`/customers/${id}`, data);
      if (!response.data) {
        throw new Error('Failed to update customer');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to update customer');
    }
  }
);

export const deleteCustomer = createAsyncThunk<string, string, { rejectValue: string }>(
  'customers/deleteCustomer',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/customers/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to delete customer');
    }
  }
);

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch customers';
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex(customer => customer._id === action.payload._id);
        if (index !== -1) {
          state.customers[index] = action.payload;
        }
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.customers = state.customers.filter(customer => customer._id !== action.payload);
      });
  },
});

export default customersSlice.reducer;