'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['home', 'about', 'portfolio', 'results', 'services', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navItems = [
        { href: '#home', label: 'Acasă' },
        { href: '#about', label: 'Despre' },
        { href: '#portfolio', label: 'Portofoliu' },
        { href: '#services', label: 'Servicii' },
        { href: '#contact', label: 'Contact' },
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const menuItemVariants = {
        closed: { opacity: 0, x: -20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'py-3 backdrop-blur-xl bg-[#0f0c29]/80 border-b border-white/10'
                    : 'py-6 bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#home"
                    className="relative group flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {/* Logo icon */}
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#24c6dc] to-[#ff6b6b] flex items-center justify-center">
                        <span className="text-white font-bold text-lg" style={{ fontFamily: 'Syne, sans-serif' }}>SS</span>
                    </div>
                    <div className="flex flex-col">
                        <span
                            className="text-xl font-bold text-white leading-tight"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            ss<span className="gradient-text">media</span>hub
                        </span>
                    </div>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#24c6dc] to-[#ff6b6b] group-hover:w-full transition-all duration-300" />
                </motion.a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item, index) => {
                        const isActive = activeSection === item.href.slice(1);
                        return (
                            <motion.a
                                key={index}
                                href={item.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                                }`}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-full bg-white/10 -z-10"
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        );
                    })}

                    {/* CTA Button */}
                    <motion.a
                        href="#contact"
                        className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] text-sm font-semibold"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(36, 198, 220, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contactează-ne
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden relative w-10 h-10 flex items-center justify-center text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    whileTap={{ scale: 0.9 }}
                    aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
                >
                    <AnimatePresence mode="wait">
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiX />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FiMenu />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="md:hidden overflow-hidden backdrop-blur-xl bg-[#0f0c29]/95 border-t border-white/10"
                    >
                        <div className="px-6 py-6 space-y-2">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    variants={menuItemVariants}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-3 px-4 text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                variants={menuItemVariants}
                                onClick={() => setMenuOpen(false)}
                                className="block mt-4 py-3 px-4 text-lg font-semibold text-center text-[#0f0c29] bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] rounded-xl"
                            >
                                Contactează-ne
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
