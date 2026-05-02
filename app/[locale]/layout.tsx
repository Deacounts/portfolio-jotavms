import type { Metadata } from "next";
import { Syne, Space_Mono, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DotGrid } from "@/components/ui/DotGrid";
import "../globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "João Vitor Matos · Da curiosidade ao dashboard",
    template: "%s · João Vitor Matos",
  },
  description:
    "Analista de dados em construção. Dashboards, análises e processos com curiosidade aplicada.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jotavms.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "João Vitor Matos",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${syne.variable} ${spaceMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg text-ink font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <DotGrid />
          <Header />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
