"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const pathname = usePathname();
  const nameRef = useRef<HTMLSpanElement>(null);
  const heroVisibleRef = useRef(true);

  const isHomepage = pathname === '/';

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const heroEl = document.getElementById('hero-name');
    if (!heroEl) {
      // Not on homepage — always show name in navbar
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [pathname]);

  // Animate navbar name via ref (avoids CSS transition/animation throttling)
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const show = !heroVisible;
    // Skip animation on initial render
    if (heroVisibleRef.current === heroVisible) return;
    heroVisibleRef.current = heroVisible;
    if (show) {
      // Animate in: opacity 0→1, translateX -20→0 over 300ms
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateX(-20px)';
      // Force reflow so the starting position is applied
      el.offsetHeight;
      el.style.transition = 'opacity 300ms ease-out, transform 300ms ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
      el.style.pointerEvents = 'auto';
    } else {
      // Snap hide immediately
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateX(-20px)';
      el.style.pointerEvents = 'none';
    }
  }, [heroVisible]);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 transition-all duration-300 bg-[#0F172A]/90 backdrop-blur-xl border-b border-[#1E293B]`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <span
                ref={nameRef}
                className="text-lg md:text-xl font-semibold whitespace-nowrap text-[#F8FAFC]"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  opacity: 0,
                  transform: 'translateX(-20px)',
                  pointerEvents: 'none' as const,
                }}
              >
                Rishav Chatterjee
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-[#F8FAFC]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {!isHomepage && <NavLink href="/" isActive={false}>Home</NavLink>}
            <NavLink href="/experience" isActive={pathname === '/experience'}>Experience</NavLink>
            <NavLink href="/projects" isActive={pathname === '/projects'}>Work</NavLink>
            <NavLink href="/tech-skills" isActive={pathname === '/tech-skills'}>Skills</NavLink>
            <NavLink href="/about" isActive={pathname === '/about'}>About</NavLink>
            <NavLink href="/blog" isActive={pathname.startsWith('/blog')}>Blog</NavLink>
            <NavLink href="/resume" isActive={pathname === '/resume'}>Resume</NavLink>
            <Link
              href="/contact"
              className="border border-[#CA8A04] text-[#CA8A04] rounded-full px-4 py-1 hover:bg-[#CA8A04] hover:text-[#020617] transition-colors text-sm font-medium uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — Full-screen dark overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#020617]/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center md:hidden">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8 text-[#94A3B8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="flex flex-col items-center space-y-8">
            {!isHomepage && <MobileNavLink href="/" isActive={false} onClick={closeMenu}>Home</MobileNavLink>}
            <MobileNavLink href="/experience" isActive={pathname === '/experience'} onClick={closeMenu}>Experience</MobileNavLink>
            <MobileNavLink href="/projects" isActive={pathname === '/projects'} onClick={closeMenu}>Work</MobileNavLink>
            <MobileNavLink href="/tech-skills" isActive={pathname === '/tech-skills'} onClick={closeMenu}>Skills</MobileNavLink>
            <MobileNavLink href="/about" isActive={pathname === '/about'} onClick={closeMenu}>About</MobileNavLink>
            <MobileNavLink href="/blog" isActive={pathname.startsWith('/blog')} onClick={closeMenu}>Blog</MobileNavLink>
            <MobileNavLink href="/resume" isActive={pathname === '/resume'} onClick={closeMenu}>Resume</MobileNavLink>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="border border-[#CA8A04] text-[#CA8A04] rounded-full px-8 py-2 text-2xl font-medium hover:bg-[#CA8A04] hover:text-[#020617] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

// Desktop navigation link
const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium uppercase transition-colors duration-200 ${isActive
        ? 'text-[#CA8A04] border-b-2 border-[#CA8A04]'
        : 'text-[#94A3B8] hover:text-[#CA8A04] hover:border-b-2 hover:border-[#CA8A04]'
        }`}
    >
      {children}
    </Link>
  );
};

// Mobile navigation link
const MobileNavLink = ({
  href,
  children,
  isActive,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-2xl font-medium transition-colors duration-200 ${isActive
        ? 'text-[#CA8A04]'
        : 'text-[#F8FAFC] hover:text-[#CA8A04]'
        }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
