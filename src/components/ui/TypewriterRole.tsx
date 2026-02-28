'use client';

import { useState, useEffect } from 'react';

const roles = ['Engineer', 'Consultant', 'Researcher'];

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    // Finished typing — pause then start deleting
    if (!isDeleting && text === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    // Finished deleting — move to next role
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Type or delete one character
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(text.slice(0, -1));
      } else {
        setText(currentRole.slice(0, text.length + 1));
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-[#CA8A04]">
      AI {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
