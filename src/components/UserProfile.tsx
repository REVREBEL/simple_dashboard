import { useEffect, useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { Clerk } = await import('@clerk/clerk-js');
        const clerkPubKey = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;
        
        if (!clerkPubKey) return;

        const clerk = new Clerk(clerkPubKey);
        await clerk.load();

        if (clerk.user) {
          setUser(clerk.user);
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };

    loadUser();
  }, []);

  if (!user) {
    return (
      <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.13)] rounded-lg p-6 animate-pulse">
        <div className="h-4 bg-[rgba(255,255,255,0.1)] rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-[rgba(255,255,255,0.1)] rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.13)] rounded-lg p-6">
      <div className="flex items-center gap-4">
        {user.imageUrl && (
          <img 
            src={user.imageUrl} 
            alt={user.fullName || 'User'} 
            className="w-16 h-16 rounded-full border-2 border-[rgba(255,255,255,0.13)]"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold text-white">
            {user.fullName || user.firstName || 'User'}
          </h3>
          <p className="text-[rgba(255,255,255,0.67)]">
            {user.primaryEmailAddress?.emailAddress}
          </p>
          <p className="text-sm text-[rgba(255,255,255,0.5)] mt-1">
            Member since {new Date(user.createdAt || Date.now()).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

