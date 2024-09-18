// src/app/store/quotesSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Quote, QuoteCreateRequest } from '@/types';
import { api } from '@/utils/api';

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
      const response = await api.get<Quote[]>('/quotes');
      return response.data ?? [];
    } catch (error) {
      return rejectWithValue('Failed to fetch quotes');
    }
  }
);

export const createQuote = createAsyncThunk<Quote, QuoteCreateRequest, { rejectValue: string }>(
  'quotes/createQuote',
  async (quoteData, { rejectWithValue }) => {
    try {
      const response = await api.post<Quote>('/quotes', quoteData);
      if (!response.data) {
        throw new Error('Failed to create quote');
      }
      return response.data;
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