import { clientPromise } from '@/lib/mongodb';
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

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
          throw new Error("Missing username or password");
        }

        try {
          const client = await clientPromise;
          const db = client.db();
          const user = await db.collection('users').findOne({ username: credentials.username });

          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

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