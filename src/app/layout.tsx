// app/layout.tsx (Next.js 15.4 App Router layout)
import React, { ReactNode } from 'react';

export const metadata = { title: "Eclipsed Citadel" };  // example metadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-body text-secondary bg-white">
        {/* Top Navigation Bar */}
        <nav className="w-full bg-secondary text-accent px-4 py-3 flex items-center">
          {/* Logo Image */}
          <img src="/logo.svg" alt="Eclipsed Citadel Logo" className="h-8 w-auto" />
          {/* (You can add nav links or buttons here if needed) */}
        </nav>

        {/* Main content area */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
