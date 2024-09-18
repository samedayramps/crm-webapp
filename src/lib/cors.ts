import { NextRequest, NextResponse } from 'next/server';
import { allowedOrigins } from '@/config/cors';

type HandlerFunction = (req: NextRequest) => Promise<NextResponse>;

export function corsMiddleware(request: NextRequest, handler: HandlerFunction) {
  const origin = request.headers.get('origin') || '';

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return handlePreflight(origin);
  }

  // Handle actual requests
  return handleActualRequest(origin, request, handler);
}

function handlePreflight(origin: string) {
  if (allowedOrigins.includes(origin)) {
    const response = new NextResponse(null, { status: 204 });
    setHeaders(response, origin);
    return response;
  }
  return new NextResponse(null, { status: 204 });
}

async function handleActualRequest(origin: string, request: NextRequest, handler: HandlerFunction) {
  const response = await handler(request);

  if (allowedOrigins.includes(origin)) {
    setHeaders(response, origin);
  }

  return response;
}

function setHeaders(response: NextResponse, origin: string) {
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}