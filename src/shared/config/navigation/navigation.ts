import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

import { Page } from "../routing";

export const locales = ["ru"] as const;
export const localePrefix = "always";

function createEnumValueObject<E>(e: Record<number, string>): Record<string, string> {
  const enumObject: Record<number, string> = {};
  Object.keys(e).filter((key) => Number.isNaN(Number(key))).forEach((key) => {
    const val = e[key as any];
    enumObject[val as any] = val;
  });
  return enumObject;
}

export const pathnames = createEnumValueObject(Page) satisfies Pathnames<typeof locales>;

export const {
  Link, redirect, usePathname, useRouter, getPathname,
} = createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
