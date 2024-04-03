import { PropsWithChildren, Suspense } from "react";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import { Header } from "@/widgets/layout/header/ui";

import { inter } from "@/shared/config/fonts";
import { cn } from "@/shared/lib/utils";
import { Toaster } from "@/shared/ui/toaster";

import "@/shared/config/style/globals.css";

export const metadata: Metadata = {
  icons: ["/favicon.png"],
};

interface Props extends PropsWithChildren {
  params: {
    locale: string;
  };
}

const RootLayout = ({ children, params: { locale } }: Props) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <NextIntlClientProvider locale={locale}>
          <Toaster />
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
