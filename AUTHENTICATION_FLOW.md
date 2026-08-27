# 🔄 Authentication Flow Diagram

## User Journey

```
┌─────────────────────────────────────────────────────────────────┐
│                         Landing Page (/)                         │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  • Marketing content                                      │  │
│  │  • Feature highlights                                     │  │
│  │  • CTA buttons                                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│         ┌─────────────────┐         ┌──────────────────┐       │
│         │  Request Access │         │     Sign In      │       │
│         └────────┬────────┘         └────────┬─────────┘       │
└──────────────────┼───────────────────────────┼──────────────────┘
                   │                           │
                   ▼                           ▼
         ┌─────────────────┐         ┌──────────────────┐
         │  Waitlist Page  │         │  Sign In Page    │
         │ /request-access │         │    /sign-in      │
         └────────┬────────┘         └────────┬─────────┘
                  │                           │
                  │                           │
         ┌────────▼────────┐         ┌────────▼─────────┐
         │ Submit Request  │         │  Enter Creds     │
         │ (Email, Name)   │         │  (Email, Pass)   │
         └────────┬────────┘         └────────┬─────────┘
                  │                           │
                  │                           │
         ┌────────▼────────┐         ┌────────▼─────────┐
         │ Success Message │         │  Authenticated   │
         │ "Request Sent"  │         │                  │
         └─────────────────┘         └────────┬─────────┘
                  │                           │
                  │                           │
         ┌────────▼────────┐                 │
         │ Admin Approves  │                 │
         │ in Clerk        │                 │
         │ Dashboard       │                 │
         └────────┬────────┘                 │
                  │                           │
                  │                           │
         ┌────────▼────────┐                 │
         │ Approval Email  │                 │
         │ Sent to User    │                 │
         └────────┬────────┘                 │
                  │                           │
                  └───────────┬───────────────┘
                              │
                              ▼
                   ┌──────────────────┐
                   │    Dashboard     │
                   │   /dashboard     │
                   │                  │
                   │  • User Profile  │
                   │  • Metrics       │
                   │  • Analytics     │
                   │  • Sign Out      │
                   └──────────────────┘
```

## Authentication States

### 1. Unauthenticated User
```
Landing Page (/)
    ├── Can view marketing content
    ├── Can click "Request Access" → /request-access
    └── Can click "Sign In" → /sign-in
```

### 2. Waitlist User (Pending)
```
Request Access (/request-access)
    ├── Fill out form (email, name)
    ├── Submit request
    ├── See success message
    └── Wait for admin approval in Clerk Dashboard
```

### 3. Approved User (Not Signed In)
```
Sign In (/sign-in)
    ├── Enter email/password
    ├── Or use social login (Google, GitHub, etc.)
    ├── Authenticate with Clerk
    └── Redirect to /dashboard
```

### 4. Authenticated User
```
Dashboard (/dashboard)
    ├── View user profile
    ├── Access protected content
    ├── View metrics and analytics
    └── Sign out → redirect to /sign-in
```

## Route Protection

### Public Routes (No Auth Required)
- `/` - Landing page
- `/sign-in` - Sign in page
- `/request-access` - Waitlist page

### Protected Routes (Auth Required)
- `/dashboard` - Main dashboard
  - Redirects to `/sign-in` if not authenticated
  - Shows loading state while checking auth
  - Displays content when authenticated

## Clerk Integration Points

### Client-Side (Browser)
```javascript
// Initialize Clerk
const clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
await clerk.load();

// Check authentication
if (clerk.user) {
  // User is signed in
  // Show protected content
} else {
  // User is not signed in
  // Redirect to sign-in
}

// Mount UI components
clerk.mountSignIn(element, options);
clerk.mountWaitlist(element, options);
clerk.mountUserButton(element, options);
```

### Server-Side (API Routes)
```typescript
// Verify session token
const sessionToken = request.headers.get('cookie');
// Validate with Clerk API
// Return user data or 401
```

## Data Flow

### Sign In Flow
```
User enters credentials
    ↓
Clerk validates credentials
    ↓
Clerk creates session
    ↓
Session token stored in cookie
    ↓
User redirected to /dashboard
    ↓
Dashboard checks session
    ↓
Content displayed
```

### Waitlist Flow
```
User submits request
    ↓
Clerk stores in waitlist
    ↓
Admin notified
    ↓
Admin approves in dashboard
    ↓
User receives email
    ↓
User can now sign in
```

### Sign Out Flow
```
User clicks sign out
    ↓
Clerk.signOut() called
    ↓
Session cleared
    ↓
Cookie removed
    ↓
Redirect to /sign-in
```

## Security Layers

1. **Session Management**
   - Secure HTTP-only cookies
   - Automatic session refresh
   - Configurable session lifetime

2. **CSRF Protection**
   - Built into Clerk
   - Token validation on requests

3. **Rate Limiting**
   - Clerk handles rate limiting
   - Prevents brute force attacks

4. **Email Verification**
   - Optional email verification
   - Configurable in Clerk Dashboard

5. **MFA (Optional)**
   - SMS or authenticator app
   - Additional security layer

## Error Handling

### Common Scenarios
```
Missing Clerk Keys
    → Show error message
    → Prevent app from loading

Invalid Credentials
    → Clerk shows error
    → User can retry

Session Expired
    → Redirect to /sign-in
    → Show "Session expired" message

Network Error
    → Show error message
    → Retry button
```

## Customization Points

### Appearance
- Custom CSS classes
- Theme colors
- Layout adjustments
- Logo and branding

### Behavior
- Redirect URLs
- Session duration
- Required fields
- Social providers

### Content
- Welcome messages
- Email templates
- Error messages
- Success messages

---

**Need more details?** Check the other documentation files for specific implementation details.
