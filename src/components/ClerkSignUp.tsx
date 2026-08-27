import { SignUp } from '@clerk/clerk-react';

export const clerkAuthAppearance = {
  layout: {
    logoImageUrl:
      "https://res.cloudinary.com/revrebel/image/upload/v1761516148/RR/Logos/revrebel-logo.png",
    socialButtonsPlacement: "top" as const,
    socialButtonsVariant: "blockButton" as const,
  },
  variables: {
    colorPrimary: "#163666",
    colorText: "#163666",
    colorTextSecondary: "rgba(22, 54, 102, 0.68)",
    colorBackground: "#eff5f6",
    colorInputBackground: "#ffffff",
    colorInputText: "#163666",
    colorDanger: "#e05047",
    colorSuccess: "#71c9c5",
    colorWarning: "#faca78",
    borderRadius: "0.175rem",
    fontFamily: '"Roboto", sans-serif',
    fontFamilyButtons: '"Khand", sans-serif',
  },
  elements: {
    rootBox: "auth-clerk-root",
    cardBox: "auth-clerk-card-box",
    card: "auth-clerk-card",
    logoImage: "auth-clerk-logo",
    headerTitle: "auth-clerk-title",
    headerSubtitle: "auth-clerk-subtitle",
    socialButtonsBlockButton: "auth-clerk-social",
    socialButtonsBlockButtonText: "auth-clerk-social-text",
    dividerLine: "auth-clerk-divider",
    dividerText: "auth-clerk-divider-text",
    formFieldLabel: "auth-clerk-label",
    formFieldInput: "auth-clerk-input",
    formButtonPrimary: "auth-clerk-primary",
    footer: "auth-clerk-footer",
    footerAction: "auth-clerk-footer-action",
    footerActionText: "auth-clerk-footer-text",
    footerActionLink: "auth-clerk-footer-link",
    formFieldErrorText: "auth-clerk-error",
    alertText: "auth-clerk-alert",
  },
};

export default function ClerkSignUp() {
  return (
    <div className="auth-page">
      <div className="auth-card-frame">
        <SignUp
          appearance={clerkAuthAppearance}
          path="/request-access"
          routing="path"
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"
        />
        <div className="auth-secured">
          Secured by{' '}
          <strong>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
            </svg>
            Clerk
          </strong>
        </div>
      </div>
    </div>
  );
}
