'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen w-full relative overflow-hidden flex items-center justify-center px-4"
        >
            {/* Simple gradient background shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#24c6dc]/10 blur-3xl"
                />
                <div 
                    className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 rounded-full bg-[#ff6b6b]/10 blur-3xl"
                />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[400, 600, 800].map((size, index) => (
                    <motion.div
                        key={index}
                        className="absolute rounded-full border border-white/5"
                        style={{
                            width: size,
                            height: size,
                            left: -size / 2,
                            top: -size / 2,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 60 + index * 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Main content with scroll animation */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 max-w-6xl mx-auto text-center"
            >
                {/* Main heading */}
                <motion.h1
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                >
                    <span className="text-white">Echipa ta de </span>
                    <span className="gradient-text">marketing</span>
                    <br />
                    <span className="text-white">pentru </span>
                    <span className="gradient-text">rezultate reale</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-base md:text-xl text-white/70 max-w-2xl mx-auto mb-8 md:mb-10 px-4"
                >
                    Ai o afacere care merită să fie văzută? Noi ne ocupăm de tot - strategie, conținut, ads și creștere - ca tu să te concentrezi pe business.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
                >
                    <a
                        href="#contact"
                        className="btn-primary text-base md:text-lg w-full sm:w-auto"
                    >
                        Începe acum
                    </a>
                    <a
                        href="#portfolio"
                        className="btn-secondary text-base md:text-lg w-full sm:w-auto"
                    >
                        Vezi rezultatele
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
            >
                <a
                    href="#stats"
                    className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <FaArrowDown className="text-lg" />
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
}
