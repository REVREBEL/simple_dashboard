# 🚀 Getting Started with Clerk Authentication

## ✅ Setup Checklist

Follow these steps to get your authentication system up and running:

### 1. Create Clerk Account (2 minutes)
- [ ] Go to https://dashboard.clerk.com
- [ ] Sign up for a free account
- [ ] Create a new application
- [ ] Name it "Metrics Dashboard" (or your preferred name)

### 2. Get Your API Keys (1 minute)
- [ ] In Clerk Dashboard, navigate to **API Keys**
- [ ] Copy your **Publishable Key** (starts with `pk_test_`)
- [ ] Copy your **Secret Key** (starts with `sk_test_`)

### 3. Configure Environment (1 minute)
- [ ] Open your `.env` file
- [ ] Add these lines:
```env
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```
- [ ] Replace `your_key_here` with your actual keys
- [ ] Save the file

### 4. Enable Waitlist (1 minute)
- [ ] In Clerk Dashboard, go to **User & Authentication**
- [ ] Click on **Waitlist**
- [ ] Toggle **Enable Waitlist** to ON
- [ ] Click **Save**

### 5. Test Locally (2 minutes)
- [ ] Run `npm run dev` in your terminal
- [ ] Visit http://localhost:4321
- [ ] Click "Request Access" and fill out the form
- [ ] Check Clerk Dashboard → **Users** → **Waitlist** to see your request
- [ ] Approve yourself in the dashboard
- [ ] Try signing in at http://localhost:4321/sign-in
- [ ] Visit http://localhost:4321/dashboard to see the protected page

### 6. Customize (Optional)
- [ ] Add social login providers (Google, GitHub, etc.)
- [ ] Customize email templates
- [ ] Update waitlist messages
- [ ] Modify the dashboard content

## 🎯 What You Have Now

### Pages
✅ **Landing Page** - `/`
- Marketing page with features
- Auto-redirects authenticated users to dashboard

✅ **Sign In** - `/sign-in`
- Email/password login
- Social authentication support
- Link to request access

✅ **Request Access** - `/request-access`
- Waitlist form for new users
- Success confirmation
- Link back to sign in

✅ **Dashboard** - `/dashboard`
- Protected route (requires authentication)
- User profile display
- Sample metrics and analytics
- Sign out functionality

### Features
✅ Secure authentication with Clerk
✅ Waitlist management
✅ Protected routes
✅ User profiles with avatars
✅ Dark theme matching your design
✅ Responsive design
✅ Loading states
✅ Error handling

## 📖 Next Steps

### Learn More
- Read `QUICKSTART.md` for a 5-minute overview
- Check `CLERK_SETUP.md` for detailed configuration
- Review `DEPLOYMENT.md` before going to production

### Customize Your App
1. **Update Dashboard Content**
   - Edit `src/pages/dashboard.astro`
   - Add your real metrics and data

2. **Customize Landing Page**
   - Edit `src/pages/index.astro`
   - Update features and messaging

3. **Add Social Logins**
   - Go to Clerk Dashboard → **Social Connections**
   - Enable Google, GitHub, Microsoft, etc.

4. **Customize Emails**
   - Go to Clerk Dashboard → **Emails**
   - Edit templates for waitlist approval, welcome, etc.

## 🆘 Common Issues

### "Missing Clerk Publishable Key" Error
**Solution:** Make sure you:
1. Added keys to `.env` file
2. Restarted your dev server after adding keys
3. Used the correct key format (`pk_test_...`)

### Waitlist Not Showing
**Solution:** 
1. Enable waitlist in Clerk Dashboard
2. Clear browser cache
3. Check browser console for errors

### Can't Sign In After Approval
**Solution:**
1. Make sure you approved the user in Clerk Dashboard
2. Check that the email matches
3. Try resetting password if needed

### Redirects Not Working
**Solution:**
1. Check that URLs are correct in the code
2. Clear browser cache
3. Make sure you're using the right environment keys

## 💡 Pro Tips

1. **Use Test Emails**
   - Use `+` in Gmail for testing: `yourname+test1@gmail.com`
   - Each variation is treated as a unique email

2. **Check Clerk Dashboard**
   - Monitor user activity
   - View sign-in logs
   - Track waitlist requests

3. **Customize Appearance**
   - Edit the `appearance` object in each page
   - Match your brand colors
   - Adjust spacing and sizing

4. **Set Up Webhooks**
   - Get notified of user events
   - Sync data to your database
   - Trigger custom workflows

## 🎉 You're Ready!

Your authentication system is now set up and ready to use. Here's what to do next:

1. ✅ Test all the flows (sign in, request access, dashboard)
2. ✅ Customize the content and styling
3. ✅ Add your real data and metrics
4. ✅ Deploy to production (see `DEPLOYMENT.md`)

---

**Questions?** Check the documentation files or visit [Clerk Support](https://clerk.com/support)

**Happy building!** 🚀
