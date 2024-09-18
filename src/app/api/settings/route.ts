import { createApiHandler } from '@/lib/apiHandler';
import { SettingsService } from '@/services/settingsService';
import { Settings, ApiResponse } from '@/types';
import { NextRequest } from 'next/server';

export const GET = createApiHandler<Settings>(async (): Promise<ApiResponse<Settings>> => {
  const settings = await SettingsService.getSettings();
  console.log('API - Fetched settings:', settings);
  return settings ? { data: settings } : { error: 'Settings not found' };
});

export const POST = createApiHandler<Settings>(async (request: NextRequest): Promise<ApiResponse<Settings>> => {
  const data = await request.json();
  const settings = await SettingsService.updateSettings(data);
  return { data: settings };
});