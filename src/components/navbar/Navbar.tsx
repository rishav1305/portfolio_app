"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavbarName from './NavbarName';
import portfolioData from '@/data/portfolioData';

const Navbar = () => {
  const { personalInfo } = portfolioData;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Link href="/">
            <NavbarName name={personalInfo.name} />
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
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" isActive={pathname === '/'}>Home</NavLink>
          <NavLink href="/about" isActive={pathname === '/about'}>About</NavLink>
          <NavLink href="/testimonials" isActive={pathname === '/testimonials'}>Testimonials</NavLink>
          <NavLink href="/experience" isActive={pathname === '/experience'}>Experience</NavLink>
          <NavLink href="/tech-skills" isActive={pathname === '/tech-skills'}>Skills</NavLink>
          <NavLink href="/projects" isActive={pathname === '/projects'}>Projects</NavLink>
          <NavLink href="/timeline" isActive={pathname === '/timeline'}>Timeline</NavLink>
          <ExternalNavLink href={personalInfo.socialMedia.medium}>BLOG</ExternalNavLink>
          <NavLink href="/contact" isActive={pathname === '/contact'}>Contact</NavLink>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pt-4 pb-2 px-4`}>
        <div className="flex flex-col space-y-4">
          <MobileNavLink href="/" isActive={pathname === '/'}>Home</MobileNavLink>
          <MobileNavLink href="/about" isActive={pathname === '/about'}>About</MobileNavLink>
          <MobileNavLink href="/testimonials" isActive={pathname === '/testimonials'}>Testimonials</MobileNavLink>
          <MobileNavLink href="/experience" isActive={pathname === '/experience'}>Experience</MobileNavLink>
          <MobileNavLink href="/tech-skills" isActive={pathname === '/tech-skills'}>Skills</MobileNavLink>
          <MobileNavLink href="/projects" isActive={pathname === '/projects'}>Projects</MobileNavLink>
          <MobileNavLink href="/timeline" isActive={pathname === '/timeline'}>Timeline</MobileNavLink>
          <ExternalMobileNavLink href={personalInfo.socialMedia.medium}>BLOG</ExternalMobileNavLink>
          <MobileNavLink href="/contact" isActive={pathname === '/contact'}>Contact</MobileNavLink>
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
      className={`text-sm font-medium uppercase transition-colors duration-200 ${
        isActive 
          ? 'text-blue-600 border-b-2 border-blue-600' 
          : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
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
const MobileNavLink = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) => {
  return (
    <Link 
      href={href} 
      className={`block text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 ${
        isActive 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

// External mobile navigation link (opens in new tab)
const ExternalMobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-base font-medium uppercase py-2 px-4 rounded transition-colors duration-200 text-gray-600 hover:bg-gray-100"
    >
      {children}
    </a>
  );
};

export default Navbar;