// Mark the component as a client component first
'use client'; 

import { Inter } from "next/font/google";
import "./globals.css";
import { I18nextProvider } from 'react-i18next';
import i18n from '../il8n';

// Define the Inter font
const inter = Inter({
  variable: "--font-inter", // Font variable for styling
  subsets: ["latin"],
});

// Client-side component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`} // Apply Inter font
      >
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
