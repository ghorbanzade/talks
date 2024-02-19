// Copyright 2024 Pejman Ghorbanzade

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pejman Ghorbanzade',
  description: 'Personal Website of Pejman Ghorbanzade'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 font-sans antialiased dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
