import { SignIn } from "@clerk/clerk-react";
import AuthShell from "./AuthShell";
import { clerkAuthAppearance } from "./clerk-auth";

export default function ClerkSignInPage() {
  return (
    <AuthShell>
      <SignIn
        appearance={clerkAuthAppearance}
        path="/sign-in-react"
        routing="path"
        signUpUrl="/request-access"
        afterSignInUrl="/dashboard"
      />
    </AuthShell>
  );
}
