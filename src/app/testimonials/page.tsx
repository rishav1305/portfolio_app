import React from 'react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getTestimonials } from '@/services/testimonials';

export default async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <div className="min-h-screen bg-[#0F172A] pt-20">
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb />
          <h1 className="text-4xl font-serif font-bold text-center mb-12 text-[#F8FAFC]">Client Testimonials</h1>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 flex flex-col relative">
                {/* Gold quote mark */}
                <div className="text-[#CA8A04] text-6xl font-serif leading-none absolute top-4 right-6 opacity-30">&ldquo;</div>

                <div className="mb-6 flex items-center">
                  <div className="flex items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#CA8A04]/30">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#CA8A04]/20 text-[#CA8A04] text-2xl font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="ml-6">
                      <h3 className="font-bold text-2xl text-[#F8FAFC]">{testimonial.name}</h3>
                      <p className="text-[#94A3B8]">{testimonial.position}</p>
                      <div className="flex items-center">
                        <p className="text-[#CA8A04] font-medium">{testimonial.company}</p>
                        {testimonial.location && (
                          <p className="text-[#64748B] ml-2">
                            <span className="mx-1">&bull;</span>
                            {testimonial.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-6 pl-4 border-l-4 border-[#CA8A04]/30">
                  <p className="text-[#F8FAFC] font-serif italic text-lg leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                </div>

                <div className="mt-4 flex justify-end items-center">
                  <div className="text-xs text-[#64748B] font-medium tracking-wider px-3 py-1 bg-[#020617] border border-[#1E293B] rounded-full">VERIFIED CLIENT</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#94A3B8] max-w-2xl mx-auto mb-8">
              These are just a few of the clients I&apos;ve had the pleasure of working with. I pride myself on building strong professional relationships and delivering results that exceed expectations.
            </p>
            <a
              href="mailto:mail@rishavchatterjee.com"
              className="inline-flex items-center px-6 py-3 bg-[#CA8A04] text-[#020617] rounded-md hover:bg-[#EAB308] transition-colors font-medium"
            >
              Request a Reference
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
