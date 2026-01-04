'use client';

import Link from "next/link";
import dynamic from "next/dynamic";

// Import NetBackground with no SSR
const BackgroundComponent = dynamic(
  () => import("@/components/ui/NetBackground"),
  { ssr: false }
);

interface HeroSectionWithHexagonsProps {
  // Add any props you might need
}

const HeroSectionWithHexagons: React.FC<HeroSectionWithHexagonsProps> = () => {
  return (
    <section className="relative bg-gray-100 min-h-[90vh]">
      {/* Background container with explicit dimensions */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <BackgroundComponent className="min-h-[90vh]" />
      </div>

      <div className="relative z-10 py-32 px-6 md:px-20 flex flex-col items-center text-center max-w-6xl mx-auto min-h-[90vh] justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
          <span className="block">RISHAV</span>
          <span className="block text-gray-800">CHATTERJEE</span>
        </h1>
        <div className="w-32 h-1.5 bg-blue-600 mb-12 rounded-full opacity-80"></div>
        <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-4xl font-light leading-relaxed">
          Hi! I&apos;m a <span className="font-semibold text-gray-900">Lead AI Engineer</span>, I specialize in architecting <span className="font-medium text-blue-700">scalable Agentic AI ecosystems</span> across cloud and on-premise environments. I bridge the gap between complex <span className="font-semibold text-gray-900">data engineering</span> and actionable <span className="font-semibold text-gray-900">business intelligence</span> to build <span className="font-medium text-blue-700">autonomous systems</span> that solve high-stakes enterprise challenges.
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
            className="rounded-full border border-black hover:bg-black hover:text-white text-black px-8 py-3 font-medium text-lg transition-colors"
          >
            PROJECTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWithHexagons;
