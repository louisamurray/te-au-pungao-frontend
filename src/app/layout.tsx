import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter font as an example
import "./globals.css";
import { I18nextProvider } from 'react-i18next';
import i18n from '../il8n';

const inter = Inter({
  variable: "--font-inter",  // Define the font variable
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Te Au Pūngao",
  description: "Your gateway to innovation and collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`} // Apply the font variable
      >
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}
