import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { ApiResponse } from '@/types';

type ApiHandler<T> = (
  req: NextRequest,
  context: { params: { [key: string]: string } }
) => Promise<ApiResponse<T>>;

export function createApiHandler<T>(handler: ApiHandler<T>) {
  return async function(req: NextRequest, context: { params: { [key: string]: string } }) {
    await dbConnect();

    try {
      const response = await handler(req, context);
      return NextResponse.json(response);
    } catch (error) {
      console.error('API error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
  };
}