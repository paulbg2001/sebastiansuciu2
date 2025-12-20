'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCheck, FaArrowRight, FaStar } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const allServices = [
    'Administrarea TikTok',
    'Administrarea Instagram',
    'Administrarea Facebook',
    'Creare scenarii video',
    'Filmare profesională video',
    'Editare video high-end',
    'Gândirea unei strategii personalizate',
    'Administrarea reclamelor (Meta, Google, TikTok)',
    'Creare/Înnoire Site + Administrare Site',
    'Actori pentru filmări personalizate',
    'Story cu tag de la influencer',
    'Consultantă marketing 1-la-1'
];

export default function ServicesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section id="services" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#24c6dc]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl -z-10" />

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
                        <span className="text-white">Soluții Complete de </span>
                        <span className="gradient-text">Marketing</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto px-4">
                        Nu vindem pachete standard. Oferim strategii personalizate pentru afacerea ta.
                    </p>
                </motion.div>

                {/* Single Card Display */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#24c6dc] via-[#7b4397] to-[#ff6b6b]">
                        <div className="relative h-full bg-[#0f0c29] rounded-3xl overflow-hidden backdrop-blur-xl">
                            {/* Background Gradient Mesh */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#24c6dc]/10 via-transparent to-[#ff6b6b]/10 opacity-50" />

                            <div className="relative p-6 md:p-12">
                                <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                                    {/* Left Side: Pitch */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-6">
                                            <div className="flex text-[#ffd93d]">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className="w-4 h-4 md:w-5 md:h-5" />
                                                ))}
                                            </div>
                                            <span className="text-white/60 text-sm font-medium">Servicii Premium</span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            Tot ce ai nevoie pentru a domina online-ul
                                        </h3>

                                        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                                            Fie că ești la început de drum sau vrei să scalezi afacerea existentă,
                                            construim mixul perfect de servicii pentru obiectivele tale.
                                            Fără costuri ascunse, doar rezultate măsurabile.
                                        </p>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <a
                                                href="#contact"
                                                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] font-bold text-lg hover:shadow-[0_0_20px_rgba(36,198,220,0.4)] transition-all active:scale-95"
                                            >
                                                <span>Solicită Ofertă Personalizată</span>
                                                <FaArrowRight />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Right Side: Services Grid */}
                                    <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
                                        <h4 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
                                            <HiSparkles className="text-[#ffd93d]" />
                                            <span>Serviciile noastre</span>
                                        </h4>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                                            {allServices.map((service, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-[#24c6dc]/20 flex items-center justify-center flex-shrink-0">
                                                        <FaCheck className="w-2.5 h-2.5 text-[#24c6dc]" />
                                                    </div>
                                                    <span className="text-white/80 text-sm md:text-base font-medium">
                                                        {service}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
