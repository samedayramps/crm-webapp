import { createApiHandler } from '@/lib/apiHandler';
import { Settings } from '@/models';
import { Settings as SettingsType, SettingsUpdateRequest } from '@/types';
import { NextRequest } from 'next/server';

export const GET = createApiHandler<SettingsType>(async () => {
  const settings = await Settings.findOne();
  return { data: settings ? settings.toObject() : null };
});

export const POST = createApiHandler<SettingsType>(async (request: NextRequest) => {
  const data: SettingsUpdateRequest = await request.json();
  const settings = await Settings.findOneAndUpdate({}, data, { new: true, upsert: true });
  return { data: settings.toObject() };
});