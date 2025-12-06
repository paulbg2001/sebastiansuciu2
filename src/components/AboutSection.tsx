'use client';

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { HiSparkles, HiLightningBolt, HiTrendingUp, HiUserGroup } from "react-icons/hi";

export default function AboutSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const isVideoInView = useInView(videoContainerRef, { margin: "-100px" });
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    // Auto play/pause based on visibility
    useEffect(() => {
        if (!videoRef.current) return;

        if (isVideoInView) {
            // Video is in view - play with sound
            videoRef.current.muted = false;
            videoRef.current.play().catch(() => {
                // Autoplay with sound might be blocked, try muted
                if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play();
                    setIsMuted(true);
                }
            });
            setIsPlaying(true);
            setIsMuted(false);
        } else {
            // Video is out of view - pause and mute
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
            icon: <HiUserGroup className="w-6 h-6" />,
            title: "Echipă dedicată",
            description: "Specialiști în marketing digital, video și design"
        },
        {
            icon: <HiSparkles className="w-6 h-6" />,
            title: "Creativitate",
            description: "Idei fresh care captivează și convertesc"
        },
        {
            icon: <HiLightningBolt className="w-6 h-6" />,
            title: "Rapiditate",
            description: "Rezultate vizibile în primele săptămâni"
        },
        {
            icon: <HiTrendingUp className="w-6 h-6" />,
            title: "Creștere",
            description: "Strategie focusată pe ROI măsurabil"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section id="about" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#24c6dc]/20 blur-3xl" />
            </div>

            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Section header */}
                <motion.div variants={itemVariants} className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#24c6dc] text-sm font-medium mb-4">
                        Despre noi
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Echipa ta de </span>
                        <span className="gradient-text">marketing</span>
                    </h2>
                    <p className="text-lg text-white/60 max-w-3xl mx-auto">
                        Suntem o echipă pasionată de marketing digital, gata să transforme viziunea ta în realitate. 
                        Ne ocupăm de tot ce înseamnă prezență online - de la strategie și conținut, până la ads și creștere organică - 
                        astfel încât tu să te poți concentra pe ceea ce faci cel mai bine: să îți conduci afacerea.
                    </p>
                </motion.div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video section - Portrait */}
                    <motion.div
                        variants={itemVariants}
                        className="relative group flex justify-center"
                        ref={videoContainerRef}
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#24c6dc]/20 via-[#ff6b6b]/20 to-[#ffd93d]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative w-full max-w-[350px]">
                            <div className="gradient-border">
                                <div className="glass-card overflow-hidden">
                                    <div className="relative aspect-[9/16]">
                                        <video
                                            ref={videoRef}
                                            src="/video/ssmediahub-intro.mp4"
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                        
                                        {/* Video controls */}
                                        <div className="absolute bottom-4 right-4 flex gap-2">
                                            <motion.button
                                                onClick={toggleMute}
                                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label={isMuted ? "Activează sunet" : "Dezactivează sunet"}
                                            >
                                                {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
                                            </motion.button>
                                            <motion.button
                                                onClick={toggleVideo}
                                                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label={isPlaying ? "Pauză" : "Redare"}
                                            >
                                                {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                                            </motion.button>
                                        </div>

                                        {/* Video overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29]/50 to-transparent pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features section */}
                    <motion.div variants={itemVariants} className="space-y-5">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                                De ce să lucrezi cu noi?
                            </h3>
                            <p className="text-white/60">
                                Nu ești doar un client - ești un partener. Tratăm fiecare brand ca și cum ar fi al nostru, 
                                cu aceeași pasiune și dedicare.
                            </p>
                        </div>

                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="glass-card p-5 group hover:bg-white/10 transition-colors cursor-default"
                                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#24c6dc] to-[#24c6dc]/50 flex items-center justify-center text-white flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            {feature.title}
                                        </h4>
                                        <p className="text-white/60 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
