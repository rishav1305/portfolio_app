import React from 'react';
import portfolioData from "@/data/portfolioData";
import Image from 'next/image';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function TechSkills() {
  const { skills } = portfolioData;

  // Calculate percentage for progress bar
  const getPercentage = (level: number) => {
    return Math.min(100, Math.max(0, (level / 5) * 100));
  };

  // Function to get color based on proficiency level
  const getLevelColor = (level: number) => {
    if (level >= 4.5) return "from-emerald-400 to-teal-500 shadow-emerald-500/50";
    if (level >= 4) return "from-blue-400 to-indigo-500 shadow-blue-500/50";
    if (level >= 3) return "from-violet-400 to-purple-500 shadow-violet-500/50";
    return "from-amber-400 to-orange-500 shadow-amber-500/50";
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 pt-24 py-8 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/30 rounded-full blur-[120px] animate-blob mix-blend-screen pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6">
          <Breadcrumb overrides={{ "tech-skills": "Technical Skills" }} className="text-white/80 hover:text-white" />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 drop-shadow-sm">
            Technical Proficiency
          </h1>
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive breakdown of my technical capabilities.
            <span className="block mt-2 text-sm text-blue-200/60 uppercase tracking-widest font-semibold">
              Live Data • Automated Analysis
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div
              key={category}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

              <h2 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4 flex items-center justify-between">
                {category}
                <span className="text-xs font-normal px-2 py-1 rounded-full bg-white/10 text-blue-200 border border-white/5">
                  {skillsList.length} items
                </span>
              </h2>

              <div className="space-y-5">
                {[...skillsList]
                  .sort((a, b) => b.level - a.level)
                  .map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-end mb-1">
                        <h3 className="text-sm font-medium text-blue-50">
                          {skill.name}
                        </h3>
                        <span className="text-xs font-mono text-blue-300/80">
                          {skill.level} / 5
                        </span>
                      </div>

                      {/* Modern Progress Bar */}
                      <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} shadow-lg transform origin-left transition-transform duration-1000 ease-out`}
                          style={{ width: `${getPercentage(skill.level)}%` }}
                        ></div>
                      </div>

                      {/* Interaction: Glow on hover */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-white/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend Section */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-white">Proficiency Matrix</h2>
              <p className="text-blue-200/80 leading-relaxed">
                My skills are rated on a capability scale derived from practical experience and project delivery.
                This automated index reflects current operational readiness.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30"></div>
                  <div>
                    <span className="text-emerald-300 font-bold text-sm block">Expert (5.0)</span>
                    <span className="text-slate-400 text-xs">Architect level, deep internal knowledge</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg shadow-blue-500/30"></div>
                  <div>
                    <span className="text-blue-300 font-bold text-sm block">Advanced (4.0)</span>
                    <span className="text-slate-400 text-xs">Production ready, highly proficient</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-2 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 shadow-lg shadow-violet-500/30"></div>
                  <div>
                    <span className="text-violet-300 font-bold text-sm block">Intermediate (3.0)</span>
                    <span className="text-slate-400 text-xs">Working knowledge, can execute tasks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square p-2 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full border border-white/10 animate-pulse-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2 backdrop-blur-sm p-6 rounded-2xl bg-slate-900/40 border border-white/5 shadow-2xl">
                    <div className="text-5xl font-bold text-white tracking-tighter">100+</div>
                    <div className="text-blue-300 font-mono text-sm tracking-widest uppercase">Technologies</div>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                {/* Decorative orbits */}
                <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-spin-reverse-slower"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}