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
        <div className="w-24 h-1.5 bg-blue-600 mb-12 rounded-full opacity-80"></div>
        <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-2xl font-light leading-relaxed">
          Hi! I&apos;m an <span className="font-semibold text-gray-900">AI Engineering Lead</span> focused on engineering <span className="font-medium text-blue-700">scalable, agentic solutions</span> in the cloud and on-premise. With a strong base in <span className="font-medium text-blue-700">data engineering</span> and <span className="font-medium text-blue-700">business intelligence</span>.
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
            PORTFOLIO
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionWithHexagons;
