'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaArrowUp, FaChartLine, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

type Result = {
    id: number;
    name: string;
    description: string;
    image: string;
    followersBefore: number;
    followersAfter: number;
    growth: string;
    campaignDuration: string;
    services: string[];
    link: string;
};

// Consistent number formatter that doesn't cause hydration issues
const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const results: Result[] = [
    {
        id: 1,
        name: 'Hug the Plate',
        description: 'Unul dintre cele mai mari lanțuri de restaurante din Sibiu.',
        image: '/hug-the-plate.jpg',
        followersBefore: 3000,
        followersAfter: 12500,
        growth: '+320%',
        campaignDuration: '3 luni',
        services: ['Instagram Reels', 'TikTok', 'Video editing'],
        link: 'https://www.instagram.com/hugtheplate/',
    },
    {
        id: 2,
        name: 'Wei Ramen',
        description: 'Restaurant premium all-you-can-eat cu o prezență nouă în online.',
        image: '/wei-ramen.jpg',
        followersBefore: 800,
        followersAfter: 4600,
        growth: '+215%',
        campaignDuration: '2 luni',
        services: ['Content foto', 'Content video', 'Meta Ads'],
        link: 'https://www.instagram.com/weiramencluj/',
    },
    {
        id: 3,
        name: 'Smiles By',
        description: 'Cabinet stomatologic modern care și-a triplat vizibilitatea.',
        image: '/smiles-by.jpg',
        followersBefore: 500,
        followersAfter: 2700,
        growth: '+170%',
        campaignDuration: '1 lună',
        services: ['Foto branding', 'Testimonial video', 'Reels'],
        link: 'https://www.instagram.com/smiles_by_dr.buza/',
    },
    {
        id: 4,
        name: 'TransAgape',
        description: 'Cel mai cunoscut lanț de panificație din Sibiu.',
        image: '/hug-the-plate.jpg',
        followersBefore: 500,
        followersAfter: 2700,
        growth: '+170%',
        campaignDuration: '1 lună',
        services: ['Foto branding', 'Testimonial video', 'Reels'],
        link: 'https://www.instagram.com/trans_agape',
    },
    {
        id: 5,
        name: 'YummyYang',
        description: 'Restaurant chinezesc premium cu meniu all-you-can-eat.',
        image: '/yummy-yang-sibiu_1.jpg',
        followersBefore: 500,
        followersAfter: 2700,
        growth: '+170%',
        campaignDuration: '1 lună',
        services: ['Foto branding', 'Testimonial video', 'Reels'],
        link: 'https://www.instagram.com/yummyyangcity/',
    },
];

// Reusable card component
function ResultCard({ result, index, isInView }: { result: Result; index: number; isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
        >
            <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-[#24c6dc]/10">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={result.image}
                        alt={result.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/50 to-transparent" />

                    {/* Growth badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] text-sm font-bold shadow-lg"
                    >
                        {result.growth}
                    </motion.div>

                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                            {result.name}
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-white/60 text-sm mb-6">
                        {result.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-[#24c6dc] mb-1">
                                <FaUsers className="w-4 h-4" />
                                <span className="text-xs font-medium">Followers</span>
                            </div>
                            <div className="text-white font-semibold">
                                {formatNumber(result.followersBefore)} → {formatNumber(result.followersAfter)}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-[#ff6b6b] mb-1">
                                <FaChartLine className="w-4 h-4" />
                                <span className="text-xs font-medium">Durată</span>
                            </div>
                            <div className="text-white font-semibold">
                                {result.campaignDuration}
                            </div>
                        </div>
                    </div>

                    {/* Services tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {result.services.map((service, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                            >
                                {service}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        href={result.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#24c6dc] hover:text-[#0f0c29] hover:border-[#24c6dc] transition-all duration-300 group/link font-medium"
                    >
                        <FaInstagram className="w-4 h-4" />
                        <span>Vezi profilul</span>
                        <FaArrowUp className="w-3 h-3 rotate-45 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function ResultsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="results" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#24c6dc]/5 to-[#ff6b6b]/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ffd93d] text-sm font-medium mb-4">
                        Rezultate
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Rezultate </span>
                        <span className="gradient-text">reale</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Fiecare proiect este o poveste de succes. Iată câteva dintre transformările realizate de echipa noastră.
                    </p>
                </motion.div>

                {/* All results in one grid - flows naturally left to right */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <ResultCard key={result.id} result={result} index={index} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
