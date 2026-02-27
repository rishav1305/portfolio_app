'use client';

import { useEffect, useState, useRef } from 'react';

const ROLES = ['ENGINEER', 'CONSULTANT', 'RESEARCHER'];
const TYPE_SPEED = 80;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 300;

type Phase = 'typing' | 'pausing' | 'deleting' | 'waiting';

export default function TypewriterRole({ className = '' }: { className?: string }) {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex.current];
    let timeout: ReturnType<typeof setTimeout>;

    switch (phase) {
      case 'typing':
        if (charIndex.current < currentRole.length) {
          timeout = setTimeout(() => {
            charIndex.current++;
            setText(currentRole.slice(0, charIndex.current));
          }, TYPE_SPEED);
        } else {
          setPhase('pausing');
        }
        break;

      case 'pausing':
        timeout = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
        break;

      case 'deleting':
        if (charIndex.current > 0) {
          timeout = setTimeout(() => {
            charIndex.current--;
            setText(currentRole.slice(0, charIndex.current));
          }, DELETE_SPEED);
        } else {
          setPhase('waiting');
        }
        break;

      case 'waiting':
        timeout = setTimeout(() => {
          roleIndex.current = (roleIndex.current + 1) % ROLES.length;
          setPhase('typing');
        }, PAUSE_AFTER_DELETE);
        break;
    }

    return () => clearTimeout(timeout);
  }, [text, phase]);

  return (
    <span className={className}>
      <span className="text-blue-400 font-extrabold">AI </span>
      <span className="text-white font-extrabold">{text}</span>
      <span
        className="inline-block w-[3px] h-[0.85em] bg-blue-400 ml-1 align-middle"
        style={{
          animation: 'blink 1s step-end infinite',
        }}
      />
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
