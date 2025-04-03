import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the user is authenticated by looking for a user object in localStorage
  // This is just a client-side check, in a real app you'd use cookies or JWT
  const isLoggedIn = request.cookies.has('auth');

  // Define protected routes that require authentication
  const protectedRoutes = ['/convert', '/profile', '/purchases', '/statements', '/credits', '/contact'];

  // Get the pathname from the URL
  const { pathname } = request.nextUrl;

  // Check if the request is for a protected route
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // If the route is protected and the user is not logged in, redirect to login
  if (isProtectedRoute && !isLoggedIn) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  // If the user is logged in and trying to access login or signup, redirect to dashboard
  if (isLoggedIn && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/convert', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
