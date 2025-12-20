import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";

export const metadata: Metadata = {
    title: "ssmediahub | Agenție de Marketing Digital în România",
    description: "Echipa ta de marketing digital. Ne ocupăm de strategie, conținut, social media, video production și ads pentru creșterea afacerii tale. Rezultate dovedite pentru branduri din HoReCa și retail.",
    keywords: "marketing digital, social media marketing, TikTok marketing, Instagram marketing, Meta Ads, video content, agenție marketing România, ssmediahub, marketing Sibiu, creștere organică, SMM, echipă marketing",
    authors: [{ name: "ssmediahub" }],
    creator: "ssmediahub",
    publisher: "ssmediahub",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "ro_RO",
        url: "https://ssmediahub.ro",
        siteName: "ssmediahub",
        title: "ssmediahub | Agenție de Marketing Digital",
        description: "Echipa ta de marketing digital. Strategie, conținut, social media și ads pentru creșterea afacerii tale.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ssmediahub - Agenție de Marketing Digital",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ssmediahub | Agenție de Marketing Digital",
        description: "Echipa ta de marketing digital. Strategie, conținut, social media și ads pentru creșterea afacerii tale.",
        images: ["/og-image.jpg"],
        creator: "@ssmediahub",
    },
    alternates: {
        canonical: "https://ssmediahub.ro",
    },
    category: "Marketing",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ro">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <meta name="theme-color" content="#0f0c29" />
                <meta name="format-detection" content="telephone=no" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="antialiased">
                {/* Background effects */}
                <div className="bg-particles" aria-hidden="true" />
                <div className="noise-overlay" aria-hidden="true" />

                {/* Main content */}
                <div className="relative z-10">
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MarketingAgency",
                            "name": "ssmediahub",
                            "description": "Agenție de marketing digital specializată în social media, video content și creștere organică.",
                            "url": "https://ssmediahub.ro",
                            "logo": "https://ssmediahub.ro/logo.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+40-754-502-408",
                                "contactType": "customer service",
                                "areaServed": "RO",
                                "availableLanguage": "Romanian"
                            },
                            "sameAs": [
                                "https://www.instagram.com/sebastiansuciu21/",
                                "https://www.tiktok.com/@sebisuciu21"
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Sibiu",
                                "addressCountry": "RO"
                            },
                            "priceRange": "€€",
                            "serviceType": ["Social Media Marketing", "Video Content", "Digital Advertising", "Brand Strategy"]
                        }),
                    }}
                />
                <a
                    href="https://wa.me/40754502408?text=Salut!%20Vreau%20să%20discutăm%20despre%20o%20colaborare."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-bounce-slow group"
                    aria-label="Contactează-ne pe WhatsApp"
                >
                    <FaWhatsapp className="w-8 h-8" />
                    <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block shadow-md">
                        Contactează-ne
                    </span>
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0" />
                </a>
            </body>
        </html>
    );
}
