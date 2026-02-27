"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const pathname = usePathname();
  const portfolioDropdownRef = useRef<HTMLDivElement>(null);

  // Check if current page is in the portfolio section
  const isInPortfolioSection = ['/experience', '/tech-skills', '/projects', '/timeline'].includes(pathname);

  if (pathname === '/resume') return null;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setPortfolioDropdownOpen(false);
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

  // Close portfolio dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (portfolioDropdownRef.current && !portfolioDropdownRef.current.contains(event.target as Node)) {
        setPortfolioDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 transition-all duration-300 bg-white ${
        scrolled || isOpen ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
            <span
              className="navbar-name text-lg md:text-xl font-semibold whitespace-nowrap"
              data-visible={!heroVisible ? "true" : "false"}
              style={{ fontFamily: 'var(--font-ubuntu)' }}
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
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/" isActive={pathname === '/'}>Home</NavLink>
          <NavLink href="/about" isActive={pathname === '/about'}>About</NavLink>
          <NavLink href="/testimonials" isActive={pathname === '/testimonials'}>Testimonials</NavLink>

          {/* Portfolio Dropdown */}
          <div className="relative group" ref={portfolioDropdownRef}>
            <div
              className={`text-sm font-medium uppercase transition-colors duration-200 flex items-center cursor-pointer ${isInPortfolioSection
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                }`}
            >
              Portfolio
              <svg
                className={`ml-1 w-4 h-4 transition-transform group-hover:rotate-180`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            <div className="absolute mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100 invisible group-hover:visible transition-all duration-200 opacity-0 group-hover:opacity-100">
              <DropdownLink
                href="/experience"
                isActive={pathname === '/experience'}
                onClick={() => { }}
              >
                Experience
              </DropdownLink>
              <DropdownLink
                href="/tech-skills"
                isActive={pathname === '/tech-skills'}
                onClick={() => { }}
              >
                Skills
              </DropdownLink>
              <DropdownLink
                href="/projects"
                isActive={pathname === '/projects'}
                onClick={() => { }}
              >
                Projects
              </DropdownLink>
              <DropdownLink
                href="/timeline"
                isActive={pathname === '/timeline'}
                onClick={() => { }}
              >
                Timeline
              </DropdownLink>
            </div>
          </div>

          <NavLink href="/blog" isActive={pathname.startsWith('/blog')}>Blog</NavLink>
          <NavLink href="/contact" isActive={pathname === '/contact'}>Contact</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4 pb-2 px-4`}>
        <div className="flex flex-col space-y-4">
          <MobileNavLink href="/" isActive={pathname === '/'} onClick={closeMenu}>Home</MobileNavLink>
          <MobileNavLink href="/about" isActive={pathname === '/about'} onClick={closeMenu}>About</MobileNavLink>
          <MobileNavLink href="/testimonials" isActive={pathname === '/testimonials'} onClick={closeMenu}>Testimonials</MobileNavLink>

          {/* Portfolio Section Header */}
          <div className="px-4 py-2 text-sm font-bold text-gray-500 uppercase">Portfolio</div>

          {/* Portfolio Links (indented) */}
          <div className="pl-4">
            <MobileNavLink href="/experience" isActive={pathname === '/experience'} onClick={closeMenu}>Experience</MobileNavLink>
            <MobileNavLink href="/tech-skills" isActive={pathname === '/tech-skills'} onClick={closeMenu}>Skills</MobileNavLink>
            <MobileNavLink href="/projects" isActive={pathname === '/projects'} onClick={closeMenu}>Projects</MobileNavLink>
            <MobileNavLink href="/timeline" isActive={pathname === '/timeline'} onClick={closeMenu}>Timeline</MobileNavLink>
          </div>

          <MobileNavLink href="/blog" isActive={pathname.startsWith('/blog')} onClick={closeMenu}>Blog</MobileNavLink>
          <MobileNavLink href="/contact" isActive={pathname === '/contact'} onClick={closeMenu}>Contact</MobileNavLink>
          <div className="px-4 pt-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full text-center py-3 px-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Book a Consult
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

// Desktop navigation link
const NavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-medium uppercase transition-colors duration-200 ${isActive
        ? 'text-blue-600 border-b-2 border-blue-600'
        : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
        }`}
    >
      {children}
    </Link>
  );
};

// Dropdown link for desktop portfolio menu
const DropdownLink = ({
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
      className={`block px-4 py-2 text-sm ${isActive
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
        }`}
    >
      {children}
    </Link>
  );
};

// External navigation link for desktop (opens in new tab)
const ExternalNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium uppercase transition-colors duration-200 text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
    >
      {children}
    </a>
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
      className={`block text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 ${isActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-gray-600 hover:bg-gray-100'
        }`}
    >
      {children}
    </Link>
  );
};

// External mobile navigation link (opens in new tab)
const ExternalMobileNavLink = ({
  href,
  children,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="block text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 text-gray-600 hover:bg-gray-100"
    >
      {children}
    </a>
  );
};

export default Navbar;