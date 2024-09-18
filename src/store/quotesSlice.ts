import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Quote, QuoteCreateRequest } from '@/types';
import { apiClient } from '@/utils/api';

interface QuotesState {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
}

const initialState: QuotesState = {
  quotes: [],
  loading: false,
  error: null,
};

export const fetchQuotes = createAsyncThunk<Quote[], void, { rejectValue: string }>(
  'quotes/fetchQuotes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<Quote[]>('/quotes');
      if (response.data) {
        return response.data;
      } else {
        throw new Error(response.error || 'Failed to fetch quotes');
      }
    } catch (error) {
      return rejectWithValue('Failed to fetch quotes');
    }
  }
);

export const createQuote = createAsyncThunk<Quote, QuoteCreateRequest, { rejectValue: string }>(
  'quotes/createQuote',
  async (quoteData, { rejectWithValue }) => {
    try {
      const response = await apiClient.post<Quote>('/quotes', quoteData);
      if (response.data) {
        return response.data;
      } else {
        throw new Error(response.error || 'Failed to create quote');
      }
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to create quote');
    }
  }
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.quotes = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch quotes';
      })
      .addCase(createQuote.fulfilled, (state, action) => {
        state.quotes.push(action.payload);
      });
  },
});

export default quotesSlice.reducer;