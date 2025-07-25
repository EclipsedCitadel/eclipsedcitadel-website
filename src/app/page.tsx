import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-16 max-w-7xl mx-auto">
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-secondary">
          Where Innovation Meets Imagination
        </h2>
        <p className="text-lg text-gray-700 font-lato">
          Eclipsed Citadel helps small businesses shine using AI-powered content,
          strategy, and automation – all under one digital roof.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-brand-primary text-white px-6 py-3 rounded-2xl shadow-md hover:bg-opacity-90 transition"
        >
          Get Started
        </a>
      </div>
      <Image
        src="/nova.png"
        alt="Nova the Owl"
        width={500}
        height={500}
        priority
        className="drop-shadow-xl"
      />
    </section>
  );
}
