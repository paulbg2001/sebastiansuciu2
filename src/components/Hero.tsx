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
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        })
    };

    const floatingShapes = [
        { size: 300, left: '10%', top: '20%', delay: 0, color: 'rgba(36, 198, 220, 0.1)' },
        { size: 200, right: '15%', top: '30%', delay: 0.5, color: 'rgba(255, 107, 107, 0.1)' },
        { size: 150, left: '5%', bottom: '20%', delay: 1, color: 'rgba(255, 217, 61, 0.08)' },
        { size: 250, right: '5%', bottom: '10%', delay: 0.3, color: 'rgba(36, 198, 220, 0.08)' },
    ];

    return (
        <section
            id="home"
            ref={containerRef}
            className="min-h-screen w-full relative overflow-hidden flex items-center justify-center"
        >
            {/* Animated floating shapes */}
            {floatingShapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.left,
                        right: shape.right,
                        top: shape.top,
                        bottom: shape.bottom,
                        background: shape.color,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(36, 198, 220, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(36, 198, 220, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Main content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 max-w-6xl mx-auto px-6 text-center"
            >
                {/* Main heading */}
                <motion.h1
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
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
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
                >
                    Ai o afacere care merită să fie văzută? Noi ne ocupăm de tot - strategie, conținut, ads și creștere - ca tu să te concentrezi pe business.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="#contact"
                        className="btn-primary text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Începe acum
                    </motion.a>
                    <motion.a
                        href="#portfolio"
                        className="btn-secondary text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Vezi rezultatele
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#stats"
                    className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <FaArrowDown className="text-lg" />
                </motion.a>
            </motion.div>

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
        </section>
    );
}
