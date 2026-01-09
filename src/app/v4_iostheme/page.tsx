'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import portfolioData from '@/data/portfolioData';

// Import iOS Components
import IOSBrandMarquee from './components/IOSBrandMarquee';
import IOSImpactMetricCard from './components/IOSImpactMetricCard';
import IOSFreelanceGrid from './components/IOSFreelanceGrid';
import IOSDomainExpertise from './components/IOSDomainExpertise';
import IOSExperienceTimeline from './components/IOSExperienceTimeline';
import IOSEducation from './components/IOSEducation';
import IOSTestimonials from './components/IOSTestimonials';
import IOSBlogPreview from './components/IOSBlogPreview';

// --- Assets & Data ---
const Icons = {
    Battery: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m12 7v6m-4-6v6m4-6v6" />
        </svg>
    ),
    Wifi: () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12.55a11 11 0 0114.08 0M1.64 9.2a15 15 0 0120.72 0m-4.2 9.48a3.3 3.3 0 01-4.24 0M12 20h.01" />
        </svg>
    ),
    BatteryIcon: () => (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    )
};

// --- Components ---

const IOSWidget = ({
    children,
    className = "",
    size = "medium",
    delay = 0
}: {
    children: React.ReactNode;
    className?: string;
    size?: "small" | "medium" | "large" | "wide";
    delay?: number;
}) => {
    const gridClasses = {
        small: "col-span-1 row-span-1",        // 1x1
        medium: "col-span-1 sm:col-span-2 row-span-1", // 2x1
        large: "col-span-2 row-span-2",        // 2x2
        wide: "col-span-2 sm:col-span-4 row-span-1", // 4x1
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.1, type: "spring", stiffness: 100 }}
            className={`relative overflow-hidden rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ${gridClasses[size]} ${className}`}
        >
            {children}
        </motion.div>
    );
};

