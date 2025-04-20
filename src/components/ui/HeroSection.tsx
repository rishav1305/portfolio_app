'use client';

import Link from 'next/link';
import WavesBackground from "./WavesBackground";

export default function HeroSection() {
  return (
    <WavesBackground>
      <section className="relative py-32 px-6 md:px-20 flex flex-col items-center text-center max-w-6xl mx-auto min-h-[85vh] justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="block">RISHAV</span>
          <span className="block">CHATTERJEE</span>
        </h1>
        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
        <p className="text-xl md:text-2xl mb-10 text-white max-w-3xl">
          👋 Hi! I'm a <span className="font-bold">senior software engineer</span> specializing in{" "}
          <span className="font-bold text-blue-300">data visualization</span>. 
          I've worked with prestigious companies and developed extensive{" "}
          <span className="font-bold">educational content</span> that you might benefit from. ❤️
        </p>
        <div className="flex gap-6 flex-col sm:flex-row">
          <Link 
            href="/contact" 
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium text-lg transition-colors"
          >
            CONTACT
          </Link>
          <Link 
            href="/projects" 
            className="rounded-full border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 font-medium text-lg transition-colors"
          >
            PORTFOLIO
          </Link>
        </div>
      </section>
    </WavesBackground>
  );
}