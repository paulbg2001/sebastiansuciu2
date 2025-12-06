'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type Brand = {
    name: string;
    logo: string | null; // null = show name as title instead
    image: string | null; // null = no flip effect
    description: string;
};

const brands: Brand[] = [
    {
        name: 'Dr. Max',
        logo: '/logos/drMax-logo.svg',
        image: null,
        description: 'Lanț de farmacii cu prezență națională',
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
        name: 'Versailles Sibiu ',
        logo: null,
        image: null,
        description: 'Sală de evenimente și nunți',
    },
    {
        name: 'iMed Sibiu',
        logo: '/logos/iMed-logo.jpg',
        image: null,
        description: 'Clinică medicală modernă',
    },
    {
        name: 'Magnolia Residence Sibiu',
        logo: '/logos/magnolia-residence.webp',
        image: null,
        description: 'Complex rezidențial premium',
    },
    {
        name: 'Tokyo Ramen',
        logo: null,
        image: null,
        description: 'Restaurant japonez autentic în Timișoara',
    },
    {
        name: 'Orhideea Exclusive Living Sibiu',
        logo: '/logos/orhideea-logo.webp',
        image: null,
        description: 'Dezvoltator imobiliar de încredere',
    },
    {
        name: 'Credi Residence',
        logo: null,
        image: null,
        description: 'Soluții imobiliare și consultanță',
    },
    {
        name: 'Yummy Yang',
        logo: '/logos/logo-yummyyang.svg',
        image: '/5.PNG',
        description: 'Restaurant chinezesc premium',
    },
    {
        name: 'Hug the Plate',
        logo: '/logos/logo-hug.png',
        image: null,
        description: 'Unul din cele mai mari lanțuri de restaurante din Sibiu',
    },
];

function BrandCard({ brand, index, isInView }: { brand: Brand; index: number; isInView: boolean }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const hasFlipEffect = brand.image !== null;
    const hasLogo = brand.logo !== null;

    const handleClick = () => {
        if (hasFlipEffect) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group ${hasFlipEffect ? 'cursor-pointer' : ''}`}
            style={{ perspective: '1000px' }}
            onClick={handleClick}
        >
            <div 
                className={`relative h-[320px] md:h-[380px] transition-transform duration-500 ${
                    hasFlipEffect 
                        ? isFlipped 
                            ? '[transform:rotateY(180deg)]' 
                            : 'md:group-hover:[transform:rotateY(180deg)]'
                        : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front - Logo or Name */}
                <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="h-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] rounded-3xl border border-white/10 flex flex-col items-center justify-center p-6 md:p-8 hover:border-white/20 transition-colors">
                        {hasLogo ? (
                            // Show logo
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-6">
                                <Image
                                    src={brand.logo!}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 96px, 128px"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            // Show name as styled title
                            <div className="mb-4 md:mb-6 text-center">
                                <h3 
                                    className="text-3xl md:text-4xl font-bold gradient-text"
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                >
                                    {brand.name}
                                </h3>
                            </div>
                        )}
                        
                        {hasLogo && (
                            <h3 className="text-lg md:text-xl font-bold text-white text-center mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                                {brand.name}
                            </h3>
                        )}
                        
                        <p className="text-sm text-white/50 text-center px-2">
                            {brand.description}
                        </p>
                        
                        {hasFlipEffect && (
                            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex items-center gap-2 text-xs md:text-sm text-[#24c6dc]">
                                <span className="md:hidden">Apasă</span>
                                <span className="hidden md:inline">Hover</span>
                                <span>pentru rezultate</span>
                                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        )}
                    </div>
                </div>

                {/* Back - Screenshot (only if has image) */}
                {hasFlipEffect && brand.image && (
                    <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        <div className="h-full rounded-3xl overflow-hidden border-2 border-[#24c6dc]/50">
                            <div className="relative w-full h-full">
                                <Image
                                    src={brand.image}
                                    alt={`${brand.name} rezultate`}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent" />
                                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                                    <span className="text-lg md:text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                                        {brand.name}
                                    </span>
                                    <p className="text-xs md:text-sm text-white/70 mt-1">Rezultate reale</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export default function BrandsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const [showAll, setShowAll] = useState(false);

    const visibleBrands = showAll ? brands : brands.slice(0, 6);

    return (
        <section id="portfolio" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background decoration - only on desktop */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-[#ff6b6b]/10 blur-3xl" />
                <div className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-[#24c6dc]/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#ff6b6b] text-sm font-medium mb-4">
                        Portofoliu
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Branduri care au avut </span>
                        <span className="gradient-text">încredere</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4">
                        Am avut plăcerea să colaborăm cu branduri incredibile din diverse industrii
                    </p>
                </motion.div>

                {/* Brands grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    <AnimatePresence>
                        {visibleBrands.map((brand, index) => (
                            <BrandCard key={brand.name} brand={brand} index={index} isInView={isInView} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show more/less button */}
                {brands.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-8 md:mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                        >
                            <span className="font-medium">
                                {showAll ? 'Arată mai puține' : `Vezi toate (${brands.length})`}
                            </span>
                            {showAll ? (
                                <FaChevronUp className="w-4 h-4" />
                            ) : (
                                <FaChevronDown className="w-4 h-4" />
                            )}
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
