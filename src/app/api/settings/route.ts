import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Settings } from '@/models';

export async function GET() {
  await dbConnect();

  try {
    const settings = await Settings.findOne();
    return NextResponse.json({ data: settings });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    const settings = await Settings.findOneAndUpdate({}, data, { new: true, upsert: true });
    return NextResponse.json({ data: settings });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}