'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

const publicPaths = ['/login', '/register']; // Add any public paths here

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading

    if (!session && !publicPaths.includes(pathname)) {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    } else if (session && publicPaths.includes(pathname)) {
      router.push('/');
    }
  }, [session, status, router, pathname]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}