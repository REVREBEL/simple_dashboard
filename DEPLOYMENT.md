# Deployment Guide - Clerk Authentication

## Pre-Deployment Checklist

### 1. Clerk Production Setup

#### Switch to Production Keys
1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your application
3. Go to **API Keys**
4. Copy your **Production** keys (they start with `pk_live_` and `sk_live_`)
5. Update your production environment variables

#### Configure Production URLs
1. In Clerk Dashboard → **Paths**
2. Add your production domain to **Allowed redirect URLs**:
   - `https://yourdomain.com`
   - `https://yourdomain.com/sign-in`
   - `https://yourdomain.com/dashboard`
3. Set **Home URL** to your production domain

#### Configure CORS
1. In Clerk Dashboard → **API Keys** → **Advanced**
2. Add your production domain to allowed origins

### 2. Environment Variables

Set these in your hosting platform (Cloudflare, Vercel, etc.):

```env
PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Cloudflare Workers Deployment

Since this is an Astro + Cloudflare project:

#### Update wrangler.jsonc
Add environment variables:

```jsonc
{
  "vars": {
    "PUBLIC_CLERK_PUBLISHABLE_KEY": "pk_live_xxxxxxxxxxxxxxxxxxxxx"
  }
}
```

**Note:** Don't put secret keys in `wrangler.jsonc`! Use Cloudflare secrets instead:

```bash
wrangler secret put CLERK_SECRET_KEY
# Then paste your secret key when prompted
```

#### Deploy
```bash
npm run build
wrangler deploy
```

### 4. Webflow Cloud Deployment

If deploying to Webflow Cloud:

1. Go to your Webflow project
2. Navigate to **Apps** → **Your App** → **Settings**
3. Add environment variables:
   - `PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
4. Deploy your app

### 5. Post-Deployment Testing

Test these flows:

- [ ] Landing page loads correctly
- [ ] Sign in page works
- [ ] Request access (waitlist) works
- [ ] Dashboard requires authentication
- [ ] Sign out works
- [ ] Redirects work correctly
- [ ] User profile displays correctly

### 6. Waitlist Management

#### Approve Users
1. Go to Clerk Dashboard → **Users** → **Waitlist**
2. Review pending requests
3. Approve or reject users
4. Approved users receive an email with sign-in instructions

#### Customize Emails
1. Go to Clerk Dashboard → **Customization** → **Emails**
2. Customize the waitlist approval email
3. Add your branding

### 7. Security Best Practices

#### Rotate Keys if Exposed
If you accidentally commit keys:
1. Go to Clerk Dashboard → **API Keys**
2. Click **Regenerate** for the exposed key
3. Update all environments with new keys

#### Enable MFA (Optional)
1. Go to Clerk Dashboard → **User & Authentication** → **Multi-factor**
2. Enable SMS or Authenticator app
3. Configure settings

#### Set Up Webhooks (Optional)
Monitor user events:
1. Go to Clerk Dashboard → **Webhooks**
2. Add endpoint: `https://yourdomain.com/api/webhooks/clerk`
3. Select events to monitor:
   - `user.created`
   - `user.updated`
   - `session.created`

### 8. Monitoring

#### Check Clerk Dashboard
- Monitor sign-ins
- Track waitlist requests
- Review user activity

#### Set Up Alerts
1. Go to Clerk Dashboard → **Settings** → **Notifications**
2. Configure email alerts for:
   - Failed sign-in attempts
   - New waitlist requests
   - User deletions

## Common Issues

### Issue: "Invalid publishable key"
**Solution:** Make sure you're using production keys (`pk_live_`) in production

### Issue: Redirects not working
**Solution:** Add all redirect URLs to Clerk's allowed list

### Issue: CORS errors
**Solution:** Add your domain to Clerk's allowed origins

### Issue: Users can't sign in after deployment
**Solution:** Check that production keys are set correctly in environment variables

## Rollback Plan

If something goes wrong:

1. **Revert to development keys** temporarily
2. **Check Clerk Dashboard** for any configuration issues
3. **Review logs** in your hosting platform
4. **Test locally** with production keys to debug

## Support Resources

- [Clerk Status Page](https://status.clerk.com)
- [Clerk Support](https://clerk.com/support)
- [Clerk Community](https://clerk.com/discord)
- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/)

## Production Checklist

Before going live:

- [ ] Production Clerk keys configured
- [ ] All redirect URLs added to Clerk
- [ ] Environment variables set in hosting platform
- [ ] Waitlist enabled and configured
- [ ] Email templates customized
- [ ] Test sign-in flow
- [ ] Test waitlist flow
- [ ] Test protected routes
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)
- [ ] Monitoring set up
- [ ] Backup plan ready

---

**Ready to deploy?** Run `npm run build` and then deploy to your platform! 🚀
