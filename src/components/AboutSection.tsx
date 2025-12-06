'use client';

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiTrendingUp, HiUserGroup } from "react-icons/hi";

export default function AboutSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const isVideoInView = useInView(videoContainerRef, { margin: "-100px" });
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    // Auto play/pause based on visibility
    useEffect(() => {
        if (!videoRef.current) return;

        if (isVideoInView) {
            videoRef.current.muted = false;
            videoRef.current.play().catch(() => {
                if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play();
                    setIsMuted(true);
                }
            });
            setIsPlaying(true);
            setIsMuted(false);
        } else {
            videoRef.current.pause();
            videoRef.current.muted = true;
            setIsPlaying(false);
            setIsMuted(true);
        }
    }, [isVideoInView]);

    const toggleVideo = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const features = [
        {
            icon: <HiUserGroup className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Echipă dedicată",
            description: "Specialiști în marketing digital, video și design"
        },
        {
            icon: <HiSparkles className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Creativitate",
            description: "Idei fresh care captivează și convertesc"
        },
        {
            icon: <HiLightningBolt className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Rapiditate",
            description: "Rezultate vizibile în primele săptămâni"
        },
        {
            icon: <HiTrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
            title: "Creștere",
            description: "Strategie focusată pe ROI măsurabil"
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#24c6dc] text-sm font-medium mb-4">
                        Despre noi
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Echipa ta de </span>
                        <span className="gradient-text">marketing</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto px-4">
                        Suntem o echipă pasionată de marketing digital, gata să transforme viziunea ta în realitate. 
                        Ne ocupăm de tot ce înseamnă prezență online.
                    </p>
                </motion.div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Video section - Portrait */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative flex justify-center order-1 lg:order-none"
                        ref={videoContainerRef}
                    >
                        <div className="relative w-full max-w-[280px] md:max-w-[350px]">
                            <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                                <div className="relative aspect-[9/16]">
                                    <video
                                        ref={videoRef}
                                        src="/video/ssmediahub-intro.mp4"
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Video controls */}
                                    <div className="absolute bottom-3 right-3 flex gap-2">
                                        <button
                                            onClick={toggleMute}
                                            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                                            aria-label={isMuted ? "Activează sunet" : "Dezactivează sunet"}
                                        >
                                            {isMuted ? <FaVolumeMute size={12} /> : <FaVolumeUp size={12} />}
                                        </button>
                                        <button
                                            onClick={toggleVideo}
                                            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                                            aria-label={isPlaying ? "Pauză" : "Redare"}
                                        >
                                            {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-3 md:space-y-5"
                    >
                        <div className="mb-6 md:mb-8">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                                De ce să lucrezi cu noi?
                            </h3>
                            <p className="text-sm md:text-base text-white/60">
                                Nu ești doar un client - ești un partener. Tratăm fiecare brand ca și cum ar fi al nostru.
                            </p>
                        </div>

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-card p-4 md:p-5"
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#24c6dc] to-[#24c6dc]/50 flex items-center justify-center text-white flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-base md:text-lg font-semibold text-white mb-0.5 md:mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            {feature.title}
                                        </h4>
                                        <p className="text-white/60 text-xs md:text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
