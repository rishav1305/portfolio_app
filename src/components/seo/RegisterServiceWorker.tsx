'use client';

import { useEffect } from 'react';

// Extend window interface to include workbox
declare global {
  interface Window {
    workbox?: any;
  }
}

export default function RegisterServiceWorker() {
  useEffect(() => {
    // Check if we're in browser context and service worker is supported
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register the service worker after the page loads
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful with scope:', registration.scope);
          })
          .catch((error) => {
            console.log('ServiceWorker registration failed:', error);
          });
      });
    }
  }, []);
  
  return null;
}
