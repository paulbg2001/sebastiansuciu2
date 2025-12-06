'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
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
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activePackage, setActivePackage] = useState<number>(2); // Gold by default

    return (
        <section id="services" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#ffd93d]/5 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#24c6dc]/5 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#24c6dc] text-sm font-medium mb-4">
                        Servicii
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Alege pachetul </span>
                        <span className="gradient-text">potrivit</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Soluții complete de marketing digital adaptate nevoilor și bugetului tău
                    </p>
                </motion.div>

                {/* Package selector tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {packages.map((pkg, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActivePackage(index)}
                            className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activePackage === index
                                    ? 'text-[#0f0c29]'
                                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activePackage === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${pkg.gradient}`}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {pkg.name}
                                {pkg.popular && (
                                    <HiSparkles className="w-4 h-4" />
                                )}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Active package display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePackage}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div
                            className="relative rounded-3xl overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, ${packages[activePackage].color}15 0%, transparent 50%)`,
                            }}
                        >
                            {/* Border glow */}
                            <div
                                className="absolute inset-0 rounded-3xl"
                                style={{
                                    background: `linear-gradient(135deg, ${packages[activePackage].color}30, transparent 50%)`,
                                    padding: '1px',
                                }}
                            />

                            <div className="relative glass-card p-8 md:p-12">
                                {/* Popular badge */}
                                {packages[activePackage].popular && (
                                    <div className="absolute top-6 right-6">
                                        <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#ffd93d] to-[#ff6b6b] text-[#0f0c29] text-sm font-bold">
                                            <HiSparkles />
                                            <span>POPULAR</span>
                                        </div>
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {/* Left side - Info */}
                                    <div>
                                        <div
                                            className={`inline-block text-sm font-medium mb-2 bg-gradient-to-r ${packages[activePackage].gradient} bg-clip-text text-transparent`}
                                        >
                                            {packages[activePackage].tagline}
                                        </div>

                                        <h3
                                            className="text-4xl md:text-5xl font-bold text-white mb-4"
                                            style={{ fontFamily: 'Syne, sans-serif' }}
                                        >
                                            Pachet {packages[activePackage].name}
                                        </h3>

                                        <div className="flex items-baseline gap-2 mb-8">
                                            <span
                                                className="text-6xl md:text-7xl font-bold"
                                                style={{
                                                    fontFamily: 'Syne, sans-serif',
                                                    color: packages[activePackage].color
                                                }}
                                            >
                                                €{packages[activePackage].price}
                                            </span>
                                            <span className="text-white/50 text-lg">/lună</span>
                                        </div>

                                        <motion.a
                                            href="#contact"
                                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r ${packages[activePackage].gradient} text-[#0f0c29] shadow-lg`}
                                            whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${packages[activePackage].color}50` }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span>Solicită ofertă</span>
                                            <FaArrowRight />
                                        </motion.a>
                                    </div>

                                    {/* Right side - Features */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-6">Ce este inclus:</h4>
                                        <ul className="space-y-4">
                                            {packages[activePackage].features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                                        style={{ backgroundColor: `${packages[activePackage].color}20` }}
                                                    >
                                                        <FaCheck
                                                            className="w-3 h-3"
                                                            style={{ color: packages[activePackage].color }}
                                                        />
                                                    </div>
                                                    <span className="text-white/80">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Quick comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-white/50 mb-4">
                        Ai nevoie de un pachet personalizat?
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#24c6dc] hover:text-white transition-colors font-medium group"
                        whileHover={{ x: 5 }}
                    >
                        <span>Contactează-ne pentru o ofertă custom</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>

                {/* All packages mini cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {packages.map((pkg, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActivePackage(index)}
                            className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                                activePackage === index
                                    ? 'border-white/30 bg-white/10'
                                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                            }`}
                            whileHover={{ y: -5 }}
                        >
                            <div
                                className="text-2xl font-bold mb-1"
                                style={{
                                    fontFamily: 'Syne, sans-serif',
                                    color: pkg.color
                                }}
                            >
                                €{pkg.price}
                            </div>
                            <div className="text-white font-semibold">{pkg.name}</div>
                            <div className="text-white/40 text-sm">{pkg.features.length} beneficii</div>
                        </motion.button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
