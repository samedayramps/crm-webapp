import React from 'react';
import Header from '@/components/Header';
import { QuoteProvider } from '@/contexts/QuoteContext';
import '@/styles/globals.css'; // Make sure this import is present to include your global styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <QuoteProvider>
          <Header />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <main className="py-6">
              {children}
            </main>
          </div>
        </QuoteProvider>
      </body>
    </html>
  );
}