import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from '@/components/SessionProvider';

export const metadata: Metadata = {
  title: "amlFraud | Blockchain Intelligence Platform",
  description: "Investigate, monitor, and detect crypto and digital asset fraud and financial crime with amlFraud's trusted blockchain intelligence platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // Determine direction for RTL languages
  const cookieStore = await cookies();
  const currentLocale = cookieStore.get('NEXT_LOCALE')?.value || locale;
  const dir = ['ar', 'ur', 'fa'].includes(currentLocale) ? 'rtl' : 'ltr';

  return (
    <html lang={currentLocale} dir={dir}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
