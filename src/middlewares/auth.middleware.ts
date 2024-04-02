import { NextResponse } from "next/server";
import NextAuth from "next-auth";

import authConfig from "@/shared/config/auth/auth-config";
import {
  authRoutes, DEFAULT_LOGIN_REDIRECT, Page, protectedRoutes,
} from "@/shared/config/routing";

const { auth } = NextAuth(authConfig);

const checkPath = (routes: Page[], pathname: string) => Object.values(routes)
  .map((page: Page) => page.toString())
  .includes(pathname);

export const authMiddleware = (next: any) => auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isProtectedRoute = checkPath(protectedRoutes, nextUrl.pathname);
  const isAuthRoute = checkPath(authRoutes, nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return next(req);
  }

  if (!isLoggedIn && isProtectedRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    return NextResponse.redirect(new URL(Page.SIGNIN, nextUrl));
  }

  return next(req);
});
