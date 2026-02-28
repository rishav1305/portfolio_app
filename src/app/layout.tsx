import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import HydrationErrorSuppressor from "@/components/ui/HydrationErrorSuppressor";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/seo/StructuredData";
import RegisterServiceWorker from "@/components/seo/RegisterServiceWorker";
import { SiteConfigProvider } from "@/contexts/SiteConfigContext";
import { getExperience } from "@/services/experience";
import { getProjects } from "@/services/projects";
import { getSiteConfig } from "@/services/siteConfig";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rishav Chatterjee | AI Engineer | AI Consultant | AI Researcher",
  description: "AI-augmented architect who builds production AI systems with AI coding tools. 8 years of Python, SQL, and data platform engineering. 31 interconnected projects in the Soul ecosystem.",
  keywords: [
    "AI engineer",
    "AI consultant",
    "AI researcher",
    "Claude Code",
    "AI coding tools",
    "data engineering",
    "Python",
    "SQL",
    "AWS",
    "Snowflake",
    "Delhi",
    "India",
    "AI systems architecture",
    "distributed systems",
    "autonomous agents"
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
  openGraph: {
    title: "Rishav Chatterjee | AI Engineer | AI Consultant | AI Researcher",
    description: "AI-augmented architect building production AI systems with AI coding tools. 6 years Python/SQL, 31 projects in the Soul ecosystem.",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Rishav Chatterjee - AI Engineer | AI Consultant | AI Researcher",
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "Rishav Chatterjee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishav Chatterjee | AI Engineer | AI Consultant | AI Researcher",
    description: "AI-augmented architect building production AI systems with AI coding tools.",
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

// Define viewport configuration separately as per Next.js guidelines
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [siteConfig, experience, projects] = await Promise.all([
    getSiteConfig(),
    getExperience(),
    getProjects(),
  ]);

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        {/* Essential SEO link tags */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/icon-180x180.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased min-h-screen`}
        suppressHydrationWarning={true}
      >
        <HydrationErrorSuppressor>
          <SiteConfigProvider initialConfig={siteConfig}>
          <Navbar />
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
          <StructuredData experience={experience} projects={projects} />
          <RegisterServiceWorker />
          </SiteConfigProvider>
        </HydrationErrorSuppressor>
      </body>
    </html>
  );
}
