// src/app/store/settingsSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Settings, SettingsUpdateRequest } from '@/types';
import { api } from '@/utils/api';

interface SettingsState {
  settings: Settings | null;
  loading: boolean;
  error: string | null;
}

const initialState: SettingsState = {
  settings: null,
  loading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk<Settings, void, { rejectValue: string }>(
  'settings/fetchSettings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get<Settings>('/settings');
      if (!response.data) {
        throw new Error('Failed to fetch settings');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to fetch settings');
    }
  }
);

export const updateSettings = createAsyncThunk<Settings, SettingsUpdateRequest, { rejectValue: string }>(
  'settings/updateSettings',
  async (settingsData, { rejectWithValue }) => {
    try {
      const response = await api.post<Settings>('/settings', settingsData);
      if (!response.data) {
        throw new Error('Failed to update settings');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Failed to update settings');
    }
  }
);

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
        state.loading = false;
      })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'An error occurred';
      })
      .addCase(updateSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
      });
  },
});

export default settingsSlice.reducer;