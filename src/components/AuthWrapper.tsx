'use client';

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner'; // Create this component

const PUBLIC_PATHS = ['/login', '/register'];
const DEFAULT_AUTH_PATH = '/';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'loading') return;

    if (!session && !PUBLIC_PATHS.includes(pathname)) {
      router.push(`/login?callbackUrl=${encodeURIComponent(pathname)}`);
    } else if (session && PUBLIC_PATHS.includes(pathname)) {
      router.push(DEFAULT_AUTH_PATH);
    }
  }, [session, status, router, pathname]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}