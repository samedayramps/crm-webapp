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
    "@next-auth/mongodb-adapter": "^1.1.3",
    "@prisma/client": "^5.19.1",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@stripe/stripe-js": "^4.5.0",
    "@tailwindcss/forms": "^0.5.9",
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

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

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

# src/types/quote.ts

```ts
export interface Quote {
  _id: string;
  customer: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  };
  rentalRequest: string;
  totalPrice: number;
  components: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    _id: string;
  }>;
  status: string;
  createdAt: string;
  sentAt: string | null;
  signedAt: string | null;
  paymentStatus: string;
  updatedAt: string;
  __v: number;
}
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

export interface Customer {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    installAddress?: string; // Optional property
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
  
  export interface Quote {
    _id: string;
    customer: Customer;
    rentalRequest: string;
    totalPrice: number;
    components: Array<{
      id: string;
      name: string;
      quantity: number;
      price: number;
    }>;
    status: string;
    createdAt: string;
    sentAt: string | null;
    signedAt: string | null;
    paymentStatus: string;
    updatedAt: string;
  }
  
  export interface ApiResponse<T> {
    data?: T;
    error?: string;
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
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  knowRampLength: { type: String, required: true },
  estimatedRampLength: { type: String },
  knowRentalDuration: { type: String, required: true },
  estimatedRentalDuration: { type: String },
  installationTimeframe: { type: String, required: true },
  mobilityAids: [{ type: String }],
  installAddress: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const QuoteSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  rentalRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'RentalRequest' },
  totalPrice: { type: Number, required: true },
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
  rentalRequest: mongoose.Types.ObjectId | IRentalRequest;
  totalPrice: number;
  components: Record<string, unknown>; // Changed from Record<string, any>
  status: string;
  createdAt: Date;
  updatedAt: Date;
  sentAt?: Date;
  signedAt?: Date;
  paymentStatus: string;
}

export const Customer = mongoose.models.Customer || mongoose.model<ICustomer>('Customer', CustomerSchema);
export const RampDetails = mongoose.models.RampDetails || mongoose.model<IRampDetails>('RampDetails', RampDetailsSchema);
export const RentalRequest = mongoose.models.RentalRequest || mongoose.model<IRentalRequest>('RentalRequest', RentalRequestSchema);
export const Quote = mongoose.models.Quote || mongoose.model<IQuote>('Quote', QuoteSchema);

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

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(uri, options);
}
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

# src/contexts/QuoteContext.tsx

```tsx
'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { api } from '@/utils/api';
import { Quote, ApiResponse } from '@/types';

