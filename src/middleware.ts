import { clerkMiddleware } from '@clerk/astro/server';
import { defineMiddleware, sequence } from 'astro:middleware';

// 1. Your custom development route handler
const devRouteMiddleware = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (import.meta.env.DEV && url.pathname === '/-wf/ready') {
    return new Response(JSON.stringify({ ready: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  return next();
});

// 2. Export a single onRequest pipeline using sequence
export const onRequest = sequence(clerkMiddleware(), devRouteMiddleware);