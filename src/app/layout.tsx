import type { Metadata } from "next";

import "./globals.css";
import { Roboto_Flex  } from 'next/font/google';

const robotoFlex = Roboto_Flex({
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
        className={`${robotoFlex.className} ${robotoFlex.className} antialiased bg-[#EEFAFE]`}
      >
 
      <main>{children}</main>
        
      </body>
    </html>
  );
}
