import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from '@/lib/mongodb';
import { User } from '@/models';  // Make sure this import is correct

if (!process.env.NEXTAUTH_SECRET) {
  console.error("Warning: NEXTAUTH_SECRET is not set");
}

const isProduction = process.env.NODE_ENV === 'production';

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? 'is set' : 'is not set');
console.log('Is Production:', isProduction);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          console.error("Missing username or password");
          return null;
        }

        try {
          await dbConnect();
          console.log('Database connected');

          if (!User) {
            console.error('User model is undefined');
            return null;
          }

          console.log('Searching for user:', credentials.username);
          const user = await User.findOne({ username: credentials.username });

          if (!user) {
            console.log("User not found:", credentials.username);
            return null;
          }

          console.log('User found:', user);

          // Simple password comparison (replace this with a secure method in production)
          if (credentials.password !== user.password) {
            console.log("Invalid password for user:", credentials.username);
            return null;
          }

          console.log("User authenticated successfully:", credentials.username);
          return { id: user._id.toString(), name: user.username, email: user.email };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || (isProduction ? undefined : 'DEVELOPMENT_SECRET'),
  debug: !isProduction,
};

if (isProduction) {
  console.log("Running in production mode");
  if (!process.env.NEXTAUTH_SECRET) {
    console.error("Error: NEXTAUTH_SECRET must be set in production");
  }
} else {
  console.log("Running in development mode");
}