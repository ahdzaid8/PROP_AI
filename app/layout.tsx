import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROP_AI | Tech-Luxury Real Estate Platform",
  description: "Don't Search for Property. Let AI Find It For You. High-end real estate for Sale, Buying, Rental, and Brokerage.",
};

import { LanguageProvider } from '@/context/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton';
import ChatbotButton from '@/components/ChatbotButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <WhatsAppButton />
          <ChatbotButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
