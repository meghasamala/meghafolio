import React from "react";
import "./styles/styles.css";
import localFont from 'next/font/local'
import { Fraunces } from 'next/font/google';
import type { Viewport } from 'next'

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
    <html lang="en">
      <body className={`${authenticSans.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;