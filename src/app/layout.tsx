import "./globals.css";
import { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "Eclipsed Citadel",
  description: "Where Innovation Meets Imagination",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-lato min-h-screen flex flex-col">
        <header className="flex items-center justify-between p-6 border-b border-brand-secondary bg-white shadow-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Eclipsed Citadel Logo"
              width={40}
              height={40}
            />
            <h1 className="text-2xl font-montserrat font-bold text-brand-secondary">
              Eclipsed Citadel
            </h1>
          </div>
          <nav>
            <a
              href="#get-started"
              className="text-brand-primary font-semibold hover:underline"
            >
              Get Started
            </a>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="text-center p-4 text-sm text-gray-500">
          © 2025 Eclipsed Citadel. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
