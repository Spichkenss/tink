import createMiddleware from "next-intl/middleware";

import { pathnames } from "@/shared/config/navigation";

export const localeMiddleware = (next: any) => {
  return createMiddleware({
    // A list of all locales that are supported
    locales: ["ru"],

    // Used when no locale matches
    defaultLocale: "ru",
    pathnames,
    localeDetection: true,
    localePrefix: "never",
  });
};
