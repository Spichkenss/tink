// eslint-disable-next-line no-shadow
export enum Page {
  HOME = "/",
  ACCOUNT = "/account",
  SIGNIN = "/auth/signin",
  SIGNUP = "/auth/signup",
  REQUESTS = "/admin/requests",
  ARCHIVE = "/admin/archive",
  WITHDRAW = "/admin/withdraw",
  COURSE = "/course"
}

export const protectedRoutes = [
  Page.ACCOUNT,
  Page.REQUESTS,
  Page.ARCHIVE,
  Page.WITHDRAW,
  Page.COURSE,
];

export const authRoutes = [
  Page.HOME,
  Page.SIGNIN,
  Page.SIGNUP,
];

export const DEFAULT_LOGIN_REDIRECT = Page.ACCOUNT;
