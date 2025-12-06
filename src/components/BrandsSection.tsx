'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

type Brand = {
    name: string;
    logo: string;
    image: string;
    description: string;
};

const brands: Brand[] = [
    {
        name: 'Hug the plate',
        logo: '/logos/logo-hug.png',
        image: '/2.PNG',
        description: 'Unul din cele mai mari lanțuri de restaurante din Sibiu',
    },
    {
        name: 'Wei Ramen',
        logo: '/logos/logo-wei-ramen.jpeg',
        image: '/3.PNG',
        description: 'Restaurant chinezesc premium cu meniu all-you-can-eat',
    },
    {
        name: 'Smiles By',
        logo: '/logos/logo-smiles.png',
        image: '/4.PNG',
        description: 'Cabinet stomatologic profesionist',
    },
    {
        name: 'Yummy Yang',
        logo: '/logos/logo-yummyyang.svg',
        image: '/5.PNG',
        description: 'Restaurant chinezesc premium',
    },
    {
        name: 'TransAgape',
        logo: '/logos/logo-trans-agape-maro.png',
        image: '/6.PNG',
        description: 'Cel mai cunoscut lanț de pâine din Sibiu',
    },
];

export default function BrandsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section id="portfolio" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-[#ff6b6b]/10 blur-3xl" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#24c6dc]/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ff6b6b] text-sm font-medium mb-4">
                        Portofoliu
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Branduri care au avut </span>
                        <span className="gradient-text">încredere</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Am avut plăcerea să colaborăm cu branduri incredibile din diverse industrii
                    </p>
                </motion.div>

                {/* Brands grid - larger cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {/* First row - 3 cards */}
                    {brands.slice(0, 3).map((brand, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="group"
                            style={{ perspective: '1000px' }}
                        >
                            <div className="relative h-[420px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                                {/* Front - Logo */}
                                <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                                    <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 hover:border-white/20 transition-colors">
                                        <div className="relative w-40 h-40 mb-6">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                fill
                                                className="object-contain"
                                                sizes="160px"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white text-center mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            {brand.name}
                                        </h3>
                                        <p className="text-base text-white/50 text-center">
                                            {brand.description}
                                        </p>
                                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-sm text-[#24c6dc]">
                                            <span>Hover pentru rezultate</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Back - Screenshot */}
                                <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                    <div className="h-full rounded-3xl overflow-hidden border-2 border-[#24c6dc]/50 shadow-xl shadow-[#24c6dc]/20">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={brand.image}
                                                alt={`${brand.name} rezultate`}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                                                    {brand.name}
                                                </span>
                                                <p className="text-sm text-white/70 mt-1">Rezultate reale</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second row - 2 cards centered */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto"
                >
                    {brands.slice(3, 5).map((brand, index) => (
                        <motion.div
                            key={index + 3}
                            variants={cardVariants}
                            className="group"
                            style={{ perspective: '1000px' }}
                        >
                            <div className="relative h-[420px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ transformStyle: 'preserve-3d' }}>
                                {/* Front - Logo */}
                                <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                                    <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 hover:border-white/20 transition-colors">
                                        <div className="relative w-40 h-40 mb-6">
                                            <Image
                                                src={brand.logo}
                                                alt={brand.name}
                                                fill
                                                className="object-contain"
                                                sizes="160px"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white text-center mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            {brand.name}
                                        </h3>
                                        <p className="text-base text-white/50 text-center">
                                            {brand.description}
                                        </p>
                                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-sm text-[#24c6dc]">
                                            <span>Hover pentru rezultate</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Back - Screenshot */}
                                <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                    <div className="h-full rounded-3xl overflow-hidden border-2 border-[#24c6dc]/50 shadow-xl shadow-[#24c6dc]/20">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={brand.image}
                                                alt={`${brand.name} rezultate`}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 640px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <span className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                                                    {brand.name}
                                                </span>
                                                <p className="text-sm text-white/70 mt-1">Rezultate reale</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
