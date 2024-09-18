// src/app/layout.tsx
'use client';

import React from 'react';
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import { store } from '../store';
import Header from '@/components/Header';
import '@/styles/globals.css';
import AuthWrapper from '@/components/AuthWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <SessionProvider>
          <Provider store={store}>
            <AuthWrapper>
              <Header />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <main className="py-6">
                  {children}
                </main>
              </div>
            </AuthWrapper>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}