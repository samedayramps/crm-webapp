import { Settings as SettingsModel } from '@/models';
import { Settings, SettingsUpdateRequest } from '@/types';

export class SettingsService {
  static async getSettings(): Promise<Settings | null> {
    try {
      const settings = await SettingsModel.findOne();
      return settings ? settings.toObject() : null;
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw error;
    }
  }

  static async updateSettings(data: SettingsUpdateRequest): Promise<Settings> {
    try {
      const settings = await SettingsModel.findOneAndUpdate({}, data, { new: true, upsert: true });
      return settings.toObject();
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  }
}