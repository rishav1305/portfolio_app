import { ChevronDown, Linkedin, Github, Mail } from "lucide-react";

import { getSiteConfig } from "@/services/siteConfig";
import { getCaseStudies } from "@/services/caseStudies";
import { getBrands } from "@/services/brands";
import { getTestimonials } from "@/services/testimonials";
import TypewriterRole from "@/components/ui/TypewriterRole";

export default async function Home() {
  const [siteConfig, caseStudies, brands, testimonials] = await Promise.all([
    getSiteConfig(),
    getCaseStudies(),
    getBrands(),
    getTestimonials(),
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
            className="font-serif text-6xl md:text-8xl font-bold text-[#F8FAFC] mb-4"
          >
            {name}
          </h1>

          {/* Typewriter roles */}
          <div className="text-2xl md:text-3xl font-serif mb-6 h-10">
            <TypewriterRole />
          </div>

          {/* Value proposition */}
          <p className="text-base md:text-lg text-[#94A3B8] mb-8 max-w-2xl mx-auto leading-relaxed">
            I build production AI systems that reduce costs by 60% and turn raw data into business decisions.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 mb-10 text-sm">
            <div className="text-center">
              <span className="text-2xl font-bold text-[#CA8A04]">8+</span>
              <span className="block text-[#64748B]">Years</span>
            </div>
            <div className="w-px h-8 bg-[#1E293B]" />
            <div className="text-center">
              <span className="text-2xl font-bold text-[#CA8A04]">10+</span>
              <span className="block text-[#64748B]">Brands</span>
            </div>
            <div className="w-px h-8 bg-[#1E293B]" />
            <div className="text-center">
              <span className="text-2xl font-bold text-[#CA8A04]">31</span>
              <span className="block text-[#64748B]">Projects</span>
            </div>
          </div>

          {/* Availability indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CA8A04] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CA8A04]"></span>
            </span>
            <span className="text-sm text-[#64748B]">Available for projects starting Q2 2026</span>
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-[#CA8A04] text-[#020617] font-semibold rounded-full px-8 py-3 hover:bg-[#EAB308] transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href="#selected-work"
              className="inline-block border border-[#CA8A04] text-[#CA8A04] rounded-full px-8 py-3 hover:bg-[#CA8A04] hover:text-[#020617] transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="w-6 h-6 text-[#CA8A04]" />
        </div>
      </section>

      {/* Proof Bar */}
      <section className="bg-[#0F172A] border-t border-b border-[#1E293B] py-8">
        <p className="text-center text-[10px] font-semibold text-slate-500 uppercase tracking-[0.25em] mb-6">
          Trusted by Industry Leaders
        </p>
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="h-7 md:h-9 max-w-[120px] md:max-w-[150px] object-contain brightness-0 invert opacity-40 hover:opacity-90 transition-opacity duration-300"
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
      <section id="selected-work" className="bg-[#0F172A] py-24 md:py-32">
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
                  <div className="flex flex-wrap gap-8 pt-4 border-t border-[#1E293B]">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <span className="block text-2xl font-bold text-[#CA8A04]">
                          {metric.value}
                        </span>
                        <span className="block text-xs text-[#64748B] mt-1">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <section className="bg-[#020617] py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="glass-card p-8 md:p-12 text-center">
              <span className="text-4xl text-[#CA8A04] block mb-6">&ldquo;</span>
              <p className="font-serif text-xl md:text-2xl text-[#F8FAFC] italic leading-relaxed mb-8">
                {testimonials[0].text}
              </p>
              <div>
                <span className="text-[#F8FAFC] font-semibold">{testimonials[0].name}</span>
                <span className="text-[#64748B]"> &middot; </span>
                <span className="text-[#94A3B8]">{testimonials[0].position}</span>
                {testimonials[0].company && (
                  <>
                    <span className="text-[#64748B]">, </span>
                    <span className="text-[#CA8A04]">{testimonials[0].company}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

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
            <a
              href="https://www.reddit.com/user/MasterApplication717/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#CA8A04] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm6.066 13.612c.037.201.057.406.057.613 0 3.133-3.648 5.672-8.148 5.672s-8.148-2.539-8.148-5.672c0-.207.02-.412.057-.613a1.622 1.622 0 01-.675-1.309 1.624 1.624 0 012.773-1.151 7.938 7.938 0 014.34-1.379l.822-3.862a.346.346 0 01.41-.268l2.733.585a1.143 1.143 0 012.14.503 1.143 1.143 0 01-1.14 1.143 1.145 1.145 0 01-1.107-.86l-2.43-.52-.735 3.448a7.896 7.896 0 014.284 1.376 1.624 1.624 0 012.773 1.151 1.622 1.622 0 01-.675 1.309zm-10.6 1.049a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286zm6.26 2.181c-.078.078-.576.514-1.727.514s-1.649-.436-1.727-.514a.349.349 0 00-.493.493c.107.107.672.631 2.22.631 1.548 0 2.113-.524 2.22-.631a.349.349 0 00-.493-.493zm-.908-2.181a1.143 1.143 0 100-2.286 1.143 1.143 0 000 2.286z" />
              </svg>
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
