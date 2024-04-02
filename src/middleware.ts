import {
  NextMiddleware,
  NextResponse,
} from "next/server";

import { authMiddleware } from "./middlewares/auth.middleware";
import { localeMiddleware } from "./middlewares/locale.middleware";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

function stackMiddlewares(functions: MiddlewareFactory[] = [], index = 0): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = stackMiddlewares(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

const middlewares = [
  authMiddleware,
  localeMiddleware,
];

export default stackMiddlewares(middlewares as MiddlewareFactory[]);

export const config = {
  matcher: [
    "/(ru)/:path*",
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
