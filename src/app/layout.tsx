import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://abdullahalluman.com"), // Replace with your actual domain
  title: {
    default:
      "Abdullah Al Luman - Executive Engineer at BWDB | Water Resource Specialist",
    template: "%s | Abdullah Al Luman",
  },
  description:
    "Executive Engineer at Bangladesh Water Development Board (BWDB), Bheramara Division, Kushtia. Specializing in water resource management, infrastructure development, and civil engineering projects in Bangladesh. BUET alumni and former Physics teacher at Udvash.",
  keywords: [
    "Abdullah Al Luman",
    "BWDB",
    "Bangladesh Water Development Board",
    "Executive Engineer",
    "Water Resource Management",
    "Civil Engineer",
    "Infrastructure Development",
    "BUET Alumni",
    "Bheramara Division",
    "Kushtia",
    "Bangladesh",
    "Sub-Divisional Engineer",
    "Water Infrastructure",
    "Flood Control",
    "Irrigation Projects",
    "Delta Management",
    "Udvash Physics Teacher",
    "Civil Engineering Bangladesh",
  ],
  authors: [{ name: "Abdullah Al Luman" }],
  creator: "Abdullah Al Luman",
  publisher: "Abdullah Al Luman",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Open Graph for social media
  openGraph: {
    title:
      "Abdullah Al Luman - Executive Engineer at BWDB | Water Resource Management",
    description:
      "Executive Engineer at Bangladesh Water Development Board (BWDB), Bheramara Division, Kushtia. Specializing in water resource management, infrastructure development, and civil engineering projects in Bangladesh.",
    url: "https://abdullahalluman.com",
    siteName: "Abdullah Al Luman - Executive Engineer at BWDB",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Abdullah Al Luman - Executive Engineer at BWDB",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Luman - Executive Engineer at BWDB",
    description:
      "Executive Engineer at Bangladesh Water Development Board (BWDB). Specializing in water resource management and infrastructure development.",
    creator: "@abdullahalluman", // Add your Twitter handle
    images: ["/twitter-image.jpg"], // Add your Twitter image
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Verification for search consoles
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
    yandex: "your-yandex-verification-code", // Add your Yandex verification
  },

  // Alternate links
  alternates: {
    canonical: "https://abdullahalluman.com",
    languages: {
      "en-US": "https://abdullahalluman.com/en-US",
      "bn-BD": "https://abdullahalluman.com/bn-BD",
    },
  },

  // Category
  category: "engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme color for browser */}
        <meta name="theme-color" content="#0F172A" />
        <meta name="msapplication-TileColor" content="#0F172A" />

        {/* Viewport for responsive design */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F172A] text-white min-h-screen`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Main content */}
        <main id="main-content">{children}</main>

        {/* JSON-LD structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullah Al Luman",
              alternateName: "A.L. Luman",
              url: "https://abdullahalluman.com",
              sameAs: [
                "https://linkedin.com/in/abdullahalluman",
                "https://twitter.com/abdullahalluman",
                "https://facebook.com/abdullahalluman",
                "https://github.com/abdullahalluman",
              ],
              jobTitle: "Executive Engineer",
              worksFor: {
                "@type": "GovernmentOrganization",
                name: "Bangladesh Water Development Board (BWDB)",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bheramara",
                  addressRegion: "Kushtia",
                  addressCountry: "Bangladesh",
                },
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Bangladesh University of Engineering and Technology (BUET)",
                  sameAs: "https://www.buet.ac.bd/",
                },
              ],
              knowsAbout: [
                "Water Resource Management",
                "Civil Engineering",
                "Infrastructure Development",
                "Flood Control Systems",
                "Irrigation Projects",
                "Delta Management",
                "Hydraulic Engineering",
                "Project Management",
                "Physics Education",
              ],
              description:
                "Executive Engineer at Bangladesh Water Development Board (BWDB), Bheramara Division, Kushtia. Dedicated civil engineer specializing in water resource management and infrastructure development in Bangladesh. BUET alumni and former Physics teacher at Udvash.",
              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Executive Engineer",
                  occupationLocation: {
                    "@type": "City",
                    name: "Kushtia",
                  },
                },
                {
                  "@type": "Occupation",
                  name: "Sub-Divisional Engineer",
                  occupationLocation: {
                    "@type": "Country",
                    name: "Bangladesh",
                  },
                },
                {
                  "@type": "Occupation",
                  name: "Physics Teacher",
                  description: "Former Physics teacher at Udvash",
                },
              ],
              birthPlace: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Bangladesh",
                },
              },
              memberOf: {
                "@type": "Organization",
                name: "Institution of Engineers, Bangladesh (IEB)",
              },
            }),
          }}
        />

        {/* Additional structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              dateCreated: "2023-01-01",
              dateModified: new Date().toISOString().split("T")[0],
              mainEntity: {
                "@type": "Person",
                name: "Abdullah Al Luman",
                description:
                  "Executive Engineer at BWDB specializing in water resource management",
                image: "/profile-image.jpg",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
