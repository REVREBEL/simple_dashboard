# 🔑 Environment Variables Setup

## Required Environment Variables

Your Clerk authentication system requires two environment variables to function:

### 1. PUBLIC_CLERK_PUBLISHABLE_KEY
- **Type:** Public (safe to expose in browser)
- **Format:** `pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx` (development)
- **Format:** `pk_live_xxxxxxxxxxxxxxxxxxxxxxxxxx` (production)
- **Purpose:** Used by the browser to communicate with Clerk

### 2. CLERK_SECRET_KEY
- **Type:** Secret (never expose in browser)
- **Format:** `sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx` (development)
- **Format:** `sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxx` (production)
- **Purpose:** Used by server-side code to verify sessions

## How to Get Your Keys

### Step 1: Create Clerk Account
1. Visit https://dashboard.clerk.com
2. Sign up for a free account
3. Verify your email

### Step 2: Create Application
1. Click "Add Application"
2. Name it (e.g., "Metrics Dashboard")
3. Choose your authentication methods
4. Click "Create Application"

### Step 3: Copy Keys
1. You'll see your keys immediately after creation
2. Or navigate to **API Keys** in the sidebar
3. Copy both keys

## Adding Keys to Your Project

### Local Development (.env file)

1. Open your `.env` file in the project root
2. Add these lines at the end:

```env
# Clerk Authentication
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
```

3. Replace the `xxxxx` with your actual keys from Clerk Dashboard
4. Save the file
5. **Restart your dev server**

### Example .env File

```env
# Existing Webflow variables
WEBFLOW_API_HOST=https://api.webflow.com
WEBFLOW_SITE_API_TOKEN=your_webflow_token
WEBFLOW_CMS_SITE_API_TOKEN=your_cms_token

# Clerk Authentication (ADD THESE)
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2xlcmsuZXhhbXBsZS5jb20k
CLERK_SECRET_KEY=sk_test_Y2xlcmsuZXhhbXBsZS5jb20k
```

## Production Deployment

### Cloudflare Workers

#### Option 1: wrangler.jsonc (Public Key Only)
```jsonc
{
  "vars": {
    "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_xxxxxxxxxxxxxxxxxxxxx"
  }
}
```

#### Option 2: Wrangler Secrets (Secret Key)
```bash
wrangler secret put CLERK_SECRET_KEY
# Paste your secret key when prompted
```

### Webflow Cloud

1. Go to your Webflow project
2. Navigate to **Apps** → **Your App** → **Settings**
3. Add environment variables:
   - Name: `PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Value: `pk_live_xxxxxxxxxxxxxxxxxxxxx`
   - Name: `CLERK_SECRET_KEY`
   - Value: `sk_live_xxxxxxxxxxxxxxxxxxxxx`

### Vercel

```bash
vercel env add PUBLIC_CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
```

Or in Vercel Dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add both variables

### Netlify

In Netlify Dashboard:
1. Site settings → Environment variables
2. Add both variables

## Security Best Practices

### ✅ DO
- Use `pk_test_` and `sk_test_` keys for development
- Use `pk_live_` and `sk_live_` keys for production
- Keep secret keys in `.env` file (never commit)
- Add `.env` to `.gitignore`
- Use environment variables in hosting platform
- Rotate keys if exposed

### ❌ DON'T
- Commit `.env` file to git
- Share secret keys in chat/email
- Use production keys in development
- Hardcode keys in source code
- Expose secret keys in browser code

## Verifying Your Setup

### Check if Keys are Loaded

Add this to any page to test (remove after testing):

```javascript
console.log('Public Key:', import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY);
console.log('Has Secret Key:', !!import.meta.env.CLERK_SECRET_KEY);
```

### Expected Output
```
Public Key: pk_test_xxxxxxxxxxxxxxxxxxxxx
Has Secret Key: true
```

### Common Issues

#### "Missing Clerk Publishable Key" Error
**Cause:** Environment variable not set or dev server not restarted

**Solution:**
1. Check `.env` file has the correct variable name
2. Restart dev server
3. Clear browser cache

#### Keys Not Working
**Cause:** Wrong key type or format

**Solution:**
1. Make sure you're using the right keys (test vs live)
2. Check for extra spaces or quotes
3. Verify keys in Clerk Dashboard

#### "Invalid Publishable Key" Error
**Cause:** Using wrong environment keys

**Solution:**
1. Development: Use `pk_test_` keys
2. Production: Use `pk_live_` keys
3. Don't mix test and live keys

## Key Rotation

If you need to rotate your keys (e.g., if exposed):

1. Go to Clerk Dashboard → **API Keys**
2. Click **Regenerate** next to the key
3. Copy the new key
4. Update all environments:
   - Local `.env` file
   - Hosting platform environment variables
5. Restart all services

## Testing Your Setup

### 1. Check Pages Load
- Visit landing page - Should load without errors
- Visit /sign-in - Should show Clerk sign-in form
- Visit /request-access - Should show waitlist form

### 2. Check Browser Console
- Should see no errors about missing keys
- Clerk should initialize successfully

### 3. Test Sign In
- Try signing in with test account
- Should redirect to dashboard
- Should see user profile

## Environment Variable Reference

| Variable | Type | Required | Where Used |
|----------|------|----------|------------|
| `PUBLIC_CLERK_PUBLISHABLE_KEY` | Public | Yes | Browser (all pages) |
| `CLERK_SECRET_KEY` | Secret | Yes | Server (API routes) |

## Next Steps

Once your environment variables are set:

1. ✅ Enable waitlist in Clerk Dashboard
2. ✅ Test the authentication flow
3. ✅ Customize the pages
4. ✅ Deploy to production

---

**Need help?** Check `GETTING_STARTED.md` for the complete setup guide.
