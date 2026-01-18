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

// Use SITE_URL environment variable in production. Falls back to localhost for dev.
const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Mohana Saravanan | Senior Backend Engineer",
  description:
    "Portfolio of Mohana Saravanan — Senior Backend Engineer with 5+ years of experience building scalable, secure REST APIs and microservices using Java (Spring Boot), Go, Node.js, cloud-native patterns and observability on AWS.",
  keywords: [
    // Keywords aligned to the CV contents
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
    canonical: siteUrl,
  },
  openGraph: {
    title: "Mohana Saravanan | Senior Backend Engineer",
    description:
      "Senior Backend Engineer portfolio — scalable REST APIs and microservices (Java Spring Boot, Go, Node.js), AWS cloud-native architectures, Kafka, PostgreSQL, Docker, Kubernetes, and observability.",
    url: siteUrl,
    siteName: "Mohana Saravanan",
    images: [
      {
        url: siteUrl + "/hey.png",
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
    images: ["/hey.png"],
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
  // JSON-LD structured data to help search engines and recruiters pick up resume/profile details
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohana Saravanan",
    jobTitle: "Senior Software Engineer - Backend",
    url: siteUrl,
    description:
      "Portfolio of Mohana Saravanan — Senior Backend Engineer experienced in building scalable APIs and backend services using Java (Spring Boot), Go, Node.js, databases (PostgreSQL, DynamoDB), Kafka, and AWS cloud-native patterns.",
    image: siteUrl + "/hey.png",
    // Primary public profiles and portfolio
    sameAs: [
      "https://www.linkedin.com/in/mohana-saravanan-kumaresan-5134aa197",
      siteUrl,
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
    // link to the resume hosted in public folder
    sameAsContact: siteUrl + "/MohanaSaravanan_CV.pdf",
  } as const;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Expose CV to crawlers and tools via link rel=author */}
        <link rel="author" href="/MohanaSaravanan_CV.pdf" />
        <link rel="canonical" href={siteUrl} />
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
