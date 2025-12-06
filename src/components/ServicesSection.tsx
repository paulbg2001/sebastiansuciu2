'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const packages = [
    {
        name: 'Bronze',
        tagline: 'Perfect pentru începători',
        price: '500',
        color: '#CD7F32',
        gradient: 'from-amber-700 via-amber-600 to-yellow-700',
        popular: false,
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '10 scenarii/lună',
            '10 video-uri filmate și editate/lună',
            'Gândirea unei strategii personalizate',
        ],
    },
    {
        name: 'Silver',
        tagline: 'Cel mai ales de clienți',
        price: '700',
        color: '#C0C0C0',
        gradient: 'from-slate-400 via-slate-300 to-gray-400',
        popular: false,
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '18 scenarii/lună',
            '18 video-uri filmate și editate/lună',
            'Gândirea unei strategii personalizate',
            'Administrarea reclamelor (Meta, Google, TikTok)',
        ],
    },
    {
        name: 'Gold',
        tagline: 'Recomandarea noastră',
        price: '1000',
        color: '#FFD700',
        gradient: 'from-yellow-400 via-amber-400 to-yellow-500',
        popular: true,
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '18 scenarii/lună',
            '18 video-uri filmate și editate/lună',
            'Gândirea unei strategii personalizate',
            'Administrarea reclamelor (Meta, Google, TikTok)',
            'Actori pentru filmări personalizate',
        ],
    },
    {
        name: 'Diamond',
        tagline: 'Pachetul complet',
        price: '1500',
        color: '#24c6dc',
        gradient: 'from-cyan-400 via-blue-400 to-cyan-500',
        popular: false,
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '18 scenarii/lună',
            '18 video-uri filmate și editate/lună',
            'Gândirea unei strategii personalizate',
            'Administrarea reclamelor (Meta, Google, TikTok)',
            'Creare/Înnoire Site + Administrare Site',
            'Actori pentru filmări personalizate',
            'Story cu tag de la influencer (minim 100k)',
        ],
    },
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const [activePackage, setActivePackage] = useState<number>(2);

    return (
        <section id="services" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#24c6dc] text-sm font-medium mb-4">
                        Servicii
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Alege pachetul </span>
                        <span className="gradient-text">potrivit</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4">
                        Soluții complete de marketing digital adaptate nevoilor tale
                    </p>
                </motion.div>

                {/* Package selector tabs - scrollable on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex overflow-x-auto scrollbar-hide gap-2 md:gap-3 mb-8 md:mb-12 pb-2 justify-start md:justify-center"
                >
                    {packages.map((pkg, index) => (
                        <button
                            key={index}
                            onClick={() => setActivePackage(index)}
                            className={`flex-shrink-0 relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                                activePackage === index
                                    ? 'text-[#0f0c29]'
                                    : 'text-white/60 bg-white/5'
                            }`}
                        >
                            {activePackage === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${pkg.gradient}`}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                                {pkg.name}
                                {pkg.popular && <HiSparkles className="w-3 h-3 md:w-4 md:h-4" />}
                            </span>
                        </button>
                    ))}
                </motion.div>

                {/* Active package display */}
                <motion.div
                    key={activePackage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <div
                        className="relative rounded-2xl md:rounded-3xl overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${packages[activePackage].color}15 0%, transparent 50%)`,
                        }}
                    >
                        <div className="relative glass-card p-5 md:p-12">
                            {/* Popular badge */}
                            {packages[activePackage].popular && (
                                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                                    <div className="flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-[#ffd93d] to-[#ff6b6b] text-[#0f0c29] text-xs md:text-sm font-bold">
                                        <HiSparkles />
                                        <span>POPULAR</span>
                                    </div>
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                                {/* Left side - Info */}
                                <div>
                                    <div
                                        className={`inline-block text-xs md:text-sm font-medium mb-1 md:mb-2 bg-gradient-to-r ${packages[activePackage].gradient} bg-clip-text text-transparent`}
                                    >
                                        {packages[activePackage].tagline}
                                    </div>

                                    <h3
                                        className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4"
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                    >
                                        Pachet {packages[activePackage].name}
                                    </h3>

                                    <div className="flex items-baseline gap-1 md:gap-2 mb-6 md:mb-8">
                                        <span
                                            className="text-4xl md:text-6xl lg:text-7xl font-bold"
                                            style={{
                                                fontFamily: 'Syne, sans-serif',
                                                color: packages[activePackage].color
                                            }}
                                        >
                                            €{packages[activePackage].price}
                                        </span>
                                        <span className="text-white/50 text-base md:text-lg">/lună</span>
                                    </div>

                                    <a
                                        href="#contact"
                                        className={`inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg bg-gradient-to-r ${packages[activePackage].gradient} text-[#0f0c29] active:scale-95 transition-transform`}
                                    >
                                        <span>Solicită ofertă</span>
                                        <FaArrowRight />
                                    </a>
                                </div>

                                {/* Right side - Features */}
                                <div>
                                    <h4 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">Ce este inclus:</h4>
                                    <ul className="space-y-2.5 md:space-y-4">
                                        {packages[activePackage].features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 md:gap-3">
                                                <div
                                                    className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                    style={{ backgroundColor: `${packages[activePackage].color}20` }}
                                                >
                                                    <FaCheck
                                                        className="w-2.5 h-2.5 md:w-3 md:h-3"
                                                        style={{ color: packages[activePackage].color }}
                                                    />
                                                </div>
                                                <span className="text-white/80 text-sm md:text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Quick comparison - mini cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
                >
                    {packages.map((pkg, index) => (
                        <button
                            key={index}
                            onClick={() => setActivePackage(index)}
                            className={`p-4 md:p-6 rounded-xl md:rounded-2xl border text-left transition-all ${
                                activePackage === index
                                    ? 'border-white/30 bg-white/10'
                                    : 'border-white/10 bg-white/5'
                            }`}
                        >
                            <div
                                className="text-xl md:text-2xl font-bold mb-0.5 md:mb-1"
                                style={{
                                    fontFamily: 'Syne, sans-serif',
                                    color: pkg.color
                                }}
                            >
                                €{pkg.price}
                            </div>
                            <div className="text-white font-semibold text-sm md:text-base">{pkg.name}</div>
                            <div className="text-white/40 text-xs md:text-sm">{pkg.features.length} beneficii</div>
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
