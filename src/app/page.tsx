import { ChevronDown, Linkedin, Github, Mail } from "lucide-react";

import { getSiteConfig } from "@/services/siteConfig";
import { getCaseStudies } from "@/services/caseStudies";
import { getBrands } from "@/services/brands";

export default async function Home() {
  const [siteConfig, caseStudies, brands] = await Promise.all([
    getSiteConfig(),
    getCaseStudies(),
    getBrands(),
  ]);

  const name = siteConfig?.name || "Rishav Chatterjee";
  const email = siteConfig?.email || "mail@rishavchatterjee.com";
  const linkedinUrl = siteConfig?.social_media?.linkedin || "";
  const githubUrl = siteConfig?.social_media?.github || "";

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
        {/* Gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#CA8A04]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1
            id="hero-name"
            className="font-serif text-6xl md:text-8xl font-bold text-[#F8FAFC] mb-6"
          >
            {name}
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] mb-10">
            AI Engineer &amp; Consultant
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#CA8A04] text-[#020617] font-semibold rounded-full px-8 py-3 hover:bg-[#EAB308] transition-colors"
          >
            Schedule a Call
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-[#CA8A04]" />
        </div>
      </section>

      {/* Proof Bar */}
      <section className="bg-[#0F172A] border-t border-b border-[#1E293B] py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-12 flex-wrap opacity-50">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-8 object-contain grayscale brightness-200 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </section>

      {/* What I Do */}
      <section className="bg-[#020617] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8FAFC] mb-16 text-center">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI System Architecture",
                desc: "End-to-end AI systems — from RAG pipelines to production LLM deployments.",
                tags: "Python \u00b7 FastAPI \u00b7 LangChain \u00b7 RAG",
              },
              {
                title: "Data Platform Consulting",
                desc: "Scalable data infrastructure that turns raw data into business decisions.",
                tags: "Spark \u00b7 Airflow \u00b7 dbt \u00b7 Snowflake",
              },
              {
                title: "AI Research & Evaluation",
                desc: "Benchmark, evaluate, and fine-tune models for your specific domain.",
                tags: "LLMs \u00b7 Benchmarks \u00b7 Fine-tuning",
              },
            ].map((service) => (
              <div key={service.title} className="glass-card p-8">
                <div className="text-[#CA8A04] mb-4">
                  <span className="text-2xl">{"\u25C7"}</span>
                </div>
                <h3 className="font-serif text-xl text-[#F8FAFC] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="border-t border-[#CA8A04]/30 pt-4">
                  <span className="text-xs text-[#64748B]">{service.tags}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-[#0F172A] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8FAFC] mb-16 text-center">
            Selected Work
          </h2>
          <div className="space-y-6">
            {caseStudies.slice(0, 3).map((study, i) => (
              <div key={study.title} className="glass-card p-8 md:p-10">
                <span className="text-xs tracking-[0.2em] uppercase text-[#CA8A04] mb-2 block">
                  Case Study {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl text-[#F8FAFC] mb-6">
                  {study.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <span className="text-xs tracking-[0.15em] uppercase text-[#64748B] block mb-2">
                      Challenge
                    </span>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.15em] uppercase text-[#64748B] block mb-2">
                      Solution
                    </span>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs tracking-[0.15em] uppercase text-[#64748B] block mb-2">
                      Impact
                    </span>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      {study.impact}
                    </p>
                  </div>
                </div>
                {study.metrics && study.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-6">
                    {study.metrics.map((metric) => (
                      <span
                        key={metric.label}
                        className="text-xl font-semibold text-[#CA8A04]"
                      >
                        {metric.value}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#020617] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F8FAFC] mb-8">
            Let&apos;s Build Something Together
          </h2>
          <a
            href="/contact"
            className="inline-block bg-[#CA8A04] text-[#020617] font-semibold rounded-full px-8 py-3 hover:bg-[#EAB308] transition-colors mb-12"
          >
            Get In Touch
          </a>
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#CA8A04] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#CA8A04] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[#64748B] hover:text-[#CA8A04] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-[#64748B]">
            &copy; {new Date().getFullYear()} {name}
          </p>
        </div>
      </section>
    </main>
  );
}
