'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface CounterProps {
    from: number;
    to: number;
    suffix?: string;
    duration?: number;
}

function AnimatedCounter({ from, to, suffix = '', duration = 2 }: CounterProps) {
    const [count, setCount] = useState(from);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration,
                onUpdate: (value) => setCount(Math.floor(value)),
                ease: "easeOut"
            });
            return () => controls.stop();
        }
    }, [isInView, from, to, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

const stats = [
    {
        value: 50,
        suffix: '+',
        label: 'Clienți mulțumiți',
        description: 'Branduri care au crescut alături de noi'
    },
    {
        value: 10,
        suffix: 'M+',
        label: 'Vizualizări generate',
        description: 'Conținut care a ajuns la milioane'
    },
    {
        value: 300,
        suffix: '%',
        label: 'Creștere medie',
        description: 'Engagement și followers'
    },
    {
        value: 500,
        suffix: '+',
        label: 'Proiecte finalizate',
        description: 'Campanii de succes livrate'
    },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="stats" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[#24c6dc]/10 via-[#ff6b6b]/5 to-[#ffd93d]/10 blur-3xl"
                />
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                        Rezultate care <span className="gradient-text">vorbesc</span>
                    </h2>
                    <p className="text-white/60 max-w-lg mx-auto">
                        Cifrele nu mint. Iată impactul real pe care echipa noastră l-a avut asupra brandurilor partenere.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="group"
                        >
                            <motion.div
                                className="relative h-full glass-card p-8 text-center overflow-hidden"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#24c6dc]/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <div
                                        className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2"
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                    >
                                        <AnimatedCounter
                                            from={0}
                                            to={stat.value}
                                            suffix={stat.suffix}
                                            duration={2 + index * 0.3}
                                        />
                                    </div>
                                    <div className="text-lg font-semibold text-white mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-white/50">
                                        {stat.description}
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#24c6dc]/10 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
            </div>
        </section>
    );
}
