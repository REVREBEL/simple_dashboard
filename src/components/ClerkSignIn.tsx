import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import AuthShell from "./AuthShell";
import { clerkAuthAppearance } from "./clerk-auth";

const clerkPubKey = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function ClerkSignInPage() {
  if (!clerkPubKey) {
    return (
      <div className="p-4 text-red-500 font-mono">
        Error: PUBLIC_CLERK_PUBLISHABLE_KEY is not defined in .env
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <AuthShell>
        <SignIn
          appearance={clerkAuthAppearance}
          routing="hash"
          signUpUrl="/request-access"
          afterSignInUrl="/dashboard"
        />
      </AuthShell>
    </ClerkProvider>
  );
}