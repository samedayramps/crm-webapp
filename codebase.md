# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

```

# tailwind.config.js

```js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# package.json

```json
{
  "name": "rental-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@googlemaps/google-maps-services-js": "^3.4.0",
    "@next-auth/mongodb-adapter": "^1.1.3",
    "@prisma/client": "^5.19.1",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@stripe/stripe-js": "^4.5.0",
    "@tailwindcss/forms": "^0.5.9",
    "@upstash/ratelimit": "^2.0.3",
    "@upstash/redis": "^1.34.0",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.7",
    "bcryptjs": "^2.4.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "jsonwebtoken": "^9.0.2",
    "lucide-react": "^0.441.0",
    "mongodb": "^5.9.2",
    "mongoose": "^8.6.2",
    "next": "14.2.11",
    "next-auth": "^4.24.7",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.53.0",
    "tailwind-merge": "^2.5.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/google.maps": "^3.58.0",
    "@types/jsonwebtoken": "^9.0.7",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.11",
    "postcss": "^8.4.47",
    "prisma": "^5.19.1",
    "tailwindcss": "^3.4.11",
    "typescript": "^5"
  }
}

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://form.samedayramps.com' },
          { key: 'Access-Control-Allow-Origin', value: 'https://samedayramps.com' },
          { key: 'Access-Control-Allow-Methods', value: 'POST, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, X-Requested-With' },
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

# codebase-rental-app.md

```md
# tsconfig.json

\`\`\`json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

\`\`\`

# tailwind.config.ts

\`\`\`ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

\`\`\`

# tailwind.config.js

\`\`\`js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
\`\`\`

# postcss.config.mjs

\`\`\`mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

\`\`\`

# postcss.config.js

\`\`\`js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

\`\`\`

# package.json

\`\`\`json
{
  "name": "rental-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@googlemaps/google-maps-services-js": "^3.4.0",
    "@next-auth/mongodb-adapter": "^1.1.3",
    "@prisma/client": "^5.19.1",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@stripe/stripe-js": "^4.5.0",
    "@tailwindcss/forms": "^0.5.9",
    "@upstash/ratelimit": "^2.0.3",
    "@upstash/redis": "^1.34.0",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.7",
    "bcryptjs": "^2.4.3",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "jsonwebtoken": "^9.0.2",
    "lucide-react": "^0.441.0",
    "mongodb": "^5.9.2",
    "mongoose": "^8.6.2",
    "next": "14.2.11",
    "next-auth": "^4.24.7",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.53.0",
    "tailwind-merge": "^2.5.2",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/google.maps": "^3.58.0",
    "@types/jsonwebtoken": "^9.0.7",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.11",
    "postcss": "^8.4.47",
    "prisma": "^5.19.1",
    "tailwindcss": "^3.4.11",
    "typescript": "^5"
  }
}

\`\`\`

# next.config.mjs

\`\`\`mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

\`\`\`

# next.config.js

\`\`\`js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
\`\`\`

# next-env.d.ts

\`\`\`ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

\`\`\`

# README.md

\`\`\`md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

\`\`\`

# .gitignore

\`\`\`
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

\`\`\`

# .eslintrc.json

\`\`\`json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

\`\`\`

# src/middleware.ts

\`\`\`ts
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
\`\`\`

# src/utils/api.ts

\`\`\`ts
// src/utils/api.ts

import { ApiResponse } from '../types';

async function fetchAPI<T>(
  endpoint: string,
  method: string = 'GET',
  body?: object
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
}

export const api = {
  get: <T>(endpoint: string) => fetchAPI<T>(`/api${endpoint}`),
  post: <T>(endpoint: string, body: object) => fetchAPI<T>(`/api${endpoint}`, 'POST', body),
  put: <T>(endpoint: string, body: object) => fetchAPI<T>(`/api${endpoint}`, 'PUT', body),
  delete: <T>(endpoint: string) => fetchAPI<T>(`/api${endpoint}`, 'DELETE'),
};
\`\`\`

# src/types/next-auth.d.ts

\`\`\`ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}
\`\`\`

# src/types/index.ts

\`\`\`ts
// src/types/index.ts

import { Document } from 'mongoose';

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress?: string;
  mobilityAids: string[];
}

export interface CustomerCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress?: string;
  mobilityAids: string[];
}

export interface RentalRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength: string;
  knowRentalDuration: string;
  estimatedRentalDuration: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
  createdAt: string;
}

export interface RentalRequestCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength?: string;
  knowRentalDuration: string;
  estimatedRentalDuration?: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
}

export interface RampComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Quote {
  _id: string;
  customer: string | Customer;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: RampComponent[];
  status: string;
  createdAt: string;
  updatedAt: string;
  sentAt: string | null;
  signedAt: string | null;
  paymentStatus: string;
}

export interface QuoteCreateRequest {
  customer: string;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: RampComponent[];
  status: string;
}

export interface Settings {
  _id: string;
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

export interface SettingsUpdateRequest {
  warehouseAddress?: string;
  monthlyRatePerFt?: number;
  installRatePerComponent?: number;
  deliveryRatePerMile?: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

export interface DistanceResponse {
  distance: number;
}

// Mongoose document interfaces
export interface ICustomer extends Document, Omit<Customer, '_id'> {}
export interface IRentalRequest extends Document, Omit<RentalRequest, '_id'> {}
export interface IQuote extends Document, Omit<Quote, '_id' | 'customer'> {
  customer: string | ICustomer;
}
export interface ISettings extends Document, Omit<Settings, '_id'> {}

// Utility types
export type WithId<T> = T & { _id: string };
export type WithoutId<T> = Omit<T, '_id'>;
\`\`\`

# src/styles/globals.css

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

\`\`\`

# src/models/index.ts

\`\`\`ts
import mongoose, { Document } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  installAddress: { type: String, required: true }, // Changed from 'address' to 'installAddress'
  mobilityAids: [{ type: String }],
});

const RampDetailsSchema = new mongoose.Schema({
  knowRampLength: { type: Boolean, required: true },
  estimatedRampLength: { type: Number },
  knowRentalDuration: { type: Boolean, required: true },
  estimatedRentalDuration: { type: Number },
  installationTimeframe: { type: String, required: true },
  mobilityAids: [{ type: String }],
  installationAddress: { type: String, required: true },
});

const RentalRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  knowRampLength: String,
  estimatedRampLength: String,
  knowRentalDuration: String,
  estimatedRentalDuration: String,
  installationTimeframe: String,
  mobilityAids: [String],
  installAddress: String,
  createdAt: { type: Date, default: Date.now },
}, { strict: false });

const QuoteSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  installPrice: { type: Number, required: true },
  deliveryPrice: { type: Number, required: true },
  monthlyRate: { type: Number, required: true },
  components: [{ 
    id: String,
    name: String,
    quantity: Number,
    price: Number
  }],
  status: { type: String, default: 'DRAFT' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sentAt: { type: Date },
  signedAt: { type: Date },
  paymentStatus: { type: String, default: 'PENDING' },
});

const SettingsSchema = new mongoose.Schema({
  warehouseAddress: { type: String, required: true },
  monthlyRatePerFt: { type: Number, required: true },
  installRatePerComponent: { type: Number, required: true },
  deliveryRatePerMile: { type: Number, required: true },
});

export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

export interface IRampDetails extends Document {
  knowRampLength: boolean;
  estimatedRampLength?: number;
  knowRentalDuration: boolean;
  estimatedRentalDuration?: number;
  installationTimeframe: string;
  mobilityAids: string[];
  installationAddress: string;
}

export interface IRentalRequest extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength?: string;
  knowRentalDuration: string;
  estimatedRentalDuration?: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
  createdAt: Date;
}

export interface IQuote extends Document {
  customer: mongoose.Types.ObjectId | ICustomer;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date;
  signedAt?: Date;
  paymentStatus: string;
}

export interface ISettings extends Document {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);
export const RampDetails = mongoose.models.RampDetails || mongoose.model<IRampDetails>('RampDetails', RampDetailsSchema);
export const RentalRequest = mongoose.models.RentalRequest || mongoose.model<IRentalRequest>('RentalRequest', RentalRequestSchema);
export const Quote = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);
export const Settings = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);

// Remove this line:
// export { Customer } from './Customer';
\`\`\`

# src/lib/utils.ts

\`\`\`ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
\`\`\`

# src/lib/rate-limit.ts

\`\`\`ts
import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export const rateLimit = (limit: number, interval: number) => {
  return {
    check: (req: NextRequest, identifier: string) => {
      const now = Date.now();
      const key = `${identifier}_${req.ip}`;

      if (store[key] && now < store[key].resetTime) {
        store[key].count++;
        return store[key].count <= limit;
      } else {
        store[key] = {
          count: 1,
          resetTime: now + interval,
        };
        return true;
      }
    },
  };
};
\`\`\`

# src/lib/mongodb.ts

\`\`\`ts
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use a module-level variable instead of a global
let _mongoClientPromise: Promise<MongoClient> | undefined;

if (process.env.NODE_ENV === 'development') {
  if (!_mongoClientPromise) {
    client = new MongoClient(uri);
    _mongoClientPromise = client.connect();
  }
  clientPromise = _mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export the clientPromise
export { clientPromise };

// Cached connection for mongoose
let cachedConnection: typeof mongoose | null = null;

export async function dbConnect(): Promise<typeof mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (mongoose.connection.readyState >= 1) {
    cachedConnection = mongoose;
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(uri, options);
    return cachedConnection;
  } catch (e) {
    throw e;
  }
}

// Create a named object for the default export
const mongodbConnection = {
  clientPromise,
  dbConnect,
};

// Export the named object as default
export default mongodbConnection;
\`\`\`

# src/lib/cors.ts

\`\`\`ts
import { NextRequest, NextResponse } from 'next/server';
import { allowedOrigins } from '@/config/cors';

export function setCORSHeaders(req: NextRequest, res: NextResponse): NextResponse {
  const origin = req.headers.get('origin');
  
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set('Access-Control-Allow-Origin', origin);
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return res;
}

export async function corsMiddleware(req: NextRequest) {
  const origin = req.headers.get('origin');

  if (origin && allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  return new NextResponse(null, { status: 204 });
}
\`\`\`

# src/lib/apiHandler.ts

\`\`\`ts
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
\`\`\`

# src/hooks/usePricingVariables.ts

\`\`\`ts
import { useState, useEffect } from 'react';

interface PricingVariables {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

const defaultPricingVariables: PricingVariables = {
  warehouseAddress: '',
  monthlyRatePerFt: 0,
  installRatePerComponent: 0,
  deliveryRatePerMile: 0,
};

export const usePricingVariables = () => {
  const [pricingVariables, setPricingVariables] = useState<PricingVariables>(defaultPricingVariables);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (!response.ok) throw new Error('Failed to fetch settings');
        const { data } = await response.json();
        setPricingVariables(data || defaultPricingVariables);
      } catch (error) {
        console.error('Error fetching settings:', error);
        setError('Failed to load settings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updatePricingVariables = async (newVariables: PricingVariables) => {
    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVariables),
      });
      if (!response.ok) throw new Error('Failed to update settings');
      const { data } = await response.json();
      setPricingVariables(data);
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error; // Re-throw the error to be handled in the component
    }
  };

  return { pricingVariables, updatePricingVariables, isLoading, error };
};
\`\`\`

# src/hooks/useForm.ts

\`\`\`ts
'use client';

import { useState, ChangeEvent } from 'react';

interface FormErrors {
  [key: string]: string;
}

type ChangeEventOrCustomChange = ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] };

export function useForm<T>(initialState: T, validate: (values: T) => FormErrors) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEventOrCustomChange) => {
    const { name, value } = 'target' in e ? e.target : e;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (onSubmit: (values: T) => Promise<void>) => {
    setIsSubmitting(true);
    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    setIsSubmitting(false);
  };

  return { values, errors, isSubmitting, handleChange, handleSubmit, setValues };
}
\`\`\`

# src/hooks/useDistanceCalculation.ts

\`\`\`ts
import { useState, useEffect } from 'react';

export const useDistanceCalculation = (origin: string, destination: string) => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    const calculateDistance = async () => {
      try {
        const response = await fetch(`/api/distance?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to calculate distance');
        }
        
        setDistance(data.distance);
        setError(null);
      } catch (err) {
        console.error('Error calculating distance:', err);
        setError('Error calculating distance. Please try again.');
        setDistance(null);
      }
    };

    calculateDistance();
  }, [origin, destination]);

  return { distance, error };
};
\`\`\`

# src/contexts/QuoteContext.tsx

\`\`\`tsx
'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { api } from '@/utils/api';
import { Quote, ApiResponse } from '@/types';

interface QuoteContextType {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  getQuote: (id: string) => Promise<ApiResponse<Quote>>;
  addQuote: (quote: Omit<Quote, '_id'>) => Promise<ApiResponse<Quote>>;
  updateQuote: (id: string, quote: Partial<Quote>) => Promise<ApiResponse<Quote>>;
  deleteQuote: (id: string) => Promise<ApiResponse<void>>;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuoteContext must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Quote[]>('/quotes');
      if (response.data) {
        setQuotes(Array.isArray(response.data) ? response.data : []);
      } else if (response.error) {
        setError(response.error);
      }
    } catch (err) {
      setError('Failed to fetch quotes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const getQuote = async (id: string): Promise<ApiResponse<Quote>> => {
    return await api.get<Quote>(`/quotes/${id}`);
  };

  const addQuote = async (quote: Omit<Quote, '_id'>): Promise<ApiResponse<Quote>> => {
    const response = await api.post<Quote>('/quotes', quote);
    if (response.data) {
      setQuotes(prevQuotes => [...prevQuotes, response.data!]);
    }
    return response;
  };

  const updateQuote = async (id: string, updatedQuote: Partial<Quote>): Promise<ApiResponse<Quote>> => {
    const response = await api.put<Quote>(`/quotes/${id}`, updatedQuote);
    if (response.data) {
      setQuotes(prevQuotes => prevQuotes.map(q => q._id === id ? response.data! : q));
    }
    return response;
  };

  const deleteQuote = async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete<void>(`/quotes/${id}`);
    if (!response.error) {
      setQuotes(prevQuotes => prevQuotes.filter(q => q._id !== id));
    }
    return response;
  };

  return (
    <QuoteContext.Provider value={{ quotes, loading, error, getQuote, addQuote, updateQuote, deleteQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
\`\`\`

# src/config/cors.ts

\`\`\`ts
export const allowedOrigins = [
    'https://www.samedayramps.com',
    'https://form.samedayramps.com',
    'https://app.samedayramps.com',
    'http://localhost:3000'  // Include this for local development
  ];
\`\`\`

# src/app/page.tsx

\`\`\`tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Wheelchair Ramp Rental</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/rental-requests/new" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">New Rental Request</h5>
          <p className="font-normal text-gray-700">Submit a new request for a wheelchair ramp rental.</p>
        </Link>
        <Link href="/quotes" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">View Quotes</h5>
          <p className="font-normal text-gray-700">Check and manage existing quotes.</p>
        </Link>
        <Link href="/customers" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Customer List</h5>
          <p className="font-normal text-gray-700">View and manage customer information.</p>
        </Link>
      </div>
    </div>
  );
}
\`\`\`

# src/app/layout.tsx

\`\`\`tsx
'use client';

import React from 'react';
import { SessionProvider } from "next-auth/react";
import Header from '@/components/Header';
import { QuoteProvider } from '@/contexts/QuoteContext';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <SessionProvider>
          <QuoteProvider>
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <main className="py-6">
                {children}
              </main>
            </div>
          </QuoteProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
\`\`\`

# src/app/favicon.ico

This is a binary file of the type: Binary

# src/app/_app.tsx

\`\`\`tsx
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import '@/styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
\`\`\`

# src/components/SessionWrapper.tsx

\`\`\`tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionWrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
\`\`\`

# src/components/RampConfiguration.tsx

\`\`\`tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RampComponent } from '@/types';

const componentTypes = [
  'Select a component',
  '4ft ramp section',
  '5ft ramp section',
  '6ft ramp section',
  '7ft ramp section',
  '8ft ramp section',
  '5x4 ft landing',
  '5x5 ft landing',
  '5x8 ft landing',
];

const componentPrices = {
  '4ft ramp section': 100,
  '5ft ramp section': 125,
  '6ft ramp section': 150,
  '7ft ramp section': 175,
  '8ft ramp section': 200,
  '5x4 ft landing': 250,
  '5x5 ft landing': 300,
  '5x8 ft landing': 400,
};

interface RampConfigurationV2Props {
  onConfigurationChange: (components: RampComponent[], totalLength: number) => void;
  initialComponents?: RampComponent[];
  readOnly?: boolean;
}

const RampConfigurationV2: React.FC<RampConfigurationV2Props> = ({ 
  onConfigurationChange, 
  initialComponents = [],
  readOnly = false
}) => {
  const [components, setComponents] = useState<RampComponent[]>(initialComponents);
  const [totalLength, setTotalLength] = useState(0);

  const calculateTotalLength = useCallback(() => {
    let length = 0;
    components.forEach(component => {
      const match = component.name.match(/(\d+)ft/);
      if (match) {
        length += parseInt(match[1]) * component.quantity;
      }
    });
    setTotalLength(length);
    onConfigurationChange(components, length);
  }, [components, onConfigurationChange]);

  useEffect(() => {
    calculateTotalLength();
  }, [calculateTotalLength]);

  const handleComponentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedComponent = e.target.value;
    if (selectedComponent !== 'Select a component') {
      const existingComponent = components.find(comp => comp.name === selectedComponent);
      if (existingComponent) {
        updateQuantity(existingComponent.id, 1);
      } else {
        const newComponent: RampComponent = {
          id: Date.now().toString(),
          name: selectedComponent,
          quantity: 1,
          price: componentPrices[selectedComponent as keyof typeof componentPrices] || 0,
        };
        const updatedComponents = [...components, newComponent];
        setComponents(updatedComponents);
        onConfigurationChange(updatedComponents, totalLength);
      }
      e.target.value = 'Select a component'; // Reset dropdown to default option
    }
  };

  const updateQuantity = (id: string, change: number) => {
    const updatedComponents = components.map(component => 
      component.id === id ? { ...component, quantity: Math.max(0, component.quantity + change) } : component
    ).filter(component => component.quantity > 0);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents, totalLength);
  };

  const removeComponent = (id: string) => {
    const updatedComponents = components.filter(component => component.id !== id);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents, totalLength);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Ramp Configuration</h2>
      
      {!readOnly && (
        <div className="mb-4">
          <select 
            onChange={handleComponentSelect}
            className="w-full p-2 border rounded"
            defaultValue="Select a component"
          >
            {componentTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      )}

      {components.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Selected Components:</h3>
          <ul>
            {components.map((component) => (
              <li key={component.id} className="flex items-center justify-between mb-2">
                <span>{component.name} (x{component.quantity})</span>
                {!readOnly && (
                  <div className="flex items-center">
                    <button 
                      type="button"
                      onClick={() => updateQuantity(component.id, -1)}
                      className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-2">{component.quantity}</span>
                    <button 
                      type="button"
                      onClick={() => updateQuantity(component.id, 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button 
                      type="button"
                      onClick={() => removeComponent(component.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RampConfigurationV2;
\`\`\`

# src/components/QuoteList.tsx

\`\`\`tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Customer } from '@/types';

const QuoteList: React.FC = () => {
  const { quotes, loading, error } = useQuoteContext();

  const getCustomerName = (customer: string | Customer): string => {
    if (typeof customer === 'string') {
      return 'N/A';
    }
    return `${customer.firstName} ${customer.lastName}`;
  };

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {quotes.map((quote) => (
                  <tr key={quote._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getCustomerName(quote.customer)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{quote.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(quote.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/quotes/${quote._id}`} className="text-indigo-600 hover:text-indigo-900">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteList;
