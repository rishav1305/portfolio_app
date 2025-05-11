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
import StructuredData from "@/components/seo/StructuredData";
import RegisterServiceWorker from "@/components/seo/RegisterServiceWorker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rishav Chatterjee | Technology Leader & Freelance Data Consultant",
  description: "Expert freelance data consultant specializing in cloud-based solutions, data engineering, and visualization with extensive experience working with top-tier organizations.",
  keywords: [
    "freelance data consultant",
    "data engineering",
    "cloud solutions",
    "data visualization",
    "Python",
    "SQL",
    "AWS",
    "Azure",
    "Tableau CRM",
    "Snowflake",
    "Delhi",
    "India",
    "technology leadership",
    "data pipelines",
    "ETL processes",
    "business intelligence"
  ],
  authors: [{ name: "Rishav Chatterjee", url: "https://www.linkedin.com/in/rishavchatterjee/" }],
  creator: "Rishav Chatterjee",
  publisher: "Rishav Chatterjee",
  metadataBase: new URL("https://rishavchatterjee.com"),
  applicationName: "Rishav Chatterjee Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Rishav Chatterjee | Technology Leader & Freelance Data Consultant",
    description: "Expert in scalable data solutions that align technology with business goals. Specializing in AWS, Python, SQL, and data visualization.",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Rishav Chatterjee - Freelance Data Consultant",
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Rishav Chatterjee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Chatterjee | Technology Leader & Freelance Data Consultant",
    description: "Expert in scalable data solutions that align technology with business goals.",
    images: ["/images/profile.png"],
    creator: "@rishav_chat",
    site: "@rishav_chat",
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "https://rishavchatterjee.com/rss/feed.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
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
        
        {/* Essential SEO link tags */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
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
          <StructuredData />
          <RegisterServiceWorker />
        </HydrationErrorSuppressor>
      </body>
    </html>
  );
}
