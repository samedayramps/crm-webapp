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