\`\`\`

# src/components/QuoteLayout.tsx

\`\`\`tsx
import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';

interface QuoteLayoutProps {
  children: React.ReactNode;
}

const QuoteLayout: React.FC<QuoteLayoutProps> = ({ children }) => {
  return (
    <QuoteProvider>
      {children}
    </QuoteProvider>
  );
};

export default QuoteLayout;
\`\`\`

# src/components/QuoteDetails.tsx

\`\`\`tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Quote } from '@/types';
import { api } from '@/utils/api';
import CustomerDetails from '@/components/CustomerDetails';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';

interface QuoteDetailsProps {
  id: string;
}

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ id }) => {
  const { updateQuote, deleteQuote } = useQuoteContext();
  const [isEditing, setIsEditing] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      const response = await api.get<Quote>(`/quotes/${id}`);
      if (response.data) {
        setQuote(response.data);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (updatedQuote: Quote) => {
    const response = await updateQuote(id, updatedQuote);
    if (response.error) {
      setError(response.error);
    } else {
      setQuote(response.data!);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      const response = await deleteQuote(id);
      if (response.error) {
        setError(response.error);
      } else {
        router.push('/quotes');
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quote) {
    return <div>Quote not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
      
      <div className="mb-6">
        {quote.customer && typeof quote.customer !== 'string' && (
          <CustomerDetails 
            customer={quote.customer} 
            showActions={false}
          />
        )}
      </div>

      <div className="mb-6">
        <RampConfigurationV2 
          onConfigurationChange={() => {}}
          initialComponents={quote.components}
          readOnly={!isEditing}
        />
      </div>

      <div className="mb-6">
        <PricingComponent 
          rampComponents={quote.components}
          totalLength={quote.components.reduce((total, component) => {
            const match = component.name.match(/(\d+)ft/);
            return total + (match ? parseInt(match[1]) * component.quantity : 0);
          }, 0)}
          installAddress={typeof quote.customer !== 'string' ? quote.customer.installAddress || '' : ''}
          onPriceCalculated={() => {}}
          initialInstallPrice={quote.installPrice}
          initialDeliveryPrice={quote.deliveryPrice}
          initialMonthlyRate={quote.monthlyRate}
          readOnly={!isEditing}
        />
      </div>

      <div className="mt-6 flex justify-between">
        {isEditing ? (
          <>
            <button 
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => handleSave(quote)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteDetails;
\`\`\`

# src/components/PricingVariables.tsx

\`\`\`tsx
'use client';

import React, { useState, useEffect } from 'react';
import { AddressField } from '@/components/ui/AddressField';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { usePricingVariables } from '@/hooks/usePricingVariables';

const PricingVariables: React.FC = () => {
  const { pricingVariables, updatePricingVariables, isLoading, error } = usePricingVariables();
  const [formData, setFormData] = useState(pricingVariables);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setFormData(pricingVariables);
  }, [pricingVariables]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (value: string) => {
    setFormData(prev => ({ ...prev, warehouseAddress: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    try {
      await updatePricingVariables(formData);
      // Optionally, you can add a success message here
    } catch (error) {
      setSaveError('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-4">Loading pricing variables...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">Error loading pricing variables: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Pricing Variables</h2>
      
      <div>
        <AddressField
          value={formData.warehouseAddress}
          onChange={handleAddressChange}
          label="Warehouse Address"
          placeholder="Enter warehouse address"
        />
      </div>
      
      <div>
        <label htmlFor="monthlyRatePerFt" className="block text-sm font-medium text-gray-700">
          Monthly Rate per ft ($)
        </label>
        <Input
          type="number"
          id="monthlyRatePerFt"
          name="monthlyRatePerFt"
          value={formData.monthlyRatePerFt}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      <div>
        <label htmlFor="installRatePerComponent" className="block text-sm font-medium text-gray-700">
          Install Rate per Component ($)
        </label>
        <Input
          type="number"
          id="installRatePerComponent"
          name="installRatePerComponent"
          value={formData.installRatePerComponent}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      <div>
        <label htmlFor="deliveryRatePerMile" className="block text-sm font-medium text-gray-700">
          Delivery Rate per Mile ($)
        </label>
        <Input
          type="number"
          id="deliveryRatePerMile"
          name="deliveryRatePerMile"
          value={formData.deliveryRatePerMile}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      {saveError && <div className="text-red-500">{saveError}</div>}
      
      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default PricingVariables;
\`\`\`

# src/components/PricingComponent.tsx

\`\`\`tsx
'use client';

import React, { useEffect, useState } from 'react';
import { usePricingVariables } from '@/hooks/usePricingVariables';
import { useDistanceCalculation } from '@/hooks/useDistanceCalculation';
import { RampComponent } from '@/types';

interface PricingComponentProps {
  rampComponents: RampComponent[];
  totalLength: number;
  installAddress: string;
  onPriceCalculated: (installPrice: number, deliveryPrice: number, monthlyRate: number) => void;
  initialInstallPrice?: number;
  initialDeliveryPrice?: number;
  initialMonthlyRate?: number;
  readOnly?: boolean;
}

const PricingComponent: React.FC<PricingComponentProps> = ({ 
  rampComponents, 
  totalLength, 
  installAddress,
  onPriceCalculated,
  initialInstallPrice,
  initialDeliveryPrice,
  initialMonthlyRate,
  readOnly = false
}) => {
  const { pricingVariables, isLoading: isPricingLoading, error: pricingError } = usePricingVariables();
  const { distance, error: distanceError } = useDistanceCalculation(pricingVariables.warehouseAddress, installAddress);
  const [installPrice, setInstallPrice] = useState(initialInstallPrice || 0);
  const [deliveryPrice, setDeliveryPrice] = useState(initialDeliveryPrice || 0);
  const [monthlyRate, setMonthlyRate] = useState(initialMonthlyRate || 0);

  useEffect(() => {
    if (isPricingLoading || distance === null) return;

    const calculatePrices = () => {
      const install = rampComponents.reduce((total, component) => 
        total + (component.quantity * pricingVariables.installRatePerComponent), 0);
      const delivery = distance * pricingVariables.deliveryRatePerMile;
      const monthly = totalLength * pricingVariables.monthlyRatePerFt;

      setInstallPrice(Number(install.toFixed(2)));
      setDeliveryPrice(Number(delivery.toFixed(2)));
      setMonthlyRate(Number(monthly.toFixed(2)));

      onPriceCalculated(install, delivery, monthly);
    };

    calculatePrices();
  }, [rampComponents, totalLength, distance, pricingVariables, isPricingLoading, onPriceCalculated]);

  if (isPricingLoading) {
    return <div>Loading pricing information...</div>;
  }

  if (pricingError) {
    return <div>Error loading pricing variables: {pricingError}</div>;
  }

  if (distanceError) {
    return (
      <div>
        <p>Error calculating distance: {distanceError}</p>
        <p>Unable to provide accurate pricing at this time.</p>
      </div>
    );
  }

  if (distance === null) {
    return <div>Calculating distance...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Pricing Details</h2>
      <div className="space-y-2">
        <p>Installation Price: ${installPrice.toFixed(2)}</p>
        <p>Delivery Price: ${deliveryPrice.toFixed(2)}</p>
        <p>Monthly Rate: ${monthlyRate.toFixed(2)}</p>
      </div>
      {!readOnly && (
        <button 
          onClick={() => onPriceCalculated(installPrice, deliveryPrice, monthlyRate)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Pricing
        </button>
      )}
    </div>
  );
};

export default PricingComponent;
\`\`\`

# src/components/Layout.tsx

\`\`\`tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
\`\`\`

# src/components/Header.tsx

\`\`\`tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Your App Name
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/quotes">Quotes</NavLink>
            <NavLink href="/customers">Customers</NavLink>
            <NavLink href="/rental-requests">Rental Requests</NavLink>
            <NavLink href="/settings">Settings</NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/quotes">Quotes</MobileNavLink>
            <MobileNavLink href="/customers">Customers</MobileNavLink>
            <MobileNavLink href="/rental-requests">Rental Requests</MobileNavLink>
            <MobileNavLink href="/settings">Settings</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
    {children}
  </Link>
);

export default Header;
\`\`\`

# src/components/Footer.tsx

\`\`\`tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4">
    <p className="text-gray-600 dark:text-gray-400">&copy; 2024 Wheelchair Ramp Rental. All rights reserved.</p>
  </footer>
);

export default Footer;
\`\`\`

# src/components/ErrorBoundary.tsx

\`\`\`tsx
'use client';

import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // We're not using the error parameter in this method
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
\`\`\`

# src/components/EmbeddableRentalRequestForm.tsx

\`\`\`tsx
import React, { useState } from 'react';

const EmbeddableRentalRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    knowRampLength: '',
    estimatedRampLength: '',
    knowRentalDuration: '',
    estimatedRentalDuration: '',
    installationTimeframe: '',
    mobilityAids: [],
    installAddress: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://app.samedayramps.com/api/rental-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Handle error
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <div>Thank you for your submission!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Render form fields here */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      {/* Add more form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
};

export default EmbeddableRentalRequestForm;
\`\`\`

# src/components/CustomerSearch.tsx

\`\`\`tsx
'use client';

import React, { useState } from 'react';
import { Customer } from '@/types';

interface CustomerSearchProps {
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerSearch: React.FC<CustomerSearchProps> = ({ onSelectCustomer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/customers/search?term=${encodeURIComponent(term)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      setError('An error occurred while searching for customers');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a customer"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-3 py-2 border rounded-md"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {searchResults.length > 0 && (
        <ul className="mt-2 border rounded-md max-h-80 overflow-y-auto">
          {searchResults.map(customer => (
            <li 
              key={customer._id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={() => onSelectCustomer(customer)}
            >
              <div className="font-semibold">{customer.firstName} {customer.lastName}</div>
              <div className="text-sm text-gray-600">{customer.email}</div>
              <div className="text-sm text-gray-600">Phone: {customer.phoneNumber}</div>
              {customer.installAddress && (
                <div className="text-sm text-gray-600">Install Address: {customer.installAddress}</div>
              )}
              {customer.mobilityAids && customer.mobilityAids.length > 0 && (
                <div className="text-sm text-gray-600">
                  Mobility Aids: {customer.mobilityAids.join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerSearch;
\`\`\`

# src/components/CustomerList.tsx

\`\`\`tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { api } from '@/utils/api';
import { Customer } from '@/types';

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await api.get<Customer[]>('/customers');
      if (response.data) {
        setCustomers(Array.isArray(response.data) ? response.data : []);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchCustomers();
  }, []);

  if (isLoading) return <div>Loading customers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.firstName} {customer.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/customers/${customer._id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerList;
\`\`\`

# src/components/CustomerDetails.tsx

\`\`\`tsx
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { api } from '@/utils/api';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface CustomerDetailsProps {
  customer: Customer;
  showActions?: boolean;
  onCustomerUpdate?: (updatedCustomer: Customer) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, showActions = false, onCustomerUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer>(customer);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    const response = await api.put<Customer>(`/customers/${customer._id}`, editedCustomer);
    if (response.data) {
      setIsEditing(false);
      if (onCustomerUpdate) {
        onCustomerUpdate(response.data);
      }
    } else if (response.error) {
      setError(response.error);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      const response = await api.delete<void>(`/customers/${customer._id}`);
      if (!response.error) {
        router.push('/customers');
      } else {
        setError(response.error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCustomer({
      ...editedCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (value: string) => {
    setEditedCustomer({
      ...editedCustomer,
      installAddress: value,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <Input
              id="firstName"
              name="firstName"
              value={editedCustomer.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <Input
              id="lastName"
              name="lastName"
              value={editedCustomer.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              value={editedCustomer.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={editedCustomer.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <AddressField
            value={editedCustomer.installAddress || ''}
            onChange={handleAddressChange}
            label="Install Address"
            placeholder="Enter customer's install address"
          />
          <div className="flex justify-between">
            <Button type="button" onClick={handleCancelEdit} variant="secondary">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">{customer.firstName} {customer.lastName}</h2>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phoneNumber}</p>
          <p><strong>Install Address:</strong> {customer.installAddress || 'Not provided'}</p>
          <p><strong>Mobility Aids:</strong> {customer.mobilityAids.join(', ')}</p>
          {showActions && (
            <div className="mt-6 flex justify-between">
              <ActionButton onClick={handleEdit} label="Edit" variant="secondary" />
              <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomerDetails;
\`\`\`

# src/components/CreateQuoteButton.tsx

\`\`\`tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const CreateQuoteButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quotes/new');
  };

  return (
    <Button onClick={handleClick}>
      Create New Quote
    </Button>
  );
};

export default CreateQuoteButton;
\`\`\`

# src/app/settings/page.tsx

\`\`\`tsx
'use client';

import React from 'react';
import PricingVariables from '@/components/PricingVariables';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <PricingVariables />
    </div>
  );
};

export default SettingsPage;
\`\`\`

# src/app/quotes/page.tsx

\`\`\`tsx
// src/app/quotes/page.tsx

import React from 'react';
import QuoteLayout from '@/components/QuoteLayout';
import QuoteList from '@/components/QuoteList';
import CreateQuoteButton from '@/components/CreateQuoteButton';

export default function Quotes() {
  return (
    <QuoteLayout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Quotes</h1>
          <CreateQuoteButton />
        </div>
        <QuoteList />
      </div>
    </QuoteLayout>
  );
}
\`\`\`

# src/app/rental-requests/page.tsx

\`\`\`tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { api } from '@/utils/api';
import { RentalRequest } from '@/types';

const RentalRequestCard: React.FC<{ request: RentalRequest }> = ({ request }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h3 className="text-lg font-semibold mb-2">{request.firstName} {request.lastName}</h3>
    <p className="text-sm text-gray-600 mb-1">Email: {request.email}</p>
    <p className="text-sm text-gray-600 mb-1">Phone: {request.phone}</p>
    <p className="text-sm text-gray-600 mb-1">Installation: {request.installationTimeframe}</p>
    <p className="text-sm text-gray-600 mb-1">Address: {request.installAddress}</p>
    <p className="text-sm text-gray-600 mb-4">Submitted: {new Date(request.createdAt).toLocaleDateString()}</p>
    <Link href={`/rental-requests/${request._id}`} passHref>
      <Button variant="secondary" className="w-full">View Details</Button>
    </Link>
  </div>
);

const RentalRequestsPage = () => {
  const [rentalRequests, setRentalRequests] = useState<RentalRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentalRequests = async () => {
      try {
        const response = await api.get<RentalRequest[]>('/rental-requests');
        if (response.data) {
          setRentalRequests(Array.isArray(response.data) ? response.data : []);
        } else if (response.error) {
          setError(response.error);
        }
      } catch (err) {
        setError('Failed to load rental requests. Please try again later.');
        console.error('Error fetching rental requests:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalRequests();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Rental Requests</h1>
      <div className="mb-6">
        <Link href="/rental-requests/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Rental Request
        </Link>
      </div>
      {isLoading ? (
        <p>Loading rental requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : rentalRequests.length === 0 ? (
        <p>No rental requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rentalRequests.map((request) => (
            <RentalRequestCard key={request._id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalRequestsPage;
\`\`\`

# src/app/login/page.tsx

\`\`\`tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
\`\`\`

# src/app/fonts/GeistVF.woff

This is a binary file of the type: Binary

# src/app/fonts/GeistMonoVF.woff

This is a binary file of the type: Binary

# src/app/customers/page.tsx

\`\`\`tsx
import React from 'react';
import CustomerList from '@/components/CustomerList';

export default function Customers() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <CustomerList />
    </div>
  );
}
\`\`\`

# src/components/ui/Select.tsx

\`\`\`tsx
import * as React from "react"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div>
        <select
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${error ? 'border-red-500' : ''}`}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
\`\`\`

# src/components/ui/Input.tsx

\`\`\`tsx
import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${error ? 'border-red-500' : ''}`}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
\`\`\`

# src/components/ui/FormattedPhoneInput.tsx

\`\`\`tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/Input';

interface FormattedPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export const FormattedPhoneInput: React.FC<FormattedPhoneInputProps> = ({
  value,
  onChange,
  error,
  className
}) => {
  const [formattedValue, setFormattedValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const format = (val: string) => {
    const digits = val.replace(/\D/g, '');
    const chars = digits.split('');
    let formatted = '(___) ___-____';
    chars.forEach((char) => {
      formatted = formatted.replace('_', char);
    });
    return formatted;
  };

  useEffect(() => {
    setFormattedValue(format(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const selectionStart = input.selectionStart || 0; // Provide a default value
    const formatted = format(input.value);
    const digits = formatted.replace(/\D/g, '');
    
    onChange(digits);

    // Set cursor position after React updates the input
    setTimeout(() => {
      if (inputRef.current) {
        const newCursorPosition = selectionStart + (formatted.length - input.value.length);
        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    }, 0);
  };

  return (
    <Input
      ref={inputRef}
      type="tel"
      value={formattedValue}
      onChange={handleChange}
      placeholder="(___) ___-____"
      error={error}
      className={className}
    />
  );
};
\`\`\`

# src/components/ui/Checkbox.tsx

\`\`\`tsx
// src/components/ui/checkbox.tsx

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "../../lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
\`\`\`

# src/components/ui/Button.tsx

\`\`\`tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
\`\`\`

# src/components/ui/AddressField.tsx

\`\`\`tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Input } from './Input';

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  placeholder?: string;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: AutocompleteOptions) => google.maps.places.Autocomplete;
        };
      };
    };
  }
}

interface AutocompleteOptions {
  types: string[];
  componentRestrictions: { country: string };
  fields: string[];
}

interface Place {
  formatted_address?: string;
}

export const AddressField: React.FC<AddressFieldProps> = ({
  value,
  onChange,
  error,
  label = 'Address',
  placeholder = 'Enter your address'
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.google && !isLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else if (window.google && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address']
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace() as Place;
        if (place.formatted_address) {
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange]);

  return (
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <Input
        ref={inputRef}
        id="address"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        error={error}
        className="mt-1"
      />
    </div>
  );
};
\`\`\`

# src/components/ui/ActionButton.tsx

\`\`\`tsx
import React from 'react';
import { Button } from '@/components/ui/Button';

interface ActionButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, variant = 'default' }) => (
  <Button onClick={onClick} variant={variant}>
    {label}
  </Button>
);
\`\`\`

# src/components/RentalRequestForm/RentalRequestForm.tsx

\`\`\`tsx
'use client';

import React, { useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { RentalRequest } from '@/types';

type FormErrors = {
  [K in keyof Omit<RentalRequest, '_id' | 'createdAt'>]?: string;
};

type ChangeEventOrCustomChange = 
  | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  | { name: string; value: string | string[] };

interface RentalRequestFormProps {
  onSubmit: (data: Omit<RentalRequest, '_id' | 'createdAt'>) => Promise<void>;
}

const RentalRequestForm: React.FC<RentalRequestFormProps> = ({ onSubmit }) => {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState<Omit<RentalRequest, '_id' | 'createdAt'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    knowRampLength: '',
    estimatedRampLength: '',
    knowRentalDuration: '',
    estimatedRentalDuration: '',
    installationTimeframe: '',
    mobilityAids: [],
    installAddress: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEventOrCustomChange) => {
    const { name, value } = 'target' in e ? e.target : e;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleNextPage = () => {
    if (validatePage(1)) {
      setPage(2);
    }
  };

  const handlePrevPage = () => {
    setPage(1);
  };

  const validatePage = (pageNum: number): boolean => {
    const newErrors: FormErrors = {};
    if (pageNum === 1) {
      if (!values.firstName) newErrors.firstName = 'First name is required';
      if (!values.lastName) newErrors.lastName = 'Last name is required';
      if (!values.email) newErrors.email = 'Email is required';
      if (!values.phone) newErrors.phone = 'Phone number is required';
    } else if (pageNum === 2) {
      // Add validation for page 2 fields here
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validatePage(2)) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        // Handle successful submission (e.g., show success message, redirect)
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show error message)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      {page === 1 && (
        <ContactInfoForm
          formData={values}
          errors={errors}
          onChange={handleChange}
          onNextPage={handleNextPage}
        />
      )}
      {page === 2 && (
        <RampDetailsForm
          formData={values}
          errors={errors}
          onChange={handleChange}
          onPrevPage={handlePrevPage}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default RentalRequestForm;
\`\`\`

# src/components/RentalRequestForm/RampDetailsForm.tsx

\`\`\`tsx
// src/components/RentalRequestForm/RampDetailsForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface RampDetailsFormProps {
  formData: {
    knowRampLength: string;
    estimatedRampLength: string;
    knowRentalDuration: string;
    estimatedRentalDuration: string;
    installationTimeframe: string;
    mobilityAids: string[];
    installAddress: string;
  };
  errors: {
    knowRampLength?: string;
    estimatedRampLength?: string;
    knowRentalDuration?: string;
    estimatedRentalDuration?: string;
    installationTimeframe?: string;
    mobilityAids?: string;
    installAddress?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }) => void;
  onPrevPage: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const RampDetailsForm: React.FC<RampDetailsFormProps> = ({
  formData,
  errors,
  onChange,
  onPrevPage,
  onSubmit,
  isSubmitting,
}) => {
  const handleCheckboxChange = (aid: string) => (checked: boolean) => {
    const newAids = checked
      ? [...(formData.mobilityAids || []), aid]
      : (formData.mobilityAids || []).filter((item) => item !== aid);
    onChange({ name: 'mobilityAids', value: newAids });
  };

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">Ramp Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Do you know the length of ramp you need?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="yes"
                checked={formData.knowRampLength === 'yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="no"
                checked={formData.knowRampLength === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {formData.knowRampLength === 'yes' && (
          <div>
            <label htmlFor="estimatedRampLength" className="block text-sm font-medium">Estimated ramp length (in feet)</label>
            <Input
              id="estimatedRampLength"
              name="estimatedRampLength"
              type="number"
              value={formData.estimatedRampLength || ''}
              onChange={onChange}
              error={errors.estimatedRampLength}
              className="mt-1"
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium">Do you know how long you need the ramp?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="yes"
                checked={formData.knowRentalDuration === 'yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="no"
                checked={formData.knowRentalDuration === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {formData.knowRentalDuration === 'yes' && (
          <div>
            <label htmlFor="estimatedRentalDuration" className="block text-sm font-medium">Estimated rental duration (in days)</label>
            <Input
              id="estimatedRentalDuration"
              name="estimatedRentalDuration"
              type="number"
              value={formData.estimatedRentalDuration || ''}
              onChange={onChange}
              error={errors.estimatedRentalDuration}
              className="mt-1"
            />
          </div>
        )}

        <div>
          <label htmlFor="installationTimeframe" className="block text-sm font-medium">How soon do you need the ramp installed?</label>
          <Select
            id="installationTimeframe"
            name="installationTimeframe"
            value={formData.installationTimeframe || ''}
            onChange={onChange}
            error={errors.installationTimeframe}
          >
            <option value="">Select timeframe</option>
            <option value="Within 24 hours">Within 24 hours</option>
            <option value="Within 2-3 days">Within 2-3 days</option>
            <option value="Within 1 week">Within 1 week</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="More than 2 weeks">More than 2 weeks</option>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium">Mobility Aids (select any that apply)</label>
          <div className="mt-2 space-y-2">
            {['Wheelchair', 'Motorized scooter', 'Walker'].map((aid) => (
              <label key={aid} className="inline-flex items-center">
                <Checkbox
                  checked={formData.mobilityAids?.includes(aid) || false}
                  onCheckedChange={handleCheckboxChange(aid)}
                />
                <span className="ml-2 text-sm">{aid}</span>
              </label>
            ))}
          </div>
        </div>
        <AddressField
          value={formData.installAddress || ''}
          onChange={(value) => onChange({ target: { name: 'installAddress', value } } as React.ChangeEvent<HTMLInputElement>)}
          error={errors.installAddress}
          label="Installation Address"
          placeholder="Enter the address where the ramp will be installed"
        />

        <div className="flex justify-between pt-4">
          <Button onClick={onPrevPage} variant="secondary">Previous</Button>
          <Button onClick={onSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </div>
    </div>
  );
};
\`\`\`

# src/components/RentalRequestForm/EditRentalRequestForm.tsx

\`\`\`tsx
'use client';

import React, { useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { Button } from '@/components/ui/Button';
import { IRentalRequest } from '@/models';

interface RentalRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength: string;
  knowRentalDuration: string;
  estimatedRentalDuration: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
}

// Define a new type for errors where all values are strings
type FormErrors = {
  [K in keyof RentalRequestFormData]?: string;
};

interface EditRentalRequestFormProps {
  initialData: IRentalRequest;
  onSubmit: (data: IRentalRequest) => Promise<void>;
  onCancel: () => void;
}

export const EditRentalRequestForm: React.FC<EditRentalRequestFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<RentalRequestFormData>({
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    email: initialData.email,
    phone: initialData.phone,
    knowRampLength: initialData.knowRampLength,
    estimatedRampLength: initialData.estimatedRampLength || '',
    knowRentalDuration: initialData.knowRentalDuration,
    estimatedRentalDuration: initialData.estimatedRentalDuration || '',
    installationTimeframe: initialData.installationTimeframe,
    mobilityAids: initialData.mobilityAids,
    installAddress: initialData.installAddress,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }
  ) => {
    const { name, value } = 'target' in e ? e.target : e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    // Implement form validation logic here
    // For example:
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    // Add more validation as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData as IRentalRequest);
      } catch (error) {
        console.error('Error updating rental request:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ContactInfoForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onNextPage={() => {}} // Not used in edit mode
      />
      <RampDetailsForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onPrevPage={() => {}} // Not used in edit mode
        onSubmit={() => {}} // Not used in edit mode
        isSubmitting={isSubmitting}
      />
      <div className="flex justify-between">
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Updating...' : 'Update Request'}
        </Button>
      </div>
    </form>
  );
};
\`\`\`

# src/components/RentalRequestForm/ContactInfoForm.tsx

\`\`\`tsx
// src/components/RentalRequestForm/ContactInfoForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FormattedPhoneInput } from '@/components/ui/FormattedPhoneInput';

interface ContactInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextPage: () => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  formData,
  errors,
  onChange,
  onNextPage
}) => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={onChange}
            error={errors.firstName}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={onChange}
            error={errors.lastName}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={onChange}
            error={errors.email}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
          <FormattedPhoneInput
            value={formData.phone || ''}
            onChange={(value) => onChange({ target: { name: 'phone', value } } as React.ChangeEvent<HTMLInputElement>)}
            error={errors.phone}
            className="mt-1"
          />
        </div>
      </div>
      <div className="pt-4">
        <Button onClick={onNextPage} className="w-full">Next</Button>
      </div>
    </div>
  );
};
\`\`\`

# src/components/RentalRequestForm/ConfirmationPage.tsx

\`\`\`tsx
import React from 'react';
import { Button } from '../ui/Button';

interface ConfirmationPageProps {
  onStartOver: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onStartOver }) => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">Thank You!</h2>
      <p>
        Your rental request has been successfully submitted. We appreciate your interest in our wheelchair ramp rental service.
      </p>
      <p>
        Our team will review your request and reach out to you shortly with more information and next steps.
      </p>
      <p>
        If you have any immediate questions or concerns, please don&apos;t hesitate to contact us directly.
      </p>
      <div className="pt-4">
        <Button onClick={onStartOver} className="w-full">Submit Another Request</Button>
      </div>
    </div>
  );
};
\`\`\`

# src/app/quotes/new/page.tsx

\`\`\`tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerDetails from '@/components/CustomerDetails';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';
import { Customer, RampComponent } from '@/types';

const NewQuotePage: React.FC = () => {
  const router = useRouter();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);
  const [totalLength, setTotalLength] = useState(0);
  const [installPrice, setInstallPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [monthlyRate, setMonthlyRate] = useState(0);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleRampConfigurationChange = (components: RampComponent[], length: number) => {
    setRampComponents(components);
    setTotalLength(length);
  };

  const handlePriceCalculated = (install: number, delivery: number, monthly: number) => {
    setInstallPrice(install);
    setDeliveryPrice(delivery);
    setMonthlyRate(monthly);
  };

  const handleCreateQuote = async () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }

    try {
      const quoteData = {
        customer: selectedCustomer._id,
        installPrice,
        deliveryPrice,
        monthlyRate,
        components: rampComponents,
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        sentAt: null,
        signedAt: null,
        paymentStatus: 'PENDING',
      };

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create quote');
      }

      await response.json();
      router.push('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
      alert('Failed to create quote. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Quote</h1>
      <CustomerSearch onSelectCustomer={handleSelectCustomer} />
      {selectedCustomer && (
        <div className="mt-6 mb-6">
          <CustomerDetails 
            customer={selectedCustomer} 
            showActions={false}
            onCustomerUpdate={(updatedCustomer) => setSelectedCustomer(updatedCustomer)}
          />
        </div>
      )}
      <RampConfigurationV2 onConfigurationChange={handleRampConfigurationChange} />
      {selectedCustomer && (
        <PricingComponent 
          rampComponents={rampComponents} 
          totalLength={totalLength} 
          installAddress={selectedCustomer.installAddress || ''}
          onPriceCalculated={handlePriceCalculated}
        />
      )}
      <button 
        onClick={handleCreateQuote}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Create Quote
      </button>
    </div>
  );
};

export default NewQuotePage;
\`\`\`

# src/app/quotes/[id]/page.tsx

\`\`\`tsx
// src/app/quotes/[id]/page.tsx

import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';
import QuoteDetails from '@/components/QuoteDetails';

export default function QuotePage({ params }: { params: { id: string } }) {
  return (
    <QuoteProvider>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
        <QuoteDetails id={params.id} />
      </div>
    </QuoteProvider>
  );
}
\`\`\`

# src/app/rental-requests/new/page.tsx

\`\`\`tsx
'use client'; // Add this line to make it a Client Component

import React from 'react';
import RentalRequestForm from '@/components/RentalRequestForm/RentalRequestForm';
import { RentalRequest } from '@/types';

export default function NewRentalRequest() {
  const handleSubmit = async (data: Omit<RentalRequest, '_id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/rental-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit rental request');
      }

      const result = await response.json();
      console.log('Rental request submitted:', result);
      // You can add a success message or redirect here
    } catch (error) {
      console.error('Error submitting rental request:', error);
      // You can add an error message here
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">New Rental Request</h1>
      <RentalRequestForm onSubmit={handleSubmit} />
    </div>
  );
}
\`\`\`

# src/app/rental-requests/[id]/page.tsx

\`\`\`tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ActionButton } from '@/components/ui/ActionButton';
import { IRentalRequest } from '@/models';

export default function RentalRequestDetails({ params }: { params: { id: string } }) {
  const [request, setRequest] = useState<IRentalRequest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRentalRequest = async () => {
      try {
        const response = await fetch(`/api/rental-requests/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch rental request');
        }
        const data = await response.json();
        setRequest(data.data);
      } catch (err) {
        setError('Failed to load rental request. Please try again later.');
        console.error('Error fetching rental request:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalRequest();
  }, [params.id]);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this rental request?')) {
      try {
        const response = await fetch(`/api/rental-requests/${params.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete rental request');
        }
        router.push('/rental-requests');
      } catch (err) {
        console.error('Error deleting rental request:', err);
        alert('Failed to delete rental request. Please try again.');
      }
    }
  };

  const handleCreateCustomer = async () => {
    if (!request) return;

    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: request.firstName,
          lastName: request.lastName,
          email: request.email,
          phoneNumber: request.phone,
          installAddress: request.installAddress,
          mobilityAids: request.mobilityAids || [],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }

      const result = await response.json();
      console.log('Customer creation response:', result);
      if (result.data && result.data.id) {
        router.push(`/customers/${result.data.id}`);
      } else {
        throw new Error('Customer ID not returned from server');
      }
    } catch (err) {
      console.error('Error creating customer:', err);
      alert('Failed to create customer. Please try again.');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!request) return <p>Rental request not found.</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Rental Request Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{request.firstName} {request.lastName}</h2>
        <p><strong>Email:</strong> {request.email}</p>
        <p><strong>Phone:</strong> {request.phone}</p>
        <p><strong>Installation Timeframe:</strong> {request.installationTimeframe}</p>
        <p><strong>Installation Address:</strong> {request.installAddress}</p>
        <p><strong>Ramp Length:</strong> {request.knowRampLength === 'yes' ? `${request.estimatedRampLength} feet` : 'Unknown'}</p>
        <p><strong>Rental Duration:</strong> {request.knowRentalDuration === 'yes' ? `${request.estimatedRentalDuration} days` : 'Unknown'}</p>
        <p><strong>Mobility Aids:</strong> {request.mobilityAids && request.mobilityAids.length > 0 ? request.mobilityAids.join(', ') : 'None specified'}</p>
        <p><strong>Submitted:</strong> {request.createdAt ? new Date(request.createdAt).toLocaleString() : 'Unknown'}</p>
      </div>
      <div className="flex justify-between mt-6">
        <ActionButton onClick={handleCreateCustomer} label="Create Customer" variant="default" />
        <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
      </div>
    </div>
  );
}
\`\`\`

# src/app/customers/[id]/page.tsx

\`\`\`tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

export default function CustomerDetails({ params }: { params: { id: string } }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [editedCustomer, setEditedCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`/api/customers/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch customer');
        }
        const data = await response.json();
        setCustomer(data.data);
        setEditedCustomer(data.data);
      } catch (err) {
        setError('Failed to load customer. Please try again later.');
        console.error('Error fetching customer:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomer();
  }, [params.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    if (!editedCustomer) return;

    try {
      const response = await fetch(`/api/customers/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCustomer),
      });

      if (!response.ok) {
        throw new Error('Failed to update customer');
      }

      const updatedCustomer = await response.json();
      setCustomer(updatedCustomer.data);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating customer:', err);
      alert('Failed to update customer. Please try again.');
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      try {
        const response = await fetch(`/api/customers/${params.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete customer');
        }
        router.push('/customers');
      } catch (err) {
        console.error('Error deleting customer:', err);
        alert('Failed to delete customer. Please try again.');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedCustomer) return;
    setEditedCustomer({
      ...editedCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (value: string) => {
    if (!editedCustomer) return;
    setEditedCustomer({
      ...editedCustomer,
      installAddress: value,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!customer) return <p>Customer not found.</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {isEditing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <Input
                id="firstName"
                name="firstName"
                value={editedCustomer?.firstName || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                value={editedCustomer?.lastName || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                name="email"
                value={editedCustomer?.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={editedCustomer?.phoneNumber || ''}
                onChange={handleInputChange}
              />
            </div>
            <AddressField
              value={editedCustomer?.installAddress || ''}
              onChange={handleAddressChange}
              label="Installation Address"
              placeholder="Enter customer's installation address"
            />
            <div className="flex justify-between">
              <Button type="button" onClick={handleCancelEdit} variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">{customer.firstName} {customer.lastName}</h2>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phoneNumber}</p>
            <p><strong>Installation Address:</strong> {customer.installAddress}</p>
            <p><strong>Mobility Aids:</strong> {customer.mobilityAids.join(', ')}</p>
            <div className="mt-6 flex justify-between">
              <ActionButton onClick={handleEdit} label="Edit" variant="secondary" />
              <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
\`\`\`

# src/app/api/settings/route.ts

\`\`\`ts
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
\`\`\`

# src/app/api/send-quote/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';

export const POST = createApiHandler<{ message: string }>(async (request) => {
  const { quoteId } = await request.json();
  const quote = await Quote.findById(quoteId).populate('customer');
  
  if (!quote) {
    throw new Error('Quote not found');
  }

  // TODO: Implement email sending logic
  // TODO: Implement Stripe payment link generation
  // TODO: Implement esignatures.io agreement link generation

  quote.status = 'SENT';
  quote.sentAt = new Date();
  await quote.save();

  return { data: { message: 'Quote sent successfully' } };
});
\`\`\`

# src/app/api/rental-requests/route.ts

\`\`\`ts
import { NextRequest, NextResponse } from 'next/server';
import { RentalRequest } from '@/models';
import { RentalRequest as RentalRequestCreateRequest } from '@/types';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: RentalRequestCreateRequest = await request.json();
    console.log('Received body:', body);

    // Basic validation
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create a new rental request
    const newRentalRequest = await RentalRequest.create(body);
    
    const response = NextResponse.json({ data: newRentalRequest.toObject() }, { status: 201 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
}

export async function GET() {
  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response = NextResponse.json({ data: rentalRequests.map(request => request.toObject()) });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  } catch (error) {
    console.error('Error in GET /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
  }
}
\`\`\`

# src/app/api/register/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { clientPromise } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export const POST = createApiHandler<{ message: string; userId: string }>(async (request) => {
  const { username, email, password } = await request.json();

  if (!username || !email || !password) {
    throw new Error('Missing required fields');
  }

  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection('users').findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error('Username or email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection('users').insertOne({
    username,
    email,
    password: hashedPassword,
  });

  return { 
    data: { 
      message: 'User registered successfully', 
      userId: result.insertedId.toString() 
    } 
  };
});
\`\`\`

# src/app/api/quotes/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';
import { Quote as QuoteType, QuoteCreateRequest } from '@/types';

export const GET = createApiHandler<QuoteType[]>(async () => {
  const quotes = await Quote.find().populate('customer').sort({ createdAt: -1 });
  return { data: quotes };
});

export const POST = createApiHandler<QuoteType>(async (request) => {
  const data: QuoteCreateRequest = await request.json();
  
  if (!data.customer || !data.installPrice || !data.deliveryPrice || !data.monthlyRate || !data.components) {
    throw new Error('Missing required fields');
  }

  const quote = await Quote.create(data);
  const populatedQuote = await Quote.findById(quote._id).populate('customer');
  
  if (!populatedQuote) {
    throw new Error('Failed to create quote');
  }

  return { data: populatedQuote };
});
\`\`\`

# src/app/api/distance/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

export const GET = createApiHandler<{ distance: number }>(async (request) => {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY is not set');
  }

  const response = await client.distancematrix({
    params: {
      origins: [origin],
      destinations: [destination],
      key: apiKey,
    },
  });

  if (response.data.rows[0].elements[0].status !== 'OK') {
    throw new Error('Unable to calculate distance');
  }

  const distance = response.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
  return { data: { distance } };
});
\`\`\`

# src/app/api/customers/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType, CustomerCreateRequest } from '@/types';

export const POST = createApiHandler<CustomerType>(async (request) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await Customer.create(data);
  return { data: customer.toObject() };
});

export const GET = createApiHandler<CustomerType[]>(async () => {
  const customers = await Customer.find().sort({ createdAt: -1 });
  return { data: customers.map(customer => customer.toObject()) };
});
\`\`\`

# src/app/api/rental-requests/[id]/route.ts

\`\`\`ts
import { NextRequest } from 'next/server';
import { createApiHandler } from '@/lib/apiHandler';
import { RentalRequest } from '@/models';
import { RentalRequest as RentalRequestType, RentalRequestCreateRequest, ApiResponse } from '@/types';
import { corsMiddleware } from '@/lib/cors';

export async function OPTIONS(req: NextRequest) {
  return corsMiddleware(req);
}

export const GET = createApiHandler<RentalRequestType>(async (_request: NextRequest, { params }): Promise<ApiResponse<RentalRequestType>> => {
  const rentalRequest = await RentalRequest.findById(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: rentalRequest.toObject() };
});

export const PUT = createApiHandler<RentalRequestType>(async (request: NextRequest, { params }): Promise<ApiResponse<RentalRequestType>> => {
  const data: RentalRequestCreateRequest = await request.json();
  const updatedRentalRequest = await RentalRequest.findByIdAndUpdate(params.id, data, { new: true });
  if (!updatedRentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: updatedRentalRequest.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }): Promise<ApiResponse<{ message: string }>> => {
  const rentalRequest = await RentalRequest.findByIdAndDelete(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: { message: 'Rental request deleted successfully' } };
});
\`\`\`

# src/app/api/quotes/[id]/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';
import { Quote as QuoteType, QuoteCreateRequest } from '@/types';
import { NextRequest } from 'next/server';

export const GET = createApiHandler<QuoteType>(async (_request: NextRequest, { params }) => {
  const quote = await Quote.findById(params.id).populate('customer');
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: quote.toObject() };
});

export const PUT = createApiHandler<QuoteType>(async (request: NextRequest, { params }) => {
  const data: QuoteCreateRequest = await request.json();
  const quote = await Quote.findByIdAndUpdate(params.id, data, { new: true }).populate('customer');
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: quote.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }) => {
  const quote = await Quote.findByIdAndDelete(params.id);
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: { message: 'Quote deleted successfully' } };
});
\`\`\`

# src/app/api/customers/[id]/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType, CustomerCreateRequest } from '@/types';

export const GET = createApiHandler<CustomerType>(async (_request, { params }) => {
  const customer = await Customer.findById(params.id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: customer.toObject() };
});

export const PUT = createApiHandler<CustomerType>(async (request, { params }) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await Customer.findByIdAndUpdate(params.id, data, { new: true });
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: customer.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request, { params }) => {
  const customer = await Customer.findByIdAndDelete(params.id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: { message: 'Customer deleted successfully' } };
});
\`\`\`

# src/app/api/customers/search/route.ts

\`\`\`ts
import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType } from '@/types';

export const GET = createApiHandler<CustomerType[]>(async (request) => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term is required');
  }

  const customers = await Customer.find({
    $or: [
      { firstName: { $regex: term, $options: 'i' } },
      { lastName: { $regex: term, $options: 'i' } },
      { email: { $regex: term, $options: 'i' } },
    ]
  }).select('firstName lastName email phoneNumber installAddress mobilityAids').limit(10);

  return { data: customers };
});
\`\`\`

# src/app/api/auth/[...nextauth]/route.ts

\`\`\`ts
import NextAuth from "next-auth";
import { authOptions } from "./auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
\`\`\`

# src/app/api/auth/[...nextauth]/auth.ts

\`\`\`ts
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
\`\`\`


```

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

```

# src/middleware.ts

```ts
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
```

# src/utils/api.ts

```ts
// src/utils/api.ts

import { ApiResponse } from '../types';

async function fetchAPI<T>(
  endpoint: string,
  method: string = 'GET',
  body?: object
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error);
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
}

export const api = {
  get: <T>(endpoint: string) => fetchAPI<T>(`/api${endpoint}`),
  post: <T>(endpoint: string, body: object) => fetchAPI<T>(`/api${endpoint}`, 'POST', body),
  put: <T>(endpoint: string, body: object) => fetchAPI<T>(`/api${endpoint}`, 'PUT', body),
  delete: <T>(endpoint: string) => fetchAPI<T>(`/api${endpoint}`, 'DELETE'),
};
```

# src/types/next-auth.d.ts

```ts
import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}
```

# src/types/index.ts

```ts
// src/types/index.ts

import { Document } from 'mongoose';

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress?: string;
  mobilityAids: string[];
}

export interface CustomerCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  installAddress?: string;
  mobilityAids: string[];
}

export interface RentalRequest {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength: string;
  knowRentalDuration: string;
  estimatedRentalDuration: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
  createdAt: string;
}

export interface RentalRequestCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength?: string;
  knowRentalDuration: string;
  estimatedRentalDuration?: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
}

export interface RampComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Quote {
  _id: string;
  customer: string | Customer;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: RampComponent[];
  status: string;
  createdAt: string;
  updatedAt: string;
  sentAt: string | null;
  signedAt: string | null;
  paymentStatus: string;
}

export interface QuoteCreateRequest {
  customer: string;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: RampComponent[];
  status: string;
}

export interface Settings {
  _id: string;
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

export interface SettingsUpdateRequest {
  warehouseAddress?: string;
  monthlyRatePerFt?: number;
  installRatePerComponent?: number;
  deliveryRatePerMile?: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

export interface DistanceResponse {
  distance: number;
}

// Mongoose document interfaces
export interface ICustomer extends Document, Omit<Customer, '_id'> {}
export interface IRentalRequest extends Document, Omit<RentalRequest, '_id'> {}
export interface IQuote extends Document, Omit<Quote, '_id' | 'customer'> {
  customer: string | ICustomer;
}
export interface ISettings extends Document, Omit<Settings, '_id'> {}

// Utility types
export type WithId<T> = T & { _id: string };
export type WithoutId<T> = Omit<T, '_id'>;
```

# src/styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

```

# src/models/index.ts

```ts
import mongoose, { Document } from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  installAddress: { type: String, required: true }, // Changed from 'address' to 'installAddress'
  mobilityAids: [{ type: String }],
});

const RampDetailsSchema = new mongoose.Schema({
  knowRampLength: { type: Boolean, required: true },
  estimatedRampLength: { type: Number },
  knowRentalDuration: { type: Boolean, required: true },
  estimatedRentalDuration: { type: Number },
  installationTimeframe: { type: String, required: true },
  mobilityAids: [{ type: String }],
  installationAddress: { type: String, required: true },
});

const RentalRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  knowRampLength: String,
  estimatedRampLength: String,
  knowRentalDuration: String,
  estimatedRentalDuration: String,
  installationTimeframe: String,
  mobilityAids: [String],
  installAddress: String,
  createdAt: { type: Date, default: Date.now },
}, { strict: false });

const QuoteSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  installPrice: { type: Number, required: true },
  deliveryPrice: { type: Number, required: true },
  monthlyRate: { type: Number, required: true },
  components: [{ 
    id: String,
    name: String,
    quantity: Number,
    price: Number
  }],
  status: { type: String, default: 'DRAFT' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  sentAt: { type: Date },
  signedAt: { type: Date },
  paymentStatus: { type: String, default: 'PENDING' },
});

const SettingsSchema = new mongoose.Schema({
  warehouseAddress: { type: String, required: true },
  monthlyRatePerFt: { type: Number, required: true },
  installRatePerComponent: { type: Number, required: true },
  deliveryRatePerMile: { type: Number, required: true },
});

export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  mobilityAids: string[];
}

export interface IRampDetails extends Document {
  knowRampLength: boolean;
  estimatedRampLength?: number;
  knowRentalDuration: boolean;
  estimatedRentalDuration?: number;
  installationTimeframe: string;
  mobilityAids: string[];
  installationAddress: string;
}

export interface IRentalRequest extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength?: string;
  knowRentalDuration: string;
  estimatedRentalDuration?: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
  createdAt: Date;
}

export interface IQuote extends Document {
  customer: mongoose.Types.ObjectId | ICustomer;
  installPrice: number;
  deliveryPrice: number;
  monthlyRate: number;
  components: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date;
  signedAt?: Date;
  paymentStatus: string;
}

export interface ISettings extends Document {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);
export const RampDetails = mongoose.models.RampDetails || mongoose.model<IRampDetails>('RampDetails', RampDetailsSchema);
export const RentalRequest = mongoose.models.RentalRequest || mongoose.model<IRentalRequest>('RentalRequest', RentalRequestSchema);
export const Quote = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);
export const Settings = mongoose.models.Settings || mongoose.model<ISettings>('Settings', SettingsSchema);

// Remove this line:
// export { Customer } from './Customer';
```

# src/lib/utils.ts

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

# src/lib/rate-limit.ts

```ts
import { NextRequest } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export const rateLimit = (limit: number, interval: number) => {
  return {
    check: (req: NextRequest, identifier: string) => {
      const now = Date.now();
      const key = `${identifier}_${req.ip}`;

      if (store[key] && now < store[key].resetTime) {
        store[key].count++;
        return store[key].count <= limit;
      } else {
        store[key] = {
          count: 1,
          resetTime: now + interval,
        };
        return true;
      }
    },
  };
};
```

# src/lib/mongodb.ts

```ts
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options: mongoose.ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use a module-level variable instead of a global
let _mongoClientPromise: Promise<MongoClient> | undefined;

if (process.env.NODE_ENV === 'development') {
  if (!_mongoClientPromise) {
    client = new MongoClient(uri);
    _mongoClientPromise = client.connect();
  }
  clientPromise = _mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export the clientPromise
export { clientPromise };

// Cached connection for mongoose
let cachedConnection: typeof mongoose | null = null;

export async function dbConnect(): Promise<typeof mongoose> {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (mongoose.connection.readyState >= 1) {
    cachedConnection = mongoose;
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(uri, options);
    return cachedConnection;
  } catch (e) {
    throw e;
  }
}

// Create a named object for the default export
const mongodbConnection = {
  clientPromise,
  dbConnect,
};

// Export the named object as default
export default mongodbConnection;
```

# src/lib/cors.ts

```ts
import { NextRequest, NextResponse } from 'next/server';
import { allowedOrigins } from '@/config/cors';

export function setCORSHeaders(req: NextRequest, res: NextResponse): NextResponse {
  const origin = req.headers.get('origin');
  
  if (origin && allowedOrigins.includes(origin)) {
    res.headers.set('Access-Control-Allow-Origin', origin);
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return res;
}

export async function corsMiddleware(req: NextRequest) {
  const origin = req.headers.get('origin');

  if (origin && allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  return new NextResponse(null, { status: 204 });
}
```

# src/lib/apiHandler.ts

```ts
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
```

# src/hooks/usePricingVariables.ts

```ts
import { useState, useEffect } from 'react';

interface PricingVariables {
  warehouseAddress: string;
  monthlyRatePerFt: number;
  installRatePerComponent: number;
  deliveryRatePerMile: number;
}

const defaultPricingVariables: PricingVariables = {
  warehouseAddress: '',
  monthlyRatePerFt: 0,
  installRatePerComponent: 0,
  deliveryRatePerMile: 0,
};

export const usePricingVariables = () => {
  const [pricingVariables, setPricingVariables] = useState<PricingVariables>(defaultPricingVariables);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (!response.ok) throw new Error('Failed to fetch settings');
        const { data } = await response.json();
        setPricingVariables(data || defaultPricingVariables);
      } catch (error) {
        console.error('Error fetching settings:', error);
        setError('Failed to load settings. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const updatePricingVariables = async (newVariables: PricingVariables) => {
    try {
      const response = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVariables),
      });
      if (!response.ok) throw new Error('Failed to update settings');
      const { data } = await response.json();
      setPricingVariables(data);
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error; // Re-throw the error to be handled in the component
    }
  };

  return { pricingVariables, updatePricingVariables, isLoading, error };
};
```

# src/hooks/useForm.ts

```ts
'use client';

import { useState, ChangeEvent } from 'react';

interface FormErrors {
  [key: string]: string;
}

type ChangeEventOrCustomChange = ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] };

export function useForm<T>(initialState: T, validate: (values: T) => FormErrors) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEventOrCustomChange) => {
    const { name, value } = 'target' in e ? e.target : e;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (onSubmit: (values: T) => Promise<void>) => {
    setIsSubmitting(true);
    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    setIsSubmitting(false);
  };

  return { values, errors, isSubmitting, handleChange, handleSubmit, setValues };
}
```

# src/hooks/useDistanceCalculation.ts

```ts
import { useState, useEffect } from 'react';

export const useDistanceCalculation = (origin: string, destination: string) => {
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!origin || !destination) return;

    const calculateDistance = async () => {
      try {
        const response = await fetch(`/api/distance?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`);
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || 'Failed to calculate distance');
        }
        
        setDistance(data.distance);
        setError(null);
      } catch (err) {
        console.error('Error calculating distance:', err);
        setError('Error calculating distance. Please try again.');
        setDistance(null);
      }
    };

    calculateDistance();
  }, [origin, destination]);

  return { distance, error };
};
```

# src/contexts/QuoteContext.tsx

```tsx
'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import { api } from '@/utils/api';
import { Quote, ApiResponse } from '@/types';

interface QuoteContextType {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  getQuote: (id: string) => Promise<ApiResponse<Quote>>;
  addQuote: (quote: Omit<Quote, '_id'>) => Promise<ApiResponse<Quote>>;
  updateQuote: (id: string, quote: Partial<Quote>) => Promise<ApiResponse<Quote>>;
  deleteQuote: (id: string) => Promise<ApiResponse<void>>;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuoteContext = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuoteContext must be used within a QuoteProvider');
  }
  return context;
};

export const QuoteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Quote[]>('/quotes');
      if (response.data) {
        setQuotes(Array.isArray(response.data) ? response.data : []);
      } else if (response.error) {
        setError(response.error);
      }
    } catch (err) {
      setError('Failed to fetch quotes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  const getQuote = async (id: string): Promise<ApiResponse<Quote>> => {
    return await api.get<Quote>(`/quotes/${id}`);
  };

  const addQuote = async (quote: Omit<Quote, '_id'>): Promise<ApiResponse<Quote>> => {
    const response = await api.post<Quote>('/quotes', quote);
    if (response.data) {
      setQuotes(prevQuotes => [...prevQuotes, response.data!]);
    }
    return response;
  };

  const updateQuote = async (id: string, updatedQuote: Partial<Quote>): Promise<ApiResponse<Quote>> => {
    const response = await api.put<Quote>(`/quotes/${id}`, updatedQuote);
    if (response.data) {
      setQuotes(prevQuotes => prevQuotes.map(q => q._id === id ? response.data! : q));
    }
    return response;
  };

  const deleteQuote = async (id: string): Promise<ApiResponse<void>> => {
    const response = await api.delete<void>(`/quotes/${id}`);
    if (!response.error) {
      setQuotes(prevQuotes => prevQuotes.filter(q => q._id !== id));
    }
    return response;
  };

  return (
    <QuoteContext.Provider value={{ quotes, loading, error, getQuote, addQuote, updateQuote, deleteQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
```

# src/config/cors.ts

```ts
export const allowedOrigins = [
    'https://www.samedayramps.com',
    'https://form.samedayramps.com',
    'https://app.samedayramps.com',
    'http://localhost:3000'  // Include this for local development
  ];
```

# src/components/SessionWrapper.tsx

```tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionWrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
```

# src/components/RampConfiguration.tsx

```tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { RampComponent } from '@/types';

const componentTypes = [
  'Select a component',
  '4ft ramp section',
  '5ft ramp section',
  '6ft ramp section',
  '7ft ramp section',
  '8ft ramp section',
  '5x4 ft landing',
  '5x5 ft landing',
  '5x8 ft landing',
];

const componentPrices = {
  '4ft ramp section': 100,
  '5ft ramp section': 125,
  '6ft ramp section': 150,
  '7ft ramp section': 175,
  '8ft ramp section': 200,
  '5x4 ft landing': 250,
  '5x5 ft landing': 300,
  '5x8 ft landing': 400,
};

interface RampConfigurationV2Props {
  onConfigurationChange: (components: RampComponent[], totalLength: number) => void;
  initialComponents?: RampComponent[];
  readOnly?: boolean;
}

const RampConfigurationV2: React.FC<RampConfigurationV2Props> = ({ 
  onConfigurationChange, 
  initialComponents = [],
  readOnly = false
}) => {
  const [components, setComponents] = useState<RampComponent[]>(initialComponents);
  const [totalLength, setTotalLength] = useState(0);

  const calculateTotalLength = useCallback(() => {
    let length = 0;
    components.forEach(component => {
      const match = component.name.match(/(\d+)ft/);
      if (match) {
        length += parseInt(match[1]) * component.quantity;
      }
    });
    setTotalLength(length);
    onConfigurationChange(components, length);
  }, [components, onConfigurationChange]);

  useEffect(() => {
    calculateTotalLength();
  }, [calculateTotalLength]);

  const handleComponentSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedComponent = e.target.value;
    if (selectedComponent !== 'Select a component') {
      const existingComponent = components.find(comp => comp.name === selectedComponent);
      if (existingComponent) {
        updateQuantity(existingComponent.id, 1);
      } else {
        const newComponent: RampComponent = {
          id: Date.now().toString(),
          name: selectedComponent,
          quantity: 1,
          price: componentPrices[selectedComponent as keyof typeof componentPrices] || 0,
        };
        const updatedComponents = [...components, newComponent];
        setComponents(updatedComponents);
        onConfigurationChange(updatedComponents, totalLength);
      }
      e.target.value = 'Select a component'; // Reset dropdown to default option
    }
  };

  const updateQuantity = (id: string, change: number) => {
    const updatedComponents = components.map(component => 
      component.id === id ? { ...component, quantity: Math.max(0, component.quantity + change) } : component
    ).filter(component => component.quantity > 0);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents, totalLength);
  };

  const removeComponent = (id: string) => {
    const updatedComponents = components.filter(component => component.id !== id);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents, totalLength);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Ramp Configuration</h2>
      
      {!readOnly && (
        <div className="mb-4">
          <select 
            onChange={handleComponentSelect}
            className="w-full p-2 border rounded"
            defaultValue="Select a component"
          >
            {componentTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      )}

      {components.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Selected Components:</h3>
          <ul>
            {components.map((component) => (
              <li key={component.id} className="flex items-center justify-between mb-2">
                <span>{component.name} (x{component.quantity})</span>
                {!readOnly && (
                  <div className="flex items-center">
                    <button 
                      type="button"
                      onClick={() => updateQuantity(component.id, -1)}
                      className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-2">{component.quantity}</span>
                    <button 
                      type="button"
                      onClick={() => updateQuantity(component.id, 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button 
                      type="button"
                      onClick={() => removeComponent(component.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RampConfigurationV2;
```

# src/components/QuoteList.tsx

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Customer } from '@/types';

const QuoteList: React.FC = () => {
  const { quotes, loading, error } = useQuoteContext();

  const getCustomerName = (customer: string | Customer): string => {
    if (typeof customer === 'string') {
      return 'N/A';
    }
    return `${customer.firstName} ${customer.lastName}`;
  };

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created At
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {quotes.map((quote) => (
                  <tr key={quote._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getCustomerName(quote.customer)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{quote.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date(quote.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/quotes/${quote._id}`} className="text-indigo-600 hover:text-indigo-900">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteList;
```

# src/components/QuoteLayout.tsx

```tsx
import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';

interface QuoteLayoutProps {
  children: React.ReactNode;
}

const QuoteLayout: React.FC<QuoteLayoutProps> = ({ children }) => {
  return (
    <QuoteProvider>
      {children}
    </QuoteProvider>
  );
};

export default QuoteLayout;
```

# src/components/QuoteDetails.tsx

```tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Quote } from '@/types';
import { api } from '@/utils/api';
import CustomerDetails from '@/components/CustomerDetails';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';

interface QuoteDetailsProps {
  id: string;
}

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ id }) => {
  const { updateQuote, deleteQuote } = useQuoteContext();
  const [isEditing, setIsEditing] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      const response = await api.get<Quote>(`/quotes/${id}`);
      if (response.data) {
        setQuote(response.data);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (updatedQuote: Quote) => {
    const response = await updateQuote(id, updatedQuote);
    if (response.error) {
      setError(response.error);
    } else {
      setQuote(response.data!);
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      const response = await deleteQuote(id);
      if (response.error) {
        setError(response.error);
      } else {
        router.push('/quotes');
      }
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quote) {
    return <div>Quote not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
      
      <div className="mb-6">
        {quote.customer && typeof quote.customer !== 'string' && (
          <CustomerDetails 
            customer={quote.customer} 
            showActions={false}
          />
        )}
      </div>

      <div className="mb-6">
        <RampConfigurationV2 
          onConfigurationChange={() => {}}
          initialComponents={quote.components}
          readOnly={!isEditing}
        />
      </div>

      <div className="mb-6">
        <PricingComponent 
          rampComponents={quote.components}
          totalLength={quote.components.reduce((total, component) => {
            const match = component.name.match(/(\d+)ft/);
            return total + (match ? parseInt(match[1]) * component.quantity : 0);
          }, 0)}
          installAddress={typeof quote.customer !== 'string' ? quote.customer.installAddress || '' : ''}
          onPriceCalculated={() => {}}
          initialInstallPrice={quote.installPrice}
          initialDeliveryPrice={quote.deliveryPrice}
          initialMonthlyRate={quote.monthlyRate}
          readOnly={!isEditing}
        />
      </div>

      <div className="mt-6 flex justify-between">
        {isEditing ? (
          <>
            <button 
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button 
              onClick={() => handleSave(quote)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteDetails;
```

# src/components/PricingVariables.tsx

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import { AddressField } from '@/components/ui/AddressField';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { usePricingVariables } from '@/hooks/usePricingVariables';

const PricingVariables: React.FC = () => {
  const { pricingVariables, updatePricingVariables, isLoading, error } = usePricingVariables();
  const [formData, setFormData] = useState(pricingVariables);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setFormData(pricingVariables);
  }, [pricingVariables]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddressChange = (value: string) => {
    setFormData(prev => ({ ...prev, warehouseAddress: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveError(null);
    try {
      await updatePricingVariables(formData);
      // Optionally, you can add a success message here
    } catch (error) {
      setSaveError('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-4">Loading pricing variables...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-4">Error loading pricing variables: {error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Pricing Variables</h2>
      
      <div>
        <AddressField
          value={formData.warehouseAddress}
          onChange={handleAddressChange}
          label="Warehouse Address"
          placeholder="Enter warehouse address"
        />
      </div>
      
      <div>
        <label htmlFor="monthlyRatePerFt" className="block text-sm font-medium text-gray-700">
          Monthly Rate per ft ($)
        </label>
        <Input
          type="number"
          id="monthlyRatePerFt"
          name="monthlyRatePerFt"
          value={formData.monthlyRatePerFt}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      <div>
        <label htmlFor="installRatePerComponent" className="block text-sm font-medium text-gray-700">
          Install Rate per Component ($)
        </label>
        <Input
          type="number"
          id="installRatePerComponent"
          name="installRatePerComponent"
          value={formData.installRatePerComponent}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      <div>
        <label htmlFor="deliveryRatePerMile" className="block text-sm font-medium text-gray-700">
          Delivery Rate per Mile ($)
        </label>
        <Input
          type="number"
          id="deliveryRatePerMile"
          name="deliveryRatePerMile"
          value={formData.deliveryRatePerMile}
          onChange={handleInputChange}
          step="0.01"
          min="0"
        />
      </div>
      
      {saveError && <div className="text-red-500">{saveError}</div>}
      
      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default PricingVariables;
```

# src/components/PricingComponent.tsx

```tsx
'use client';

import React, { useEffect, useState } from 'react';
import { usePricingVariables } from '@/hooks/usePricingVariables';
import { useDistanceCalculation } from '@/hooks/useDistanceCalculation';
import { RampComponent } from '@/types';

interface PricingComponentProps {
  rampComponents: RampComponent[];
  totalLength: number;
  installAddress: string;
  onPriceCalculated: (installPrice: number, deliveryPrice: number, monthlyRate: number) => void;
  initialInstallPrice?: number;
  initialDeliveryPrice?: number;
  initialMonthlyRate?: number;
  readOnly?: boolean;
}

const PricingComponent: React.FC<PricingComponentProps> = ({ 
  rampComponents, 
  totalLength, 
  installAddress,
  onPriceCalculated,
  initialInstallPrice,
  initialDeliveryPrice,
  initialMonthlyRate,
  readOnly = false
}) => {
  const { pricingVariables, isLoading: isPricingLoading, error: pricingError } = usePricingVariables();
  const { distance, error: distanceError } = useDistanceCalculation(pricingVariables.warehouseAddress, installAddress);
  const [installPrice, setInstallPrice] = useState(initialInstallPrice || 0);
  const [deliveryPrice, setDeliveryPrice] = useState(initialDeliveryPrice || 0);
  const [monthlyRate, setMonthlyRate] = useState(initialMonthlyRate || 0);

  useEffect(() => {
    if (isPricingLoading || distance === null) return;

    const calculatePrices = () => {
      const install = rampComponents.reduce((total, component) => 
        total + (component.quantity * pricingVariables.installRatePerComponent), 0);
      const delivery = distance * pricingVariables.deliveryRatePerMile;
      const monthly = totalLength * pricingVariables.monthlyRatePerFt;

      setInstallPrice(Number(install.toFixed(2)));
      setDeliveryPrice(Number(delivery.toFixed(2)));
      setMonthlyRate(Number(monthly.toFixed(2)));

      onPriceCalculated(install, delivery, monthly);
    };

    calculatePrices();
  }, [rampComponents, totalLength, distance, pricingVariables, isPricingLoading, onPriceCalculated]);

  if (isPricingLoading) {
    return <div>Loading pricing information...</div>;
  }

  if (pricingError) {
    return <div>Error loading pricing variables: {pricingError}</div>;
  }

  if (distanceError) {
    return (
      <div>
        <p>Error calculating distance: {distanceError}</p>
        <p>Unable to provide accurate pricing at this time.</p>
      </div>
    );
  }

  if (distance === null) {
    return <div>Calculating distance...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Pricing Details</h2>
      <div className="space-y-2">
        <p>Installation Price: ${installPrice.toFixed(2)}</p>
        <p>Delivery Price: ${deliveryPrice.toFixed(2)}</p>
        <p>Monthly Rate: ${monthlyRate.toFixed(2)}</p>
      </div>
      {!readOnly && (
        <button 
          onClick={() => onPriceCalculated(installPrice, deliveryPrice, monthlyRate)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Pricing
        </button>
      )}
    </div>
  );
};

export default PricingComponent;
```

# src/components/Layout.tsx

```tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
```

# src/components/Header.tsx

```tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Your App Name
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/quotes">Quotes</NavLink>
            <NavLink href="/customers">Customers</NavLink>
            <NavLink href="/rental-requests">Rental Requests</NavLink>
            <NavLink href="/settings">Settings</NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/quotes">Quotes</MobileNavLink>
            <MobileNavLink href="/customers">Customers</MobileNavLink>
            <MobileNavLink href="/rental-requests">Rental Requests</MobileNavLink>
            <MobileNavLink href="/settings">Settings</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
    {children}
  </Link>
);

export default Header;
```

# src/components/Footer.tsx

```tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4">
    <p className="text-gray-600 dark:text-gray-400">&copy; 2024 Wheelchair Ramp Rental. All rights reserved.</p>
  </footer>
);

export default Footer;
```

# src/components/ErrorBoundary.tsx

```tsx
'use client';

import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // We're not using the error parameter in this method
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

# src/components/EmbeddableRentalRequestForm.tsx

```tsx
import React, { useState } from 'react';

const EmbeddableRentalRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    knowRampLength: '',
    estimatedRampLength: '',
    knowRentalDuration: '',
    estimatedRentalDuration: '',
    installationTimeframe: '',
    mobilityAids: [],
    installAddress: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://app.samedayramps.com/api/rental-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Handle error
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return <div>Thank you for your submission!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Render form fields here */}
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
      />
      {/* Add more form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
};

export default EmbeddableRentalRequestForm;
```

# src/components/CustomerSearch.tsx

```tsx
'use client';

import React, { useState } from 'react';
import { Customer } from '@/types';

interface CustomerSearchProps {
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerSearch: React.FC<CustomerSearchProps> = ({ onSelectCustomer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length < 2) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/customers/search?term=${encodeURIComponent(term)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch customers');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      setError('An error occurred while searching for customers');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a customer"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-3 py-2 border rounded-md"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {searchResults.length > 0 && (
        <ul className="mt-2 border rounded-md max-h-80 overflow-y-auto">
          {searchResults.map(customer => (
            <li 
              key={customer._id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b last:border-b-0"
              onClick={() => onSelectCustomer(customer)}
            >
              <div className="font-semibold">{customer.firstName} {customer.lastName}</div>
              <div className="text-sm text-gray-600">{customer.email}</div>
              <div className="text-sm text-gray-600">Phone: {customer.phoneNumber}</div>
              {customer.installAddress && (
                <div className="text-sm text-gray-600">Install Address: {customer.installAddress}</div>
              )}
              {customer.mobilityAids && customer.mobilityAids.length > 0 && (
                <div className="text-sm text-gray-600">
                  Mobility Aids: {customer.mobilityAids.join(', ')}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerSearch;
```

# src/components/CustomerList.tsx

```tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { api } from '@/utils/api';
import { Customer } from '@/types';

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await api.get<Customer[]>('/customers');
      if (response.data) {
        setCustomers(Array.isArray(response.data) ? response.data : []);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchCustomers();
  }, []);

  if (isLoading) return <div>Loading customers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td className="px-6 py-4 whitespace-nowrap">{customer.firstName} {customer.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{customer.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/customers/${customer._id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CustomerList;
```

# src/components/CustomerDetails.tsx

```tsx
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { api } from '@/utils/api';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface CustomerDetailsProps {
  customer: Customer;
  showActions?: boolean;
  onCustomerUpdate?: (updatedCustomer: Customer) => void;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer, showActions = false, onCustomerUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer>(customer);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    const response = await api.put<Customer>(`/customers/${customer._id}`, editedCustomer);
    if (response.data) {
      setIsEditing(false);
      if (onCustomerUpdate) {
        onCustomerUpdate(response.data);
      }
    } else if (response.error) {
      setError(response.error);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      const response = await api.delete<void>(`/customers/${customer._id}`);
      if (!response.error) {
        router.push('/customers');
      } else {
        setError(response.error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCustomer({
      ...editedCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (value: string) => {
    setEditedCustomer({
      ...editedCustomer,
      installAddress: value,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <Input
              id="firstName"
              name="firstName"
              value={editedCustomer.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <Input
              id="lastName"
              name="lastName"
              value={editedCustomer.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              id="email"
              name="email"
              value={editedCustomer.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={editedCustomer.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <AddressField
            value={editedCustomer.installAddress || ''}
            onChange={handleAddressChange}
            label="Install Address"
            placeholder="Enter customer's install address"
          />
          <div className="flex justify-between">
            <Button type="button" onClick={handleCancelEdit} variant="secondary">
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">{customer.firstName} {customer.lastName}</h2>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phoneNumber}</p>
          <p><strong>Install Address:</strong> {customer.installAddress || 'Not provided'}</p>
          <p><strong>Mobility Aids:</strong> {customer.mobilityAids.join(', ')}</p>
          {showActions && (
            <div className="mt-6 flex justify-between">
              <ActionButton onClick={handleEdit} label="Edit" variant="secondary" />
              <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CustomerDetails;
```

# src/components/CreateQuoteButton.tsx

```tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

const CreateQuoteButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/quotes/new');
  };

  return (
    <Button onClick={handleClick}>
      Create New Quote
    </Button>
  );
};

export default CreateQuoteButton;
```

# src/app/page.tsx

```tsx
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Wheelchair Ramp Rental</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/rental-requests/new" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">New Rental Request</h5>
          <p className="font-normal text-gray-700">Submit a new request for a wheelchair ramp rental.</p>
        </Link>
        <Link href="/quotes" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">View Quotes</h5>
          <p className="font-normal text-gray-700">Check and manage existing quotes.</p>
        </Link>
        <Link href="/customers" className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Customer List</h5>
          <p className="font-normal text-gray-700">View and manage customer information.</p>
        </Link>
      </div>
    </div>
  );
}
```

# src/app/layout.tsx

```tsx
'use client';

import React from 'react';
import { SessionProvider } from "next-auth/react";
import Header from '@/components/Header';
import { QuoteProvider } from '@/contexts/QuoteContext';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <SessionProvider>
          <QuoteProvider>
            <Header />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <main className="py-6">
                {children}
              </main>
            </div>
          </QuoteProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
```

# src/app/favicon.ico

This is a binary file of the type: Binary

# src/app/_app.tsx

```tsx
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import '@/styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
```

# src/app/settings/page.tsx

```tsx
'use client';

import React from 'react';
import PricingVariables from '@/components/PricingVariables';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <PricingVariables />
    </div>
  );
};

export default SettingsPage;
```

# src/components/ui/Select.tsx

```tsx
import * as React from "react"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div>
        <select
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${error ? 'border-red-500' : ''}`}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
```

# src/components/ui/Input.tsx

```tsx
import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${error ? 'border-red-500' : ''}`}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
```

# src/components/ui/FormattedPhoneInput.tsx

```tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/Input';

interface FormattedPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string;
}

export const FormattedPhoneInput: React.FC<FormattedPhoneInputProps> = ({
  value,
  onChange,
  error,
  className
}) => {
  const [formattedValue, setFormattedValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const format = (val: string) => {
    const digits = val.replace(/\D/g, '');
    const chars = digits.split('');
    let formatted = '(___) ___-____';
    chars.forEach((char) => {
      formatted = formatted.replace('_', char);
    });
    return formatted;
  };

  useEffect(() => {
    setFormattedValue(format(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const selectionStart = input.selectionStart || 0; // Provide a default value
    const formatted = format(input.value);
    const digits = formatted.replace(/\D/g, '');
    
    onChange(digits);

    // Set cursor position after React updates the input
    setTimeout(() => {
      if (inputRef.current) {
        const newCursorPosition = selectionStart + (formatted.length - input.value.length);
        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    }, 0);
  };

  return (
    <Input
      ref={inputRef}
      type="tel"
      value={formattedValue}
      onChange={handleChange}
      placeholder="(___) ___-____"
      error={error}
      className={className}
    />
  );
};
```

# src/components/ui/Checkbox.tsx

```tsx
// src/components/ui/checkbox.tsx

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "../../lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
```

# src/components/ui/Button.tsx

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

# src/components/ui/AddressField.tsx

```tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Input } from './Input';

interface AddressFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
  placeholder?: string;
}

declare global {
  interface Window {
    google: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: AutocompleteOptions) => google.maps.places.Autocomplete;
        };
      };
    };
  }
}

interface AutocompleteOptions {
  types: string[];
  componentRestrictions: { country: string };
  fields: string[];
}

interface Place {
  formatted_address?: string;
}

export const AddressField: React.FC<AddressFieldProps> = ({
  value,
  onChange,
  error,
  label = 'Address',
  placeholder = 'Enter your address'
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!window.google && !isLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => setIsLoaded(true);
      document.body.appendChild(script);
    } else if (window.google && !isLoaded) {
      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['address'],
        componentRestrictions: { country: 'us' },
        fields: ['formatted_address']
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace() as Place;
        if (place.formatted_address) {
          onChange(place.formatted_address);
        }
      });
    }
  }, [isLoaded, onChange]);

  return (
    <div>
      <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <Input
        ref={inputRef}
        id="address"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        error={error}
        className="mt-1"
      />
    </div>
  );
};
```

# src/components/ui/ActionButton.tsx

```tsx
import React from 'react';
import { Button } from '@/components/ui/Button';

interface ActionButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, label, variant = 'default' }) => (
  <Button onClick={onClick} variant={variant}>
    {label}
  </Button>
);
```

# src/components/RentalRequestForm/RentalRequestForm.tsx

```tsx
'use client';

import React, { useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { RentalRequest } from '@/types';

type FormErrors = {
  [K in keyof Omit<RentalRequest, '_id' | 'createdAt'>]?: string;
};

type ChangeEventOrCustomChange = 
  | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  | { name: string; value: string | string[] };

interface RentalRequestFormProps {
  onSubmit: (data: Omit<RentalRequest, '_id' | 'createdAt'>) => Promise<void>;
}

const RentalRequestForm: React.FC<RentalRequestFormProps> = ({ onSubmit }) => {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState<Omit<RentalRequest, '_id' | 'createdAt'>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    knowRampLength: '',
    estimatedRampLength: '',
    knowRentalDuration: '',
    estimatedRentalDuration: '',
    installationTimeframe: '',
    mobilityAids: [],
    installAddress: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEventOrCustomChange) => {
    const { name, value } = 'target' in e ? e.target : e;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleNextPage = () => {
    if (validatePage(1)) {
      setPage(2);
    }
  };

  const handlePrevPage = () => {
    setPage(1);
  };

  const validatePage = (pageNum: number): boolean => {
    const newErrors: FormErrors = {};
    if (pageNum === 1) {
      if (!values.firstName) newErrors.firstName = 'First name is required';
      if (!values.lastName) newErrors.lastName = 'Last name is required';
      if (!values.email) newErrors.email = 'Email is required';
      if (!values.phone) newErrors.phone = 'Phone number is required';
    } else if (pageNum === 2) {
      // Add validation for page 2 fields here
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validatePage(2)) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
        // Handle successful submission (e.g., show success message, redirect)
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error (e.g., show error message)
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      {page === 1 && (
        <ContactInfoForm
          formData={values}
          errors={errors}
          onChange={handleChange}
          onNextPage={handleNextPage}
        />
      )}
      {page === 2 && (
        <RampDetailsForm
          formData={values}
          errors={errors}
          onChange={handleChange}
          onPrevPage={handlePrevPage}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default RentalRequestForm;
```

# src/components/RentalRequestForm/RampDetailsForm.tsx

```tsx
// src/components/RentalRequestForm/RampDetailsForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface RampDetailsFormProps {
  formData: {
    knowRampLength: string;
    estimatedRampLength: string;
    knowRentalDuration: string;
    estimatedRentalDuration: string;
    installationTimeframe: string;
    mobilityAids: string[];
    installAddress: string;
  };
  errors: {
    knowRampLength?: string;
    estimatedRampLength?: string;
    knowRentalDuration?: string;
    estimatedRentalDuration?: string;
    installationTimeframe?: string;
    mobilityAids?: string;
    installAddress?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }) => void;
  onPrevPage: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const RampDetailsForm: React.FC<RampDetailsFormProps> = ({
  formData,
  errors,
  onChange,
  onPrevPage,
  onSubmit,
  isSubmitting,
}) => {
  const handleCheckboxChange = (aid: string) => (checked: boolean) => {
    const newAids = checked
      ? [...(formData.mobilityAids || []), aid]
      : (formData.mobilityAids || []).filter((item) => item !== aid);
    onChange({ name: 'mobilityAids', value: newAids });
  };

  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">Ramp Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Do you know the length of ramp you need?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="yes"
                checked={formData.knowRampLength === 'yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRampLength"
                value="no"
                checked={formData.knowRampLength === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {formData.knowRampLength === 'yes' && (
          <div>
            <label htmlFor="estimatedRampLength" className="block text-sm font-medium">Estimated ramp length (in feet)</label>
            <Input
              id="estimatedRampLength"
              name="estimatedRampLength"
              type="number"
              value={formData.estimatedRampLength || ''}
              onChange={onChange}
              error={errors.estimatedRampLength}
              className="mt-1"
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium">Do you know how long you need the ramp?</label>
          <div className="mt-2 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="yes"
                checked={formData.knowRentalDuration === 'yes'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="knowRentalDuration"
                value="no"
                checked={formData.knowRentalDuration === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {formData.knowRentalDuration === 'yes' && (
          <div>
            <label htmlFor="estimatedRentalDuration" className="block text-sm font-medium">Estimated rental duration (in days)</label>
            <Input
              id="estimatedRentalDuration"
              name="estimatedRentalDuration"
              type="number"
              value={formData.estimatedRentalDuration || ''}
              onChange={onChange}
              error={errors.estimatedRentalDuration}
              className="mt-1"
            />
          </div>
        )}

        <div>
          <label htmlFor="installationTimeframe" className="block text-sm font-medium">How soon do you need the ramp installed?</label>
          <Select
            id="installationTimeframe"
            name="installationTimeframe"
            value={formData.installationTimeframe || ''}
            onChange={onChange}
            error={errors.installationTimeframe}
          >
            <option value="">Select timeframe</option>
            <option value="Within 24 hours">Within 24 hours</option>
            <option value="Within 2-3 days">Within 2-3 days</option>
            <option value="Within 1 week">Within 1 week</option>
            <option value="Within 2 weeks">Within 2 weeks</option>
            <option value="More than 2 weeks">More than 2 weeks</option>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium">Mobility Aids (select any that apply)</label>
          <div className="mt-2 space-y-2">
            {['Wheelchair', 'Motorized scooter', 'Walker'].map((aid) => (
              <label key={aid} className="inline-flex items-center">
                <Checkbox
                  checked={formData.mobilityAids?.includes(aid) || false}
                  onCheckedChange={handleCheckboxChange(aid)}
                />
                <span className="ml-2 text-sm">{aid}</span>
              </label>
            ))}
          </div>
        </div>
        <AddressField
          value={formData.installAddress || ''}
          onChange={(value) => onChange({ target: { name: 'installAddress', value } } as React.ChangeEvent<HTMLInputElement>)}
          error={errors.installAddress}
          label="Installation Address"
          placeholder="Enter the address where the ramp will be installed"
        />

        <div className="flex justify-between pt-4">
          <Button onClick={onPrevPage} variant="secondary">Previous</Button>
          <Button onClick={onSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </div>
    </div>
  );
};
```

# src/components/RentalRequestForm/EditRentalRequestForm.tsx

```tsx
'use client';

import React, { useState } from 'react';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { Button } from '@/components/ui/Button';
import { IRentalRequest } from '@/models';

interface RentalRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  knowRampLength: string;
  estimatedRampLength: string;
  knowRentalDuration: string;
  estimatedRentalDuration: string;
  installationTimeframe: string;
  mobilityAids: string[];
  installAddress: string;
}

// Define a new type for errors where all values are strings
type FormErrors = {
  [K in keyof RentalRequestFormData]?: string;
};

interface EditRentalRequestFormProps {
  initialData: IRentalRequest;
  onSubmit: (data: IRentalRequest) => Promise<void>;
  onCancel: () => void;
}

export const EditRentalRequestForm: React.FC<EditRentalRequestFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<RentalRequestFormData>({
    firstName: initialData.firstName,
    lastName: initialData.lastName,
    email: initialData.email,
    phone: initialData.phone,
    knowRampLength: initialData.knowRampLength,
    estimatedRampLength: initialData.estimatedRampLength || '',
    knowRentalDuration: initialData.knowRentalDuration,
    estimatedRentalDuration: initialData.estimatedRentalDuration || '',
    installationTimeframe: initialData.installationTimeframe,
    mobilityAids: initialData.mobilityAids,
    installAddress: initialData.installAddress,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }
  ) => {
    const { name, value } = 'target' in e ? e.target : e;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    // Implement form validation logic here
    // For example:
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    // Add more validation as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData as IRentalRequest);
      } catch (error) {
        console.error('Error updating rental request:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <ContactInfoForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onNextPage={() => {}} // Not used in edit mode
      />
      <RampDetailsForm
        formData={formData}
        errors={errors}
        onChange={handleInputChange}
        onPrevPage={() => {}} // Not used in edit mode
        onSubmit={() => {}} // Not used in edit mode
        isSubmitting={isSubmitting}
      />
      <div className="flex justify-between">
        <Button type="button" onClick={onCancel} variant="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Updating...' : 'Update Request'}
        </Button>
      </div>
    </form>
  );
};
```

# src/components/RentalRequestForm/ContactInfoForm.tsx

```tsx
// src/components/RentalRequestForm/ContactInfoForm.tsx

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FormattedPhoneInput } from '@/components/ui/FormattedPhoneInput';

interface ContactInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextPage: () => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  formData,
  errors,
  onChange,
  onNextPage
}) => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName || ''}
            onChange={onChange}
            error={errors.firstName}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName || ''}
            onChange={onChange}
            error={errors.lastName}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email || ''}
            onChange={onChange}
            error={errors.email}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
          <FormattedPhoneInput
            value={formData.phone || ''}
            onChange={(value) => onChange({ target: { name: 'phone', value } } as React.ChangeEvent<HTMLInputElement>)}
            error={errors.phone}
            className="mt-1"
          />
        </div>
      </div>
      <div className="pt-4">
        <Button onClick={onNextPage} className="w-full">Next</Button>
      </div>
    </div>
  );
};
```

# src/components/RentalRequestForm/ConfirmationPage.tsx

```tsx
import React from 'react';
import { Button } from '../ui/Button';

interface ConfirmationPageProps {
  onStartOver: () => void;
}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onStartOver }) => {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">Thank You!</h2>
      <p>
        Your rental request has been successfully submitted. We appreciate your interest in our wheelchair ramp rental service.
      </p>
      <p>
        Our team will review your request and reach out to you shortly with more information and next steps.
      </p>
      <p>
        If you have any immediate questions or concerns, please don&apos;t hesitate to contact us directly.
      </p>
      <div className="pt-4">
        <Button onClick={onStartOver} className="w-full">Submit Another Request</Button>
      </div>
    </div>
  );
};
```

# src/app/rental-requests/page.tsx

```tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { api } from '@/utils/api';
import { RentalRequest } from '@/types';

const RentalRequestCard: React.FC<{ request: RentalRequest }> = ({ request }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h3 className="text-lg font-semibold mb-2">{request.firstName} {request.lastName}</h3>
    <p className="text-sm text-gray-600 mb-1">Email: {request.email}</p>
    <p className="text-sm text-gray-600 mb-1">Phone: {request.phone}</p>
    <p className="text-sm text-gray-600 mb-1">Installation: {request.installationTimeframe}</p>
    <p className="text-sm text-gray-600 mb-1">Address: {request.installAddress}</p>
    <p className="text-sm text-gray-600 mb-4">Submitted: {new Date(request.createdAt).toLocaleDateString()}</p>
    <Link href={`/rental-requests/${request._id}`} passHref>
      <Button variant="secondary" className="w-full">View Details</Button>
    </Link>
  </div>
);

const RentalRequestsPage = () => {
  const [rentalRequests, setRentalRequests] = useState<RentalRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRentalRequests = async () => {
      try {
        const response = await api.get<RentalRequest[]>('/rental-requests');
        if (response.data) {
          setRentalRequests(Array.isArray(response.data) ? response.data : []);
        } else if (response.error) {
          setError(response.error);
        }
      } catch (err) {
        setError('Failed to load rental requests. Please try again later.');
        console.error('Error fetching rental requests:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalRequests();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Rental Requests</h1>
      <div className="mb-6">
        <Link href="/rental-requests/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Rental Request
        </Link>
      </div>
      {isLoading ? (
        <p>Loading rental requests...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : rentalRequests.length === 0 ? (
        <p>No rental requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rentalRequests.map((request) => (
            <RentalRequestCard key={request._id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalRequestsPage;
```

# src/app/quotes/page.tsx

```tsx
// src/app/quotes/page.tsx

import React from 'react';
import QuoteLayout from '@/components/QuoteLayout';
import QuoteList from '@/components/QuoteList';
import CreateQuoteButton from '@/components/CreateQuoteButton';

export default function Quotes() {
  return (
    <QuoteLayout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Quotes</h1>
          <CreateQuoteButton />
        </div>
        <QuoteList />
      </div>
    </QuoteLayout>
  );
}
```

# src/app/login/page.tsx

```tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
```

# src/app/fonts/GeistVF.woff

This is a binary file of the type: Binary

# src/app/fonts/GeistMonoVF.woff

This is a binary file of the type: Binary

# src/app/customers/page.tsx

```tsx
import React from 'react';
import CustomerList from '@/components/CustomerList';

export default function Customers() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <CustomerList />
    </div>
  );
}
```

# src/app/rental-requests/new/page.tsx

```tsx
'use client'; // Add this line to make it a Client Component

import React from 'react';
import RentalRequestForm from '@/components/RentalRequestForm/RentalRequestForm';
import { RentalRequest } from '@/types';

export default function NewRentalRequest() {
  const handleSubmit = async (data: Omit<RentalRequest, '_id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/rental-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit rental request');
      }

      const result = await response.json();
      console.log('Rental request submitted:', result);
      // You can add a success message or redirect here
    } catch (error) {
      console.error('Error submitting rental request:', error);
      // You can add an error message here
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">New Rental Request</h1>
      <RentalRequestForm onSubmit={handleSubmit} />
    </div>
  );
}
```

# src/app/rental-requests/[id]/page.tsx

```tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ActionButton } from '@/components/ui/ActionButton';
import { IRentalRequest } from '@/models';

export default function RentalRequestDetails({ params }: { params: { id: string } }) {
  const [request, setRequest] = useState<IRentalRequest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRentalRequest = async () => {
      try {
        const response = await fetch(`/api/rental-requests/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch rental request');
        }
        const data = await response.json();
        setRequest(data.data);
      } catch (err) {
        setError('Failed to load rental request. Please try again later.');
        console.error('Error fetching rental request:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalRequest();
  }, [params.id]);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this rental request?')) {
      try {
        const response = await fetch(`/api/rental-requests/${params.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete rental request');
        }
        router.push('/rental-requests');
      } catch (err) {
        console.error('Error deleting rental request:', err);
        alert('Failed to delete rental request. Please try again.');
      }
    }
  };

  const handleCreateCustomer = async () => {
    if (!request) return;

    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: request.firstName,
          lastName: request.lastName,
          email: request.email,
          phoneNumber: request.phone,
          installAddress: request.installAddress,
          mobilityAids: request.mobilityAids || [],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer');
      }

      const result = await response.json();
      console.log('Customer creation response:', result);
      if (result.data && result.data.id) {
        router.push(`/customers/${result.data.id}`);
      } else {
        throw new Error('Customer ID not returned from server');
      }
    } catch (err) {
      console.error('Error creating customer:', err);
      alert('Failed to create customer. Please try again.');
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!request) return <p>Rental request not found.</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Rental Request Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{request.firstName} {request.lastName}</h2>
        <p><strong>Email:</strong> {request.email}</p>
        <p><strong>Phone:</strong> {request.phone}</p>
        <p><strong>Installation Timeframe:</strong> {request.installationTimeframe}</p>
        <p><strong>Installation Address:</strong> {request.installAddress}</p>
        <p><strong>Ramp Length:</strong> {request.knowRampLength === 'yes' ? `${request.estimatedRampLength} feet` : 'Unknown'}</p>
        <p><strong>Rental Duration:</strong> {request.knowRentalDuration === 'yes' ? `${request.estimatedRentalDuration} days` : 'Unknown'}</p>
        <p><strong>Mobility Aids:</strong> {request.mobilityAids && request.mobilityAids.length > 0 ? request.mobilityAids.join(', ') : 'None specified'}</p>
        <p><strong>Submitted:</strong> {request.createdAt ? new Date(request.createdAt).toLocaleString() : 'Unknown'}</p>
      </div>
      <div className="flex justify-between mt-6">
        <ActionButton onClick={handleCreateCustomer} label="Create Customer" variant="default" />
        <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
      </div>
    </div>
  );
}
```

# src/app/quotes/[id]/page.tsx

```tsx
// src/app/quotes/[id]/page.tsx

import React from 'react';
import { QuoteProvider } from '@/contexts/QuoteContext';
import QuoteDetails from '@/components/QuoteDetails';

export default function QuotePage({ params }: { params: { id: string } }) {
  return (
    <QuoteProvider>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Quote Details</h1>
        <QuoteDetails id={params.id} />
      </div>
    </QuoteProvider>
  );
}
```

# src/app/quotes/new/page.tsx

```tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerDetails from '@/components/CustomerDetails';
import RampConfigurationV2 from '@/components/RampConfiguration';
import PricingComponent from '@/components/PricingComponent';
import { Customer, RampComponent } from '@/types';

const NewQuotePage: React.FC = () => {
  const router = useRouter();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);
  const [totalLength, setTotalLength] = useState(0);
  const [installPrice, setInstallPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [monthlyRate, setMonthlyRate] = useState(0);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleRampConfigurationChange = (components: RampComponent[], length: number) => {
    setRampComponents(components);
    setTotalLength(length);
  };

  const handlePriceCalculated = (install: number, delivery: number, monthly: number) => {
    setInstallPrice(install);
    setDeliveryPrice(delivery);
    setMonthlyRate(monthly);
  };

  const handleCreateQuote = async () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }

    try {
      const quoteData = {
        customer: selectedCustomer._id,
        installPrice,
        deliveryPrice,
        monthlyRate,
        components: rampComponents,
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        sentAt: null,
        signedAt: null,
        paymentStatus: 'PENDING',
      };

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create quote');
      }

      await response.json();
      router.push('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
      alert('Failed to create quote. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Quote</h1>
      <CustomerSearch onSelectCustomer={handleSelectCustomer} />
      {selectedCustomer && (
        <div className="mt-6 mb-6">
          <CustomerDetails 
            customer={selectedCustomer} 
            showActions={false}
            onCustomerUpdate={(updatedCustomer) => setSelectedCustomer(updatedCustomer)}
          />
        </div>
      )}
      <RampConfigurationV2 onConfigurationChange={handleRampConfigurationChange} />
      {selectedCustomer && (
        <PricingComponent 
          rampComponents={rampComponents} 
          totalLength={totalLength} 
          installAddress={selectedCustomer.installAddress || ''}
          onPriceCalculated={handlePriceCalculated}
        />
      )}
      <button 
        onClick={handleCreateQuote}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Create Quote
      </button>
    </div>
  );
};

export default NewQuotePage;
```

# src/app/api/settings/route.ts

```ts
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
```

# src/app/api/send-quote/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';

export const POST = createApiHandler<{ message: string }>(async (request) => {
  const { quoteId } = await request.json();
  const quote = await Quote.findById(quoteId).populate('customer');
  
  if (!quote) {
    throw new Error('Quote not found');
  }

  // TODO: Implement email sending logic
  // TODO: Implement Stripe payment link generation
  // TODO: Implement esignatures.io agreement link generation

  quote.status = 'SENT';
  quote.sentAt = new Date();
  await quote.save();

  return { data: { message: 'Quote sent successfully' } };
});
```

# src/app/api/rental-requests/route.ts

```ts
import { NextRequest, NextResponse } from 'next/server';
import { RentalRequest } from '@/models';

const allowedOrigins = ['https://form.samedayramps.com', 'https://samedayramps.com'];

function setHeaders(response: NextResponse, origin: string) {
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
}

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  
  if (allowedOrigins.includes(origin)) {
    const response = new NextResponse(null, { status: 204 });
    setHeaders(response, origin);
    return response;
  }
  return new NextResponse(null, { status: 204 });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  
  try {
    const body = await request.json();
    console.log('Received body:', body);

    // Create a new rental request without validation
    const newRentalRequest = await RentalRequest.create(body);
    
    const response = NextResponse.json({ data: newRentalRequest.toObject() }, { status: 201 });
    
    if (allowedOrigins.includes(origin)) {
      setHeaders(response, origin);
    }
    
    return response;
  } catch (error) {
    console.error('Error in POST /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    
    if (allowedOrigins.includes(origin)) {
      setHeaders(response, origin);
    }
    
    return response;
  }
}
export async function GET(request: NextRequest) {
  const origin = request.headers.get('origin') || '';

  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    
    const response = NextResponse.json({ data: rentalRequests.map(request => request.toObject()) }, { status: 200 });
    
    if (allowedOrigins.includes(origin)) {
      setHeaders(response, origin);
    }
    
    return response;
  } catch (error) {
    console.error('Error in GET /api/rental-requests:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    const response = NextResponse.json({ error: errorMessage }, { status: 500 });
    
    if (allowedOrigins.includes(origin)) {
      setHeaders(response, origin);
    }
    
    return response;
  }
}
```

# src/app/api/register/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { clientPromise } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export const POST = createApiHandler<{ message: string; userId: string }>(async (request) => {
  const { username, email, password } = await request.json();

  if (!username || !email || !password) {
    throw new Error('Missing required fields');
  }

  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection('users').findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error('Username or email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection('users').insertOne({
    username,
    email,
    password: hashedPassword,
  });

  return { 
    data: { 
      message: 'User registered successfully', 
      userId: result.insertedId.toString() 
    } 
  };
});
```

# src/app/api/quotes/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';
import { Quote as QuoteType, QuoteCreateRequest } from '@/types';

export const GET = createApiHandler<QuoteType[]>(async () => {
  const quotes = await Quote.find().populate('customer').sort({ createdAt: -1 });
  return { data: quotes };
});

export const POST = createApiHandler<QuoteType>(async (request) => {
  const data: QuoteCreateRequest = await request.json();
  
  if (!data.customer || !data.installPrice || !data.deliveryPrice || !data.monthlyRate || !data.components) {
    throw new Error('Missing required fields');
  }

  const quote = await Quote.create(data);
  const populatedQuote = await Quote.findById(quote._id).populate('customer');
  
  if (!populatedQuote) {
    throw new Error('Failed to create quote');
  }

  return { data: populatedQuote };
});
```

# src/app/api/distance/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Client } from '@googlemaps/google-maps-services-js';

const client = new Client({});

export const GET = createApiHandler<{ distance: number }>(async (request) => {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('GOOGLE_MAPS_API_KEY is not set');
  }

  const response = await client.distancematrix({
    params: {
      origins: [origin],
      destinations: [destination],
      key: apiKey,
    },
  });

  if (response.data.rows[0].elements[0].status !== 'OK') {
    throw new Error('Unable to calculate distance');
  }

  const distance = response.data.rows[0].elements[0].distance.value / 1609.34; // Convert meters to miles
  return { data: { distance } };
});
```

# src/app/api/customers/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType, CustomerCreateRequest } from '@/types';

export const POST = createApiHandler<CustomerType>(async (request) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await Customer.create(data);
  return { data: customer.toObject() };
});

export const GET = createApiHandler<CustomerType[]>(async () => {
  const customers = await Customer.find().sort({ createdAt: -1 });
  return { data: customers.map(customer => customer.toObject()) };
});
```

# src/app/customers/[id]/page.tsx

```tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

export default function CustomerDetails({ params }: { params: { id: string } }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [editedCustomer, setEditedCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`/api/customers/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch customer');
        }
        const data = await response.json();
        setCustomer(data.data);
        setEditedCustomer(data.data);
      } catch (err) {
        setError('Failed to load customer. Please try again later.');
        console.error('Error fetching customer:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomer();
  }, [params.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    if (!editedCustomer) return;

    try {
      const response = await fetch(`/api/customers/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCustomer),
      });

      if (!response.ok) {
        throw new Error('Failed to update customer');
      }

      const updatedCustomer = await response.json();
      setCustomer(updatedCustomer.data);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating customer:', err);
      alert('Failed to update customer. Please try again.');
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      try {
        const response = await fetch(`/api/customers/${params.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete customer');
        }
        router.push('/customers');
      } catch (err) {
        console.error('Error deleting customer:', err);
        alert('Failed to delete customer. Please try again.');
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedCustomer) return;
    setEditedCustomer({
      ...editedCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (value: string) => {
    if (!editedCustomer) return;
    setEditedCustomer({
      ...editedCustomer,
      installAddress: value,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!customer) return <p>Customer not found.</p>;

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Customer Details</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {isEditing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(); }} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <Input
                id="firstName"
                name="firstName"
                value={editedCustomer?.firstName || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <Input
                id="lastName"
                name="lastName"
                value={editedCustomer?.lastName || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                name="email"
                value={editedCustomer?.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={editedCustomer?.phoneNumber || ''}
                onChange={handleInputChange}
              />
            </div>
            <AddressField
              value={editedCustomer?.installAddress || ''}
              onChange={handleAddressChange}
              label="Installation Address"
              placeholder="Enter customer's installation address"
            />
            <div className="flex justify-between">
              <Button type="button" onClick={handleCancelEdit} variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">{customer.firstName} {customer.lastName}</h2>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phoneNumber}</p>
            <p><strong>Installation Address:</strong> {customer.installAddress}</p>
            <p><strong>Mobility Aids:</strong> {customer.mobilityAids.join(', ')}</p>
            <div className="mt-6 flex justify-between">
              <ActionButton onClick={handleEdit} label="Edit" variant="secondary" />
              <ActionButton onClick={handleDelete} label="Delete" variant="destructive" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
```

# src/app/api/rental-requests/[id]/route.ts

```ts
import { NextRequest } from 'next/server';
import { createApiHandler } from '@/lib/apiHandler';
import { RentalRequest } from '@/models';
import { RentalRequest as RentalRequestType, RentalRequestCreateRequest, ApiResponse } from '@/types';
import { corsMiddleware } from '@/lib/cors';

export async function OPTIONS(req: NextRequest) {
  return corsMiddleware(req);
}

export const GET = createApiHandler<RentalRequestType>(async (_request: NextRequest, { params }): Promise<ApiResponse<RentalRequestType>> => {
  const rentalRequest = await RentalRequest.findById(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: rentalRequest.toObject() };
});

export const PUT = createApiHandler<RentalRequestType>(async (request: NextRequest, { params }): Promise<ApiResponse<RentalRequestType>> => {
  const data: RentalRequestCreateRequest = await request.json();
  const updatedRentalRequest = await RentalRequest.findByIdAndUpdate(params.id, data, { new: true });
  if (!updatedRentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: updatedRentalRequest.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }): Promise<ApiResponse<{ message: string }>> => {
  const rentalRequest = await RentalRequest.findByIdAndDelete(params.id);
  if (!rentalRequest) {
    return { error: 'Rental request not found' };
  }
  return { data: { message: 'Rental request deleted successfully' } };
});
```

# src/app/api/quotes/[id]/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Quote } from '@/models';
import { Quote as QuoteType, QuoteCreateRequest } from '@/types';
import { NextRequest } from 'next/server';

export const GET = createApiHandler<QuoteType>(async (_request: NextRequest, { params }) => {
  const quote = await Quote.findById(params.id).populate('customer');
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: quote.toObject() };
});

export const PUT = createApiHandler<QuoteType>(async (request: NextRequest, { params }) => {
  const data: QuoteCreateRequest = await request.json();
  const quote = await Quote.findByIdAndUpdate(params.id, data, { new: true }).populate('customer');
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: quote.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request: NextRequest, { params }) => {
  const quote = await Quote.findByIdAndDelete(params.id);
  if (!quote) {
    throw new Error('Quote not found');
  }
  return { data: { message: 'Quote deleted successfully' } };
});
```

# src/app/api/customers/[id]/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType, CustomerCreateRequest } from '@/types';

export const GET = createApiHandler<CustomerType>(async (_request, { params }) => {
  const customer = await Customer.findById(params.id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: customer.toObject() };
});

export const PUT = createApiHandler<CustomerType>(async (request, { params }) => {
  const data: CustomerCreateRequest = await request.json();
  const customer = await Customer.findByIdAndUpdate(params.id, data, { new: true });
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: customer.toObject() };
});

export const DELETE = createApiHandler<{ message: string }>(async (_request, { params }) => {
  const customer = await Customer.findByIdAndDelete(params.id);
  if (!customer) {
    throw new Error('Customer not found');
  }
  return { data: { message: 'Customer deleted successfully' } };
});
```

# src/app/api/customers/search/route.ts

```ts
import { createApiHandler } from '@/lib/apiHandler';
import { Customer } from '@/models';
import { Customer as CustomerType } from '@/types';

export const GET = createApiHandler<CustomerType[]>(async (request) => {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    throw new Error('Search term is required');
  }

  const customers = await Customer.find({
    $or: [
      { firstName: { $regex: term, $options: 'i' } },
      { lastName: { $regex: term, $options: 'i' } },
      { email: { $regex: term, $options: 'i' } },
    ]
  }).select('firstName lastName email phoneNumber installAddress mobilityAids').limit(10);

  return { data: customers };
});
```

# src/app/api/auth/[...nextauth]/route.ts

```ts
import NextAuth from "next-auth";
import { authOptions } from "./auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```

# src/app/api/auth/[...nextauth]/auth.ts

```ts
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
```

