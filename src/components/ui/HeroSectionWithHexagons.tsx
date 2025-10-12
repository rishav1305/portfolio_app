'use client';

import Link from "next/link";
import dynamic from "next/dynamic";

// Import HexagonBackground with no SSR - this is allowed in client components
const HexagonBackground = dynamic(
  () => import("@/components/ui/HexagonBackground"),
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
        <HexagonBackground className="min-h-[90vh]" />
      </div>
      
      <div className="relative z-10 py-32 px-6 md:px-20 flex flex-col items-center text-center max-w-6xl mx-auto min-h-[90vh] justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
          <span className="block">RISHAV</span>
          <span className="block">CHATTERJEE</span>
        </h1>
        <div className="w-20 h-1 bg-blue-500 mb-10"></div>
        <p className="text-xl md:text-2xl mb-10 text-black max-w-3xl">
          👋 Hi! I'm a <span className="font-bold text-blue-600">Project Lead</span> and{" "}
          <span className="font-bold text-blue-600">Data Specialist</span> focused on engineering scalable,{" "}
          <span className="font-bold text-black">AI-powered solutions</span> in the cloud. 
          With a strong base in <span className="font-bold">data engineering</span> and{" "}
          <span className="font-bold">business intelligence</span>, I've led projects in{" "}
          <span className="font-bold text-blue-600">Agentic AI</span> — from{" "}
          <span className="font-bold">LLM-based adaptive testing systems</span> to{" "}
          <span className="font-bold text-black">conversational analytics</span> that make data-driven insights instantly accessible.
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
