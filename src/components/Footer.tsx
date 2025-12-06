'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaLinkedin, FaHeart, FaArrowUp, FaCode } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { href: '#home', label: 'Acasă' },
        { href: '#about', label: 'Despre' },
        { href: '#portfolio', label: 'Portofoliu' },
        { href: '#services', label: 'Servicii' },
        { href: '#contact', label: 'Contact' },
    ];

    const socialLinks = [
        { icon: <FaInstagram />, href: 'https://www.instagram.com/sebastiansuciu21/', label: 'Instagram' },
        { icon: <FaTiktok />, href: 'https://www.tiktok.com/@sebisuciu21', label: 'TikTok' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    ];

    return (
        <footer className="relative pt-24 pb-8 px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a15] to-transparent pointer-events-none" />
            
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-6xl mx-auto relative">
                {/* Main footer content */}
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    {/* Brand section */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link href="#home" className="inline-flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#24c6dc] to-[#ff6b6b] flex items-center justify-center">
                                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>SS</span>
                                </div>
                                <span 
                                    className="text-xl font-bold text-white"
                                    style={{ fontFamily: 'Syne, sans-serif' }}
                                >
                                    ss<span className="gradient-text">media</span>hub
                                </span>
                            </Link>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                Agenție de marketing digital axată pe rezultate reale și creștere organică prin conținut relevant și autentic.
                            </p>
                            
                            {/* Social links */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                                Navigație
                            </h4>
                            <nav className="space-y-3">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        className="block text-white/50 hover:text-white transition-colors text-sm"
                                        whileHover={{ x: 5 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    </div>

                    {/* Contact & CTA */}
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                                Hai să colaborăm
                            </h4>
                            <p className="text-white/50 text-sm mb-4">
                                Ești gata să îți crești afacerea?
                            </p>
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] font-semibold text-sm"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(36, 198, 220, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contactează-ne
                            </motion.a>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-sm flex items-center gap-1"
                    >
                        © {new Date().getFullYear()} ssmediahub. Făcut cu 
                        <FaHeart className="text-[#ff6b6b] mx-1" /> 
                        în România
                    </motion.p>

                    {/* Back to top button */}
                    <motion.button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors"
                        whileHover={{ y: -3 }}
                        aria-label="Înapoi sus"
                    >
                        <span>Înapoi sus</span>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#24c6dc] group-hover:border-[#24c6dc] group-hover:text-[#0f0c29] transition-all">
                            <FaArrowUp className="w-3 h-3" />
                        </div>
                    </motion.button>
                </div>

                {/* Developer credit */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-6 border-t border-white/5 text-center"
                >
                    <a
                        href="https://kipama.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors group"
                    >
                        <FaCode className="w-4 h-4" />
                        <span>Design & Development by</span>
                        <span className="font-semibold text-[#24c6dc] group-hover:text-[#ff6b6b] transition-colors">Kipama</span>
                    </a>
                </motion.div>
            </div>
        </footer>
    );
}
