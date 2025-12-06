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

function ResultCard({ result, index, isInView }: { result: Result; index: number; isInView: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden">
                {/* Image */}
                <div className="relative h-44 md:h-56 overflow-hidden">
                    <Image
                        src={result.image}
                        alt={result.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/50 to-transparent" />

                    {/* Growth badge */}
                    <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] text-xs md:text-sm font-bold">
                        {result.growth}
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                            {result.name}
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                    <p className="text-white/60 text-xs md:text-sm mb-4 md:mb-6">
                        {result.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                        <div className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4">
                            <div className="flex items-center gap-1.5 md:gap-2 text-[#24c6dc] mb-0.5 md:mb-1">
                                <FaUsers className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="text-[10px] md:text-xs font-medium">Followers</span>
                            </div>
                            <div className="text-white font-semibold text-xs md:text-base">
                                {formatNumber(result.followersBefore)} → {formatNumber(result.followersAfter)}
                            </div>
                        </div>
                        <div className="bg-white/5 rounded-lg md:rounded-xl p-3 md:p-4">
                            <div className="flex items-center gap-1.5 md:gap-2 text-[#ff6b6b] mb-0.5 md:mb-1">
                                <FaChartLine className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="text-[10px] md:text-xs font-medium">Durată</span>
                            </div>
                            <div className="text-white font-semibold text-xs md:text-base">
                                {result.campaignDuration}
                            </div>
                        </div>
                    </div>

                    {/* Services tags */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                        {result.services.map((service, i) => (
                            <span
                                key={i}
                                className="px-2 md:px-3 py-1 md:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/70"
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
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium active:scale-[0.98] transition-transform"
                    >
                        <FaInstagram className="w-4 h-4" />
                        <span>Vezi profilul</span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function ResultsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section id="results" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ffd93d] text-sm font-medium mb-4">
                        Rezultate
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Rezultate </span>
                        <span className="gradient-text">reale</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4">
                        Fiecare proiect este o poveste de succes.
                    </p>
                </motion.div>

                {/* All results in one grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {results.map((result, index) => (
                        <ResultCard key={result.id} result={result} index={index} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
