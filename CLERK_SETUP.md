# Clerk Authentication Setup

This project uses Clerk for authentication with a waitlist feature.

## Setup Instructions

### 1. Create a Clerk Account

1. Go to [https://clerk.com](https://clerk.com) and sign up
2. Create a new application
3. Choose your authentication methods (Email, Google, etc.)

### 2. Get Your API Keys

1. In your Clerk Dashboard, go to **API Keys**
2. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

### 3. Configure Environment Variables

Add these to your `.env` file:

```env
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
```

### 4. Enable Waitlist Feature

1. In Clerk Dashboard, go to **User & Authentication** → **Waitlist**
2. Enable the waitlist feature
3. Configure your waitlist settings

### 5. Configure Allowed Redirect URLs

In your Clerk Dashboard under **Paths**:

- Add `http://localhost:4321` for development
- Add your production URL when deploying

## Pages Created

- **`/`** - Landing page (redirects to dashboard if authenticated)
- **`/sign-in`** - Sign in page
- **`/request-access`** - Waitlist/request access page
- **`/dashboard`** - Protected dashboard (requires authentication)

## Features

- ✅ Sign in with email/password
- ✅ Social authentication (Google, GitHub, etc.)
- ✅ Waitlist for access requests
- ✅ Protected routes
- ✅ User profile management
- ✅ Sign out functionality
- ✅ Dark theme matching your design

## Customization

The Clerk components are styled to match your black theme with custom appearance settings. You can modify the appearance in each page's script section.

### Example Appearance Customization

```javascript
clerk.mountSignIn(signInDiv, {
  appearance: {
    elements: {
      card: 'bg-[#0a0a0a] border border-[rgba(255,255,255,0.13)]',
      headerTitle: 'text-white text-2xl font-bold',
      // ... more customization
    },
  },
});
```

## Testing

1. Start your dev server: `npm run dev`
2. Visit `http://localhost:4321`
3. Click "Request Access" to test the waitlist
4. Or click "Sign In" if you already have access

## Production Deployment

Before deploying:

1. Update environment variables with production Clerk keys
2. Add your production URL to Clerk's allowed redirect URLs
3. Configure your waitlist approval process in Clerk Dashboard

## Support

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk Dashboard](https://dashboard.clerk.com)
