'use client';

import React from 'react';
import { SessionProvider } from "next-auth/react";
import Header from '@/components/Header';
import { QuoteProvider } from '@/contexts/QuoteContext';
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
          <QuoteProvider>
            <AuthWrapper>
              <Header />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <main className="py-6">
                  {children}
                </main>
              </div>
            </AuthWrapper>
          </QuoteProvider>
        </SessionProvider>
      </body>
    </html>
  );
}