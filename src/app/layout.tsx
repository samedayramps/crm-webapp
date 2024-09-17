import React from 'react';
import '@/styles/globals.css';
import SessionWrapper from '../components/SessionWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { QuoteProvider } from '@/contexts/QuoteContext';

export const metadata = {
  title: 'Wheelchair Ramp Rental',
  description: 'Rent wheelchair ramps for your needs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QuoteProvider>
          <SessionWrapper>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
              </main>
              <Footer />
            </div>
          </SessionWrapper>
        </QuoteProvider>
      </body>
    </html>
  );
}