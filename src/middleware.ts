import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return null;
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }

    // Optional: Check for specific user role
    // if (token?.role !== "admin") {
    //   return new NextResponse("You are not authorized to access this page.", { status: 403 });
    // }

    console.log(`User authenticated. Accessing: ${req.nextUrl.pathname}`);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // This is called before the middleware function
        // Return true to allow the request, false to deny
        return !!token;
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    "/customers/:path*",
    "/rental-requests/:path*",
    "/quotes/:path*",
    "/settings",
    // Add other protected routes here
  ],
};