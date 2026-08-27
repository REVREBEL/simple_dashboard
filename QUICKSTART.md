# Quick Start Guide - Clerk Authentication

## 🚀 Get Started in 5 Minutes

### Step 1: Get Clerk Keys (2 minutes)

1. Go to [https://dashboard.clerk.com](https://dashboard.clerk.com)
2. Sign up or log in
3. Click "Add Application"
4. Name it "Metrics Dashboard" (or whatever you prefer)
5. Copy your **Publishable Key** and **Secret Key**

### Step 2: Add Keys to .env (1 minute)

Open your `.env` file and add:

```env
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
```

Replace the `xxxxx` with your actual keys from Clerk.

### Step 3: Enable Waitlist in Clerk (1 minute)

1. In Clerk Dashboard, go to **User & Authentication** → **Waitlist**
2. Toggle **Enable Waitlist** to ON
3. Save changes

### Step 4: Test It! (1 minute)

```bash
npm run dev
```

Then visit:
- `http://localhost:4321` - Landing page
- `http://localhost:4321/sign-in` - Sign in
- `http://localhost:4321/request-access` - Request access (waitlist)
- `http://localhost:4321/dashboard` - Protected dashboard

## 🎨 What You Get

### Pages Created:
- ✅ **Landing Page** (`/`) - Marketing page with CTA
- ✅ **Sign In** (`/sign-in`) - Login page
- ✅ **Request Access** (`/request-access`) - Waitlist form
- ✅ **Dashboard** (`/dashboard`) - Protected metrics dashboard

### Features:
- ✅ Email/password authentication
- ✅ Social logins (Google, GitHub, etc.)
- ✅ Waitlist management
- ✅ Protected routes
- ✅ User profile with avatar
- ✅ Sign out functionality
- ✅ Dark theme matching your design

## 🎯 Next Steps

### Customize the Waitlist Messages

In Clerk Dashboard → **Customization** → **Localization**, you can customize:
- Welcome messages
- Success messages
- Email templates

### Add Social Providers

In Clerk Dashboard → **User & Authentication** → **Social Connections**:
- Enable Google
- Enable GitHub
- Enable Microsoft
- And more...

### Approve Waitlist Users

In Clerk Dashboard → **Users** → **Waitlist**:
- View pending requests
- Approve or reject users
- Send custom emails

## 🔒 Security Notes

- Never commit your `.env` file
- Use `pk_test_` keys for development
- Use `pk_live_` keys for production
- Rotate keys if exposed

## 📚 Learn More

- [Clerk Docs](https://clerk.com/docs)
- [Astro + Clerk Guide](https://clerk.com/docs/references/astro/overview)
- [Waitlist Feature](https://clerk.com/docs/authentication/waitlist)

## 🆘 Troubleshooting

**"Missing Clerk Publishable Key" error?**
- Make sure you added the keys to `.env`
- Restart your dev server after adding keys

**Waitlist not showing?**
- Enable waitlist in Clerk Dashboard
- Check that `waitlistUrl` is configured

**Redirects not working?**
- Add your URLs to Clerk's allowed redirect URLs
- Check the `signInUrl` and `afterSignInUrl` settings

## 💡 Pro Tips

1. **Test with multiple accounts** - Use different emails to test the full flow
2. **Customize the theme** - Edit the `appearance` object in each page
3. **Add metadata** - Customize the waitlist form fields in Clerk Dashboard
4. **Set up webhooks** - Get notified when users sign up or request access

---

**Need help?** Check out the full setup guide in `CLERK_SETUP.md`
