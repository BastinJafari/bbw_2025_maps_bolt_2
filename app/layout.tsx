import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Hackathon Starter Template',
  description:
    'The perfect foundation for your next hackathon project. Built with Next.js, TypeScript, Tailwind CSS, and Shadcn/ui.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      <Analytics />
    </html>
  );
}