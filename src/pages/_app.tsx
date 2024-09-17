import React from 'react';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;