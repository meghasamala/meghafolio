import React from "react";
import "./styles/styles.css";
import localFont from 'next/font/local'
import { Fraunces } from 'next/font/google';
import type { Viewport } from 'next'
import Head from "next/head";

const fraunces = Fraunces({
  weight: ["200","300","600","700"],
  subsets: ['latin'],
  variable: '--font-fraunces'
})
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0
}

// free font from: https://authentic.website/
const authenticSans = localFont({
  src: './styles/fonts/authentic-sans-60-210330/desktop/authentic-sans-60.otf',
  variable: '--font-authenticsans'
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="m-0 p-0 flex flex-col min-h-full min-w-fit max-[640px]:scale-70">
      <Head>
        <title>Megha&apos;s Personal Website</title>
      </Head>
      <body className={`${authenticSans.variable} ${fraunces.variable} m-0 p-0 flex flex-col min-h-full min-w-fit flex-1 h-full text-center bg-[#e6e6e6] font-sans` }>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;