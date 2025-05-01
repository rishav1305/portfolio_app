import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/custom-fonts.css"; 
import Navbar from "@/components/navbar/Navbar";
import ContactSidebar from "@/components/ui/ContactSidebar";
import Script from "next/script";
import HydrationErrorSuppressor from "@/components/ui/HydrationErrorSuppressor";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishav Chatterjee | Data - Science - Viz",
  description: "Personal portfolio of Rishav Chatterjee, specializing in data engineering and visualization",
};

// Force light mode styles
const forceLightModeStyles = `
  :root {
    --background: #ffffff !important;
    --foreground: #171717 !important;
    color-scheme: light !important;
  }
  
  .dark\\:bg-gray-700, .dark\\:bg-gray-800, .dark\\:bg-gray-900 {
    background-color: #f9fafb !important;
  }
  
  .dark\\:text-gray-200, .dark\\:text-gray-300, .dark\\:text-gray-400, .dark\\:text-blue-400 {
    color: #374151 !important;
  }
  
  .dark\\:border-gray-600, .dark\\:border-gray-700, .dark\\:border-gray-800 {
    border-color: #e5e7eb !important;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light" style={{colorScheme: 'light'}}>
      <head>
        {/* Add these scripts for Vanta.js */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js" strategy="beforeInteractive" />
        <Script src="/vantaInit.js" strategy="afterInteractive" />
        <style dangerouslySetInnerHTML={{ __html: forceLightModeStyles }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
        <HydrationErrorSuppressor>
          <Navbar />
          <ContactSidebar />
          {children}
          <Toaster position="bottom-right" toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#22c55e',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            }
          }} />
          <SpeedInsights />
        </HydrationErrorSuppressor>
      </body>
    </html>
  );
}
