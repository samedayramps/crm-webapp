import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    "/customers/:path*",
    "/rental-requests/:path*",
    "/quotes/:path*",
    // Add other protected routes here
  ],
};