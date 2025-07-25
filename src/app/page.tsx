// app/page.tsx (Next.js 15.4 Homepage content)
import React from 'react';
// (If using next/image: import Image from "next/image";)

export default function HomePage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-accent">
      {/* Text content */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-display text-secondary mb-4">
          Eclipsed Citadel
        </h1>
        <p className="text-xl font-body text-secondary mb-6">
          Where Innovation Meets Imagination
        </p>
        <a href="#start" 
           className="inline-block bg-primary text-accent font-bold px-5 py-3 rounded shadow hover:bg-opacity-90">
          Get Started
        </a>
      </div>

      {/* Nova mascot image */}
      <img src="/nova.png" alt="Nova the Mascot" className="w-64 h-auto" />
      {/* If using next/image, it would look like:
      <Image src="/nova.png" alt="Nova the Mascot" width={256} height={256} />
      */}
    </section>
  );
}
