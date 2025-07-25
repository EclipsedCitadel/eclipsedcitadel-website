import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-background text-foreground font-sans px-6 sm:px-12 py-20">
      {/* Left: Nova mascot */}
      <div className="flex justify-center md:justify-end mb-12 md:mb-0">
        <Image
          src="/nova.png"
          alt="Nova the Watcher mascot"
          width={380}
          height={380}
          priority
          className="max-w-xs sm:max-w-sm md:max-w-md"
        />
      </div>

      {/* Right: Brand intro + CTAs */}
      <div className="flex flex-col gap-6 md:pl-12 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight">
          Welcome to Eclipsed Citadel
        </h1>
        <p className="text-lg sm:text-xl font-lato text-secondary max-w-xl">
          AI-Powered Marketing for Small Business Brilliance. We create videos,
          graphics, blogs, and automation so you can grow — fast.
        </p>

        <div className="flex gap-4 justify-center md:justify-start mt-4 flex-wrap">
          <a
            href="/services"
            className="bg-primary text-background px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Explore Services
          </a>
          <a
            href="/samples"
            className="border border-foreground px-6 py-3 rounded-md font-semibold hover:bg-foreground hover:text-background transition"
          >
            See Samples
          </a>
        </div>
      </div>
    </main>
  );
}
