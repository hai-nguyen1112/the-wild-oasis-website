// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   console.log(request);

//   return NextResponse.redirect(new URL('/about', request.url));
// }
import { auth } from '@/app/_lib/auth';

// This middleware will be called when the requested route matches the matcher. The auth middleware will run the authorized callback in authConfig in auth.js
export const middleware = auth;

export const config = {
  matcher: ['/account'],
};
