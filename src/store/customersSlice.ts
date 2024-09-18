import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Customer } from '@/types';
import { apiClient } from '@/utils/api';

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
      const response = await apiClient.get<Customer[]>('/customers');
      console.log('API response:', response);
      if (response.data) {
        return Array.isArray(response.data) ? response.data : [];
      } else {
        throw new Error(response.error || 'Failed to fetch customers');
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
      return rejectWithValue((error as Error).message || 'Failed to fetch customers');
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
        state.error = null;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch customers';
      });
  },
});

export default customersSlice.reducer;