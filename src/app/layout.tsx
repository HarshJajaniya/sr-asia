import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";

import "./globals.css";
import { Roboto_Flex  } from 'next/font/google';
import { Toaster } from "react-hot-toast";

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
      <head>
        
 <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M53CB0JDJ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M53CB0JDJ2');
          `}
        </Script>
      </head>
      <body
        className={`${robotoFlex.className} ${robotoFlex.className} antialiased bg-[#EEFAFE]`}
      >
 
      <main>{children}
         <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      </main>

        <Analytics/>
      </body>
    </html>
  );
}
