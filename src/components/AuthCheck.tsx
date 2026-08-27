import { useEffect, useState } from 'react';

interface AuthCheckProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirectTo?: string;
}

export default function AuthCheck({ children, fallback, redirectTo = '/sign-in' }: AuthCheckProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // @ts-ignore - Clerk is loaded globally
        const { Clerk } = await import('@clerk/clerk-js');
        const clerkPubKey = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;
        
        if (!clerkPubKey) {
          console.error('Missing Clerk Publishable Key');
          setIsAuthenticated(false);
          return;
        }

        const clerk = new Clerk(clerkPubKey);
        await clerk.load();

        if (clerk.user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          if (redirectTo) {
            window.location.href = redirectTo;
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, [redirectTo]);

  if (isAuthenticated === null) {
    return fallback || (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-[rgba(255,255,255,0.67)]">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || null;
  }

  return <>{children}</>;
}

