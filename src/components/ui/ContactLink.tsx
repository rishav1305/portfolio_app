'use client';

import React from 'react';

interface ContactLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  cta: string;
  iconBgColor: string;
  textColor: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ 
  href, 
  title, 
  icon, 
  description, 
  cta, 
  iconBgColor,
  textColor
}) => {
  return (
    <article className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105" itemScope itemType="https://schema.org/ContactPoint">
      <div className="flex items-center mb-6">
        <div className={`${iconBgColor} p-3 rounded-full mr-4`} aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-xl font-bold" itemProp="contactType">{title}</h3>
      </div>
      <p className="text-gray-700 mb-6" itemProp="description">
        {description}
      </p>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`inline-flex items-center ${textColor} font-medium hover:underline`}
        itemProp="url"
        aria-label={`${cta} - ${title}`}
      >
        {cta}
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      <meta itemProp="name" content={title} />
    </article>
  );
};

export default ContactLink;
