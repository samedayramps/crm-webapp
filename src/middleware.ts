import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log(`Accessing: ${req.nextUrl.pathname}`);
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/customers/:path*",
    "/rental-requests/:path*",
    "/quotes/:path*",
    "/settings",
    // Add other protected routes here
  ],
};