interface QuoteContextType {
  quotes: Quote[];
  loading: boolean;
  error: string | null;
  fetchQuotes: () => Promise<void>;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);
    const response = await api.get<Quote[]>('/quotes');
    if (response.data) {
      setQuotes(Array.isArray(response.data) ? response.data : []);
    } else if (response.error) {
      setError(response.error);
    }
    setLoading(false);
  };

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

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <QuoteContext.Provider value={{ quotes, loading, error, fetchQuotes, getQuote, addQuote, updateQuote, deleteQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};
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

import React, { useState } from 'react';

interface RampComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

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

interface RampConfigurationV2Props {
  onConfigurationChange: (components: RampComponent[]) => void;
}

const RampConfigurationV2: React.FC<RampConfigurationV2Props> = ({ onConfigurationChange }) => {
  const [components, setComponents] = useState<RampComponent[]>([]);

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
          price: 0,
        };
        const updatedComponents = [...components, newComponent];
        setComponents(updatedComponents);
        onConfigurationChange(updatedComponents);
      }
      e.target.value = 'Select a component'; // Reset dropdown to default option
    }
  };

  const updateQuantity = (id: string, change: number) => {
    const updatedComponents = components.map(component => 
      component.id === id ? { ...component, quantity: Math.max(0, component.quantity + change) } : component
    ).filter(component => component.quantity > 0);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents);
  };

  const removeComponent = (id: string) => {
    const updatedComponents = components.filter(component => component.id !== id);
    setComponents(updatedComponents);
    onConfigurationChange(updatedComponents);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-4">Ramp Configuration</h2>
      
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

      {components.length > 0 && (
        <div>
          <h3 className="font-bold mb-2">Selected Components:</h3>
          <ul>
            {components.map((component) => (
              <li key={component.id} className="flex items-center justify-between mb-2">
                <span>{component.name}</span>
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
import { Quote } from '@/types';

const QuoteList: React.FC = () => {
  const { quotes, loading, error } = useQuoteContext();

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quotes || quotes.length === 0) {
    return <div>No quotes available.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quotes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {quotes.map((quote: Quote) => (
            <tr key={quote._id}>
              <td className="px-6 py-4 whitespace-nowrap">{quote.customer.firstName} {quote.customer.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">${quote.totalPrice.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{quote.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(quote.createdAt).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/quotes/${quote._id}`} className="text-indigo-600 hover:text-indigo-900">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteList;
```

# src/components/QuoteDetails.tsx

```tsx
// src/components/QuoteDetails.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuoteContext } from '@/contexts/QuoteContext';
import { Quote } from '@/types';
import { api } from '@/utils/api';

interface QuoteDetailsProps {
  id: string;
}

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ id }) => {
  const { updateQuote, deleteQuote } = useQuoteContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuote, setEditedQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      const response = await api.get<Quote>(`/quotes/${id}`);
      if (response.data) {
        setEditedQuote(response.data);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchQuote();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!editedQuote) {
    return <div>Quote not found</div>;
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (editedQuote) {
      const response = await updateQuote(id, editedQuote);
      if (response.error) {
        setError(response.error);
      } else {
        setIsEditing(false);
      }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedQuote(prev => prev ? { ...prev, [name]: value } : null);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Quote Details</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Customer</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
                <input
                  type="text"
                  name="customerName"
                  value={`${editedQuote.customer.firstName} ${editedQuote.customer.lastName}`}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  disabled
                />
              ) : (
                `${editedQuote.customer.firstName} ${editedQuote.customer.lastName}`
              )}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Total Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
                <input
                  type="number"
                  name="totalPrice"
                  value={editedQuote.totalPrice}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                `$${editedQuote.totalPrice.toFixed(2)}`
              )}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Status</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {isEditing ? (
                <input
                  type="text"
                  name="status"
                  value={editedQuote.status}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              ) : (
                editedQuote.status
              )}
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

# src/components/PricingComponent.tsx

```tsx
import React from 'react';

const PricingComponent: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Pricing</h2>
      <p>This is a placeholder for the pricing component.</p>
      {/* TODO: Implement actual pricing calculation and display */}
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
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-blue-600 dark:bg-blue-800 text-white">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ul className="flex flex-wrap space-x-4">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/rental-requests" className="hover:underline">Rental Requests</Link></li>
        <li><Link href="/quotes" className="hover:underline">Quotes</Link></li>
        <li><Link href="/customers" className="hover:underline">Customers</Link></li>
      </ul>
    </nav>
  </header>
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
        <ul className="mt-2 border rounded-md">
          {searchResults.map(customer => (
            <li 
              key={customer._id} 
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelectCustomer(customer)}
            >
              <div>{customer.firstName} {customer.lastName}</div>
              <div className="text-sm text-gray-600">{customer.email}</div>
              <div className="text-sm text-gray-600">{customer.installAddress}</div>
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

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Customer } from '@/types';
import { api } from '@/utils/api';
import { ActionButton } from '@/components/ui/ActionButton';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AddressField } from '@/components/ui/AddressField';

interface CustomerDetailsProps {
  id: string;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ id }) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCustomer = async () => {
      setIsLoading(true);
      const response = await api.get<Customer>(`/customers/${id}`);
      if (response.data) {
        setCustomer(response.data);
        setEditedCustomer(response.data);
      } else if (response.error) {
        setError(response.error);
      }
      setIsLoading(false);
    };

    fetchCustomer();
  }, [id]);

  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedCustomer(customer);
  };

  const handleSaveEdit = async () => {
    if (!editedCustomer) return;

    const response = await api.put<Customer>(`/customers/${id}`, editedCustomer);
    if (response.data) {
      setCustomer(response.data);
      setIsEditing(false);
    } else if (response.error) {
      setError(response.error);
    }
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this customer?')) {
      const response = await api.delete<void>(`/customers/${id}`);
      if (!response.error) {
        router.push('/customers');
      } else {
        setError(response.error);
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
              label="Address"
              placeholder="Enter customer's address"
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
};

export default CustomerDetails;
```

# src/components/CustomerCard.tsx

```tsx
import React from 'react';
import { Customer } from '@/types';

interface CustomerCardProps {
  customer: Customer;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer }) => {
  return (
    <div className="border p-4 rounded-md">
      <h2 className="text-xl font-bold">{customer.firstName} {customer.lastName}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phoneNumber}</p>
      {customer.installAddress && <p>Install Address: {customer.installAddress}</p>}
      <p>Mobility Aids: {customer.mobilityAids.join(', ')}</p>
    </div>
  );
};

export default CustomerCard;
```

# src/components/CreateQuoteButton.tsx

```tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { useQuoteContext } from '@/contexts/QuoteContext';

const CreateQuoteButton: React.FC = () => {
  const router = useRouter();
  const { addQuote } = useQuoteContext();

  const handleClick = async () => {
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: 'placeholder', // Replace this with an actual customer ID when available
          totalPrice: 0,
          components: [],
          status: 'DRAFT',
          createdAt: new Date().toISOString(),
          sentAt: null,
          signedAt: null,
          paymentStatus: 'PENDING',
          // Remove the rentalRequest field if it's not required at this stage
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create quote');
      }

      const newQuote = await response.json();
      await addQuote(newQuote.data);
      router.push(`/quotes/${newQuote.data._id}`);
    } catch (error) {
      console.error('Failed to create quote:', error);
      // Handle error (e.g., show error message to user)
    }
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
import React from 'react';
import '@/styles/globals.css';
import SessionWrapper from '../components/SessionWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Wheelchair Ramp Rental',
  description: 'Rent wheelchair ramps for your needs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
```

# src/app/favicon.ico

This is a binary file of the type: Binary

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
import { QuoteProvider } from '@/contexts/QuoteContext';
import QuoteList from '@/components/QuoteList';
import CreateQuoteButton from '@/components/CreateQuoteButton';

export default function Quotes() {
  return (
    <QuoteProvider>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Quotes</h1>
          <CreateQuoteButton />
        </div>
        <QuoteList />
      </div>
    </QuoteProvider>
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
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const result = await signIn('credentials', {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        alert(result.error);
      } else {
        router.push('/');
      }
    } else {
      // Registration logic
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        alert('Registration successful! Please log in.');
        setIsLogin(true);
      } else {
        const data = await response.json();
        alert(data.message || 'Registration failed');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          {isLogin ? 'Login to your account' : 'Create an account'}
        </h3>
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
            {!isLogin && (
              <div className="mt-4">
                <label className="block" htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}
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
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">
                {isLogin ? 'Login' : 'Register'}
              </button>
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
```

# src/components/RentalRequestForm/RentalRequestForm.tsx

```tsx
'use client';

import React from 'react';
import { useForm } from '@/hooks/useForm';
import { api } from '@/utils/api';
import { RentalRequest } from '@/types';
import { ContactInfoForm } from './ContactInfoForm';
import { RampDetailsForm } from './RampDetailsForm';
import { ConfirmationPage } from './ConfirmationPage';

const initialState: Omit<RentalRequest, '_id' | 'createdAt'> = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  knowRampLength: 'no',
  estimatedRampLength: '',
  knowRentalDuration: 'no',
  estimatedRentalDuration: '',
  installationTimeframe: '',
  mobilityAids: [],
  installAddress: '',
};

const validateForm = (values: Omit<RentalRequest, '_id' | 'createdAt'>) => {
  const errors: { [key: string]: string } = {};
  if (!values.firstName) errors.firstName = 'First name is required';
  if (!values.lastName) errors.lastName = 'Last name is required';
  if (!values.email) errors.email = 'Email is required';
  // Add more validation as needed
  return errors;
};

const RentalRequestForm: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { values, errors, isSubmitting, handleChange, handleSubmit, setValues } = useForm(initialState, validateForm);

  const handleNextPage = () => {
    if (Object.keys(validateForm(values)).length === 0) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    setPage(prev => prev - 1);
  };

  const onSubmit = async (formData: Omit<RentalRequest, '_id' | 'createdAt'>) => {
    const response = await api.post<RentalRequest>('/rental-requests', formData);
    if (response.data) {
      setPage(3); // Move to confirmation page
    } else if (response.error) {
      console.error('Error submitting form:', response.error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleStartOver = () => {
    setPage(1);
    setValues(initialState);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {page < 3 ? (
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="text-gray-800 dark:text-gray-100">
            {page === 1 && (
              <ContactInfoForm
                values={values}
                errors={errors}
                onChange={handleChange}
                onNextPage={handleNextPage}
              />
            )}
            {page === 2 && (
              <RampDetailsForm
                values={values}
                errors={errors}
                onChange={handleChange}
                onPrevPage={handlePrevPage}
                onSubmit={() => handleSubmit(onSubmit)}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
          {errors.submit && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Error: {errors.submit}
            </div>
          )}
        </form>
      ) : (
        <ConfirmationPage onStartOver={handleStartOver} />
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
import { RentalRequest } from '@/types';

interface RampDetailsFormProps {
  values: Partial<RentalRequest>;
  errors: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { name: string; value: string | string[] }) => void;
  onPrevPage: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const RampDetailsForm: React.FC<RampDetailsFormProps> = ({
  values,
  errors,
  onChange,
  onPrevPage,
  onSubmit,
  isSubmitting,
}) => {
  const handleCheckboxChange = (aid: string) => (checked: boolean) => {
    const newAids = checked
      ? [...(values.mobilityAids || []), aid]
      : (values.mobilityAids || []).filter((item) => item !== aid);
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
                checked={values.knowRampLength === 'yes'}
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
                checked={values.knowRampLength === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {values.knowRampLength === 'yes' && (
          <div>
            <label htmlFor="estimatedRampLength" className="block text-sm font-medium">Estimated ramp length (in feet)</label>
            <Input
              id="estimatedRampLength"
              name="estimatedRampLength"
              type="number"
              value={values.estimatedRampLength || ''}
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
                checked={values.knowRentalDuration === 'yes'}
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
                checked={values.knowRentalDuration === 'no'}
                onChange={onChange}
                className="form-radio"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        {values.knowRentalDuration === 'yes' && (
          <div>
            <label htmlFor="estimatedRentalDuration" className="block text-sm font-medium">Estimated rental duration (in days)</label>
            <Input
              id="estimatedRentalDuration"
              name="estimatedRentalDuration"
              type="number"
              value={values.estimatedRentalDuration || ''}
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
            value={values.installationTimeframe || ''}
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
                  checked={values.mobilityAids?.includes(aid) || false}
                  onCheckedChange={handleCheckboxChange(aid)}
                />
                <span className="ml-2 text-sm">{aid}</span>
              </label>
            ))}
          </div>
        </div>
        <AddressField
          value={values.installAddress || ''}
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
  const [errors, setErrors] = useState<Partial<RentalRequestFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (name: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RentalRequestFormData> = {};
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
import { RentalRequest } from '@/types';

interface ContactInfoFormProps {
  values: Partial<RentalRequest>;
  errors: { [key: string]: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNextPage: () => void;
}

export const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  values,
  errors,
  onChange,
  onNextPage,
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
            value={values.firstName || ''}
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
            value={values.lastName || ''}
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
            value={values.email || ''}
            onChange={onChange}
            error={errors.email}
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
          <FormattedPhoneInput
            value={values.phone || ''}
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

# src/app/fonts/GeistVF.woff

This is a binary file of the type: Binary

# src/app/fonts/GeistMonoVF.woff

This is a binary file of the type: Binary

# src/app/rental-requests/new/page.tsx

```tsx
import React from 'react';
import RentalRequestForm from '@/components/RentalRequestForm/RentalRequestForm';

export default function NewRentalRequest() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">New Rental Request</h1>
      <RentalRequestForm />
    </div>
  );
}
```

# src/app/quotes/new/page.tsx

```tsx
'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuoteContext, QuoteProvider } from '@/contexts/QuoteContext';
import CustomerSearch from '@/components/CustomerSearch';
import CustomerCard from '@/components/CustomerCard';
import RampConfigurationV2 from '@/components/RampConfiguration';
import { Customer } from '@/types';

interface RampComponent {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

const NewQuotePageContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addQuote } = useQuoteContext();
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [rampComponents, setRampComponents] = useState<RampComponent[]>([]);

  // Check if a customer ID was provided in the URL
  React.useEffect(() => {
    const customerId = searchParams.get('customerId');
    if (customerId) {
      const fetchCustomer = async () => {
        try {
          const response = await fetch(`/api/customers/${customerId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch customer');
          }
          const customerData = await response.json();
          setSelectedCustomer(customerData);
        } catch (error) {
          console.error('Error fetching customer:', error);
          // Handle error (e.g., show an error message to the user)
        }
      };

      fetchCustomer();
    }
  }, [searchParams]);

  const handleSelectCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  const handleRampConfigurationChange = (components: RampComponent[]) => {
    setRampComponents(components);
  };

  const handleCreateQuote = async () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }

    try {
      const quoteData = {
        customer: selectedCustomer._id,
        totalPrice: 0, // This will be calculated later
        components: rampComponents,
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        sentAt: null,
        signedAt: null,
        paymentStatus: 'UNPAID',
        // Add a placeholder rentalRequest for now
        rentalRequest: '000000000000000000000000', // Placeholder ObjectId
      };

      console.log('Sending quote data:', quoteData);

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Failed to create quote');
      }

      const newQuote = await response.json();
      await addQuote(newQuote);
      router.push('/quotes');
    } catch (error) {
      console.error('Failed to create quote:', error);
      alert('Failed to create quote. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Quote</h1>
      <div className="space-y-4">
        {!selectedCustomer && <CustomerSearch onSelectCustomer={handleSelectCustomer} />}
        {selectedCustomer && <CustomerCard customer={selectedCustomer} />}
        <RampConfigurationV2 onConfigurationChange={handleRampConfigurationChange} />
        <button 
          type="button"
          onClick={handleCreateQuote}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Quote
        </button>
      </div>
    </div>
  );
};

const NewQuotePage: React.FC = () => {
  return (
    <QuoteProvider>
      <NewQuotePageContent />
    </QuoteProvider>
  );
};

export default NewQuotePage;
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
        setRequest(data);
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
          mobilityAids: request.mobilityAids,
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
        <p><strong>Mobility Aids:</strong> {request.mobilityAids.join(', ')}</p>
        <p><strong>Submitted:</strong> {new Date(request.createdAt).toLocaleString()}</p>
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

# src/app/api/rental-requests/route.ts

```ts
// src/app/api/rental-requests/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';
import { ApiResponse, RentalRequest as RentalRequestType } from '@/types';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    const rentalRequest = await RentalRequest.create(data);
    const response: ApiResponse<{ id: string }> = {
      data: { id: rentalRequest._id.toString() },
    };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating rental request:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to create rental request',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const rentalRequests = await RentalRequest.find().sort({ createdAt: -1 });
    const response: ApiResponse<RentalRequestType[]> = { data: rentalRequests };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in GET /api/rental-requests:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch rental requests',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
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

# src/app/api/register/route.ts

```ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return NextResponse.json({ message: 'Username or email already exists' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const result = await db.collection('users').insertOne({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: 'User registered successfully', userId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'An error occurred during registration' }, { status: 500 });
  }
}
```

# src/app/api/quotes/route.ts

```ts
// src/app/api/quotes/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models';
import { ApiResponse, Quote as QuoteType } from '@/types';

export async function GET() {
  await dbConnect();

  try {
    const quotes = await Quote.find().populate('customer').sort({ createdAt: -1 });
    const response: ApiResponse<QuoteType[]> = { data: quotes };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch quotes',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received quote data:', data);

    // Validate required fields
    if (!data.customer || typeof data.totalPrice !== 'number') {
      throw new Error('Missing required fields: customer or totalPrice');
    }

    // Create a new quote object with only the necessary fields
    const quoteData = {
      customer: data.customer, // This should now be a valid ObjectId string
      totalPrice: data.totalPrice,
      components: data.components || [],
      status: data.status || 'DRAFT',
      createdAt: data.createdAt || new Date(),
      sentAt: data.sentAt,
      signedAt: data.signedAt,
      paymentStatus: data.paymentStatus || 'PENDING',
    };

    const quote = await Quote.create(quoteData);
    console.log('Quote created:', quote);

    await quote.populate('customer');
    console.log('Quote populated:', quote);

    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating quote:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const response: ApiResponse<never> = {
      error: `Failed to create quote: ${errorMessage}`,
    };
    return NextResponse.json(response, { status: 500 });
  }
}
```

# src/app/api/send-quote/route.ts

```ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models';
// Import necessary modules for email sending, Stripe, and esignatures.io

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { quoteId } = await request.json();
    const quote = await Quote.findById(quoteId).populate('customer');
    
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }

    // TODO: Implement email sending logic
    // const emailResult = await sendEmail(quote.customer.email, quote);

    // TODO: Implement Stripe payment link generation
    // const paymentLink = await createStripePaymentLink(quote);

    // TODO: Implement esignatures.io agreement link generation
    // const agreementLink = await createESignatureAgreement(quote);

    // Update quote status
    quote.status = 'SENT';
    quote.sentAt = new Date();
    await quote.save();

    return NextResponse.json({ 
      message: 'Quote sent successfully',
      // emailResult,
      // paymentLink,
      // agreementLink
    });
  } catch (error) {
    console.error('Error sending quote:', error);
    return NextResponse.json({ error: 'Failed to send quote' }, { status: 500 });
  }
}
```

# src/app/api/customers/route.ts

```ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';
import { ApiResponse, Customer as CustomerType } from '@/types';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received customer data:', data);

    const customer = await Customer.create(data);
    const response: ApiResponse<{ id: string, customer: CustomerType }> = {
      data: { 
        id: customer._id.toString(),
        customer: customer.toObject() 
      },
    };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const response: ApiResponse<never> = {
      error: `Failed to create customer: ${errorMessage}`,
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    const response: ApiResponse<CustomerType[]> = { data: customers };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching customers:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch customers',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
```

# src/app/api/rental-requests/[id]/route.ts

```ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { RentalRequest } from '@/models';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const rentalRequest = await RentalRequest.findById(params.id);
    if (!rentalRequest) {
      return NextResponse.json({ error: 'Rental request not found' }, { status: 404 });
    }
    return NextResponse.json(rentalRequest);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch rental request' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const rentalRequest = await RentalRequest.findByIdAndDelete(params.id);
    if (!rentalRequest) {
      return NextResponse.json({ error: 'Rental request not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Rental request deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete rental request' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const data = await request.json();
    const updatedRentalRequest = await RentalRequest.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedRentalRequest) {
      return NextResponse.json({ error: 'Rental request not found' }, { status: 404 });
    }
    return NextResponse.json(updatedRentalRequest);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update rental request' }, { status: 500 });
  }
}
```

# src/app/api/quotes/[id]/route.ts

```ts
// src/app/api/quotes/[id]/route.ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Quote } from '@/models';
import { ApiResponse, Quote as QuoteType } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const quote = await Quote.findById(params.id).populate('customer');
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching quote:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch quote',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const data = await request.json();
    const quote = await Quote.findByIdAndUpdate(params.id, data, { new: true }).populate('customer');
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error updating quote:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to update quote',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const quote = await Quote.findByIdAndDelete(params.id);
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }
    const response: ApiResponse<{ message: string }> = { 
      data: { message: 'Quote deleted successfully' } 
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error deleting quote:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to delete quote',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function POST(request: Request) {
  await dbConnect();

  try {
    const data = await request.json();
    console.log('Received quote data:', data); // Log received data

    // Validate required fields
    if (!data.customer || !data.totalPrice) {
      throw new Error('Missing required fields: customer or totalPrice');
    }

    const quote = await Quote.create(data);
    console.log('Quote created:', quote); // Log created quote

    await quote.populate('customer');
    console.log('Quote populated:', quote); // Log populated quote

    const response: ApiResponse<QuoteType> = { data: quote };
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating quote:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    const response: ApiResponse<never> = {
      error: `Failed to create quote: ${errorMessage}`,
    };
    return NextResponse.json(response, { status: 500 });
  }
}
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
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

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
          return null;
        }

        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection('users').findOne({ username: credentials.username });

        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { id: user._id.toString(), name: user.username, email: user.email };
        }
        return null;
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
};
```

# src/app/api/customers/[id]/route.ts

```ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';
import { ApiResponse, Customer as CustomerType } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    if (!params.id) {
      throw new Error('Customer ID is required');
    }

    const customer = await Customer.findById(params.id);
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    const response: ApiResponse<CustomerType> = { data: customer.toObject() };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching customer:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to fetch customer',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const data = await request.json();
    const customer = await Customer.findByIdAndUpdate(params.id, data, { new: true });
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    const response: ApiResponse<CustomerType> = { data: customer };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error updating customer:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to update customer',
    };
    return NextResponse.json(response, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();

  try {
    const customer = await Customer.findByIdAndDelete(params.id);
    if (!customer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }
    const response: ApiResponse<{ message: string }> = { 
      data: { message: 'Customer deleted successfully' } 
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error deleting customer:', error);
    const response: ApiResponse<never> = {
      error: 'Failed to delete customer',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
```

# src/app/api/customers/search/route.ts

```ts
import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Customer } from '@/models';

export async function GET(request: Request) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const term = searchParams.get('term');

  if (!term) {
    return NextResponse.json({ error: 'Search term is required' }, { status: 400 });
  }

  try {
    const customers = await Customer.find({
      $or: [
        { firstName: { $regex: term, $options: 'i' } },
        { lastName: { $regex: term, $options: 'i' } },
        { email: { $regex: term, $options: 'i' } },
      ]
    }).select('firstName lastName email phoneNumber address mobilityAids').limit(10);

    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error searching customers:', error);
    return NextResponse.json({ error: 'Failed to search customers' }, { status: 500 });
  }
}
```

