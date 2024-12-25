import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import Container from '@/components/global/Container';
import Navbar from '@/components/navbar/Navbar';

import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store build with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
            <Navbar />
            <Container className="py-20">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
