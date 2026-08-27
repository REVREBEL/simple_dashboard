import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // Get the session token from the cookie
  const sessionToken = request.headers.get('cookie')?.split('; ')
    .find(row => row.startsWith('__session='))
    ?.split('=')[1];

  if (!sessionToken) {
    return new Response(JSON.stringify({ user: null }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // In a real implementation, you would verify the session token with Clerk
  // For now, this is a placeholder
  return new Response(JSON.stringify({ 
    authenticated: true,
    message: 'User is authenticated' 
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
