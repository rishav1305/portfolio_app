import React from 'react';
import { getSkillCategories } from '@/services/skills';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default async function TechSkills() {
  const skills = await getSkillCategories();

  const getPercentage = (level: number) => {
    return Math.min(100, Math.max(0, (level / 5) * 100));
  };

  const getLevelColor = (level: number) => {
    if (level >= 4.5) return 'bg-[#CA8A04]';
    if (level >= 4) return 'bg-[#CA8A04]/80';
    if (level >= 3) return 'bg-[#CA8A04]/60';
    return 'bg-[#CA8A04]/40';
  };

  return (
    <div className="min-h-screen bg-[#0F172A] pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#CA8A04]/5 rounded-full blur-3xl opacity-30 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-6">
          <Breadcrumb overrides={{ "tech-skills": "Technical Skills" }} />
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-[#F8FAFC]">
            Technical Proficiency
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            A comprehensive breakdown of my technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div
              key={category}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-serif font-bold mb-6 text-[#F8FAFC] border-b border-[#1E293B] pb-4 flex items-center justify-between">
                {category}
                <span className="text-xs font-normal px-2 py-1 rounded-full bg-[#CA8A04]/20 text-[#CA8A04] border border-[#CA8A04]/30">
                  {skillsList.length} items
                </span>
              </h2>

              <div className="space-y-5">
                {[...skillsList]
                  .sort((a, b) => b.level - a.level)
                  .map((skill, index) => (
                    <div key={index} className="relative">
                      <div className="flex justify-between items-end mb-1">
                        <h3 className="text-sm font-medium text-[#F8FAFC]">
                          {skill.name}
                        </h3>
                        <span className="text-xs font-mono text-[#64748B]">
                          {skill.level} / 5
                        </span>
                      </div>

                      <div className="h-2 w-full bg-[#020617] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                          style={{ width: `${getPercentage(skill.level)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
