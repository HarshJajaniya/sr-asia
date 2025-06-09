import type { Metadata } from "next";

import "./globals.css";
import { Karla } from 'next/font/google';

const karla = Karla({
  subsets: ['latin'],
  weight: ['500'],
});




export const metadata: Metadata = {
  title: "sr-asia",
  description: "official website of sr-asia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} ${karla.className} antialiased`}
      >
 
      <main>{children}</main>
        
      </body>
    </html>
  );
}