const DockItem = ({ icon, label, onClick }: { icon: React.ReactNode, label: string, onClick?: () => void }) => (
    <motion.button
        whileHover={{ scale: 1.2, y: -10 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-1 group"
        onClick={onClick}
    >
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:bg-white/20 transition-all">
            {icon}
        </div>
    </motion.button>
);

const StatusBar = () => {
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        updateTime();
        const interval = setInterval(updateTime, 1000 * 60);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-10 px-6 flex items-center justify-between z-50 text-white text-xs font-semibold mix-blend-difference pointer-events-none">
            <div className="w-1/3">{time}</div>
            <div className="w-1/3 flex justify-center">
                <div className="bg-black/80 px-4 py-1.5 rounded-full backdrop-blur-md hidden sm:block">
                    <span className="text-white/90">Dynamic Island</span>
                </div>
            </div>
            <div className="w-1/3 flex justify-end gap-2 items-center">
                <Icons.Wifi />
                <div className="w-6 h-3 border border-white/50 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-white w-[80%] rounded-sm"></div>
                </div>
            </div>
        </div>
    );
};

export default function IOSPage() {
    const { personalInfo, caseStudies, projects, skillRadarData } = portfolioData;

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#000000] text-white font-[family-name:var(--font-geist-sans)] selection:bg-blue-500/30">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <StatusBar />

            <main className="relative z-10 container mx-auto px-4 pb-48 pt-16 sm:pt-24 max-w-7xl space-y-24">

                {/* Header / Hero */}
                <div className="flex flex-col md:flex-row items-center justify-between" id="home">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-6xl md:text-8xl font-thin tracking-tighter"
                        >
                            {personalInfo.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-white/60 mt-2 font-light"
                        >
                            {personalInfo.title}
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-6 md:mt-0"
                    >
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 relative">
                            <Image
                                src="/images/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Bento Grid (Summary) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto" id="about">
                    <IOSWidget size="wide" className="bg-gradient-to-br from-blue-900/40 to-black/40 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-4 text-blue-200">About Me</h3>
                        <p className="text-lg leading-relaxed text-white/80 font-light">
                            {personalInfo.shortBio}
                        </p>
                    </IOSWidget>
                    <IOSWidget size="small" delay={1} className="bg-gradient-to-br from-green-500/20 to-emerald-900/20 p-6 flex flex-col items-center justify-center text-center group hover:bg-green-500/30 transition-colors">
                        <span className="text-4xl font-black text-green-400">7k+</span>
                        <span className="text-sm font-medium text-white/60 mt-2 uppercase tracking-wide">Users Impacted</span>
                    </IOSWidget>
                    <IOSWidget size="small" delay={2} className="bg-white/5 p-6 flex flex-col items-center justify-center text-center border-t border-white/10">
                        <span className="text-4xl font-black text-blue-400">{new Date().getFullYear() - personalInfo.yearsExperienceStartYear}+</span>
                        <span className="text-sm font-medium text-white/60 mt-2 uppercase tracking-wide">Years Exp</span>
                    </IOSWidget>
                    <IOSWidget size="large" delay={3} className="bg-black/50 p-6 relative group">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                        <h3 className="text-xl font-bold mb-4 relative z-10 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                            Top Skills
                        </h3>
                        <div className="relative z-10 flex flex-wrap gap-2">
                            {skillRadarData?.map((skill, i) => (
                                <div key={i} className="flex items-center justify-between w-full mb-2">
                                    <span className="text-sm text-gray-300">{skill.subject}</span>
                                    <div className="h-1.5 w-24 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(skill.A / skill.fullMark) * 100}%` }}
                                            className="h-full bg-purple-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            )).slice(0, 6)}
                        </div>
                    </IOSWidget>
                    <IOSWidget size="medium" delay={4} className="bg-gray-900/60 p-0 relative group cursor-pointer">
                        {projects && projects[0] && (
                            <>
                                <Image
                                    src={projects[0].thumbnail || projects[0].image || "/images/projects/thumbnail/portfolio_app.png"}
                                    alt="Case study"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity group-hover:scale-105 duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                                    <span className="text-xs font-bold text-blue-400 uppercase mb-1 block">Featured Project</span>
                                    <h3 className="text-xl font-bold">{projects[0].title}</h3>
                                </div>
                            </>
                        )}
                    </IOSWidget>
                    <IOSWidget size="small" delay={5} className="bg-blue-600 hover:bg-blue-500 transition-colors p-6 flex flex-col justify-between cursor-pointer">
                        <Link href="#contact" className="h-full flex flex-col justify-between">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-bold text-lg">Contact Me</span>
                        </Link>
                    </IOSWidget>
                    <IOSWidget size="wide" delay={2} className="bg-white/5 p-6 overflow-hidden">
                        <h3 className="text-xl font-bold mb-4 text-white/90">Services</h3>
                        <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-hide">
                            {portfolioData.services.map((s) => (
                                <div key={s.id} className="min-w-[200px] bg-white/5 p-4 rounded-3xl border border-white/10 shrink-0 snap-center hover:bg-white/10 transition-colors">
                                    <h4 className="font-bold text-blue-300 mb-1">{s.title}</h4>
                                    <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">{s.description}</p>
                                </div>
                            ))}
                        </div>
                    </IOSWidget>
                </div>

                {/* Brand Marquee */}
                <section>
                    <IOSBrandMarquee />
                </section>

                {/* Testimonials */}
                <section>
                    <h2 className="text-3xl font-thin mb-8 text-white/90 px-4">Testimonials</h2>
                    <IOSTestimonials testimonials={portfolioData.testimonials || []} />
                </section>

                {/* Impact / Strategic Wins */}
                <section id="impact">
                    <h2 className="text-3xl font-thin mb-8 text-white/90 px-4">Key Strategic Wins</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {caseStudies?.map((study) => (
                            <IOSImpactMetricCard key={study.id} study={study} />
                        ))}
                    </div>
                </section>

                {/* Experience Timeline */}
                <section id="experience">
                    <h2 className="text-3xl font-thin mb-8 text-white/90 px-4">Professional Journey</h2>
                    <IOSExperienceTimeline experiences={portfolioData.professionalExperience} showClients={true} />
                </section>

                {/* Freelance Grid */}
                <section id="freelance">
                    <h2 className="text-3xl font-thin mb-8 text-white/90 px-4">Freelance & Consulting</h2>
                    <IOSFreelanceGrid experiences={portfolioData.freelanceExperience} />
                </section>

                {/* Domain Expertise */}
                <section>
                    <h2 className="text-2xl font-thin mb-6 text-white/60 px-4 uppercase tracking-widest text-sm">Industry Expertise</h2>
                    <IOSDomainExpertise className="" />
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-3xl font-thin mb-8 text-white/90 px-4">Education</h2>
                    <IOSEducation education={portfolioData.education} />
                </section>

                {/* Blog */}
                <IOSBlogPreview />

                {/* Footer */}
                <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm" id="contact">
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                    <div className="mt-4 flex justify-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </footer>

            </main>

            {/* Dock */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <div className="flex items-end gap-3 px-4 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl">
                    <DockItem icon={<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>} label="Home" onClick={() => scrollToSection('home')} />
                    <DockItem icon={<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>} label="Projects" onClick={() => scrollToSection('impact')} />
                    <DockItem icon={<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} label="Experience" onClick={() => scrollToSection('experience')} />
                    <DockItem icon={<svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} label="Contact" onClick={() => scrollToSection('contact')} />
                </div>
            </div>

        </div>
    );
}
