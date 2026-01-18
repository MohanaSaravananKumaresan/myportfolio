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

// Always prefer production domain from env vars.
// NEVER fallback to localhost in metadata, canonical, OG, or JSON-LD.
const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://mohanasaravanan.in";

const canonicalUrl = `${siteUrl}/`;

export const metadata: Metadata = {
  title: "Mohana Saravanan | Senior Backend Engineer",
  description:
      "Portfolio of Mohana Saravanan — Senior Backend Engineer with 5+ years of experience building scalable, secure REST APIs and microservices using Java (Spring Boot), Go, Node.js, cloud-native patterns and observability on AWS.",
  keywords: [
    "Mohana Saravanan",
    "Senior Backend Engineer",
    "Backend Engineer",
    "REST",
    "API",
    "microservices",
    "scalability",
    "performance",
    "PostgreSQL",
    "SQL",
    "NoSQL",
    "DynamoDB",
    "Kafka",
    "Docker",
    "Kubernetes",
    "AWS",
    "Lambda",
    "EKS",
    "Terraform",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "observability",
    "Splunk",
    "ELK",
    "Datadog",
    "Prometheus",
    "Grafana",
    "Java",
    "Spring Boot",
    "GoLang",
    "Node.js",
  ],
  authors: [{ name: "Mohana Saravanan" }],
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Mohana Saravanan | Senior Backend Engineer",
    description:
        "Senior Backend Engineer portfolio — scalable REST APIs and microservices (Java Spring Boot, Go, Node.js), AWS cloud-native architectures, Kafka, PostgreSQL, Docker, Kubernetes, and observability.",
    url: canonicalUrl,
    siteName: "Mohana Saravanan",
    images: [
      {
        url: `${siteUrl}/hey.png`,
        width: 1200,
        height: 630,
        alt: "Mohana Saravanan",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohana Saravanan | Senior Backend Engineer",
    description:
        "Senior Backend Engineer — REST APIs, microservices, Kafka, PostgreSQL, Docker, Kubernetes, AWS, and observability.",
    images: [`${siteUrl}/hey.png`],
  },

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
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for SEO / rich results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohana Saravanan",
    jobTitle: "Senior Software Engineer - Backend",
    url: canonicalUrl,
    description:
        "Portfolio of Mohana Saravanan — Senior Backend Engineer experienced in building scalable APIs and backend services using Java (Spring Boot), Go, Node.js, databases (PostgreSQL, DynamoDB), Kafka, and AWS cloud-native patterns.",
    image: `${siteUrl}/hey.png`,
    mainEntityOfPage: canonicalUrl,
    sameAs: [
      "https://www.linkedin.com/in/mohana-saravanan-kumaresan-5134aa197",
      canonicalUrl,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-7708299009",
        email: "mohanasaravanankumaresan@gmail.com",
        contactType: "professional",
        areaServed: "IN",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "India",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "GoLang",
      "Node.js",
      "REST",
      "API",
      "microservices",
      "PostgreSQL",
      "DynamoDB",
      "SQL",
      "NoSQL",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
      "Lambda",
      "EKS",
      "Terraform",
      "CI/CD",
      "Splunk",
      "ELK",
      "Datadog",
      "Prometheus",
      "Grafana",
      "scalability",
      "performance",
    ],
  } as const;

  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Expose CV */}
      <link rel="author" href="/MohanaSaravanan_CV.pdf" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content="Mohana Saravanan" />

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {children}
      </body>
      </html>
  );
}
