'use client';

import { useEffect, useState } from 'react';
import {FiMenu, FiX} from "react-icons/fi";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = (
        <>
            <a href="#acasa"
               className="text-white/90 hover:text-white px-3 py-2 transition font-medium hover:underline underline-offset-4">Acasa</a>
            <a href="#about"
               className="text-white/90 hover:text-white px-3 py-2 transition font-medium hover:underline underline-offset-4">Despre</a>
            <a href="#portfolio"
               className="text-white/90 hover:text-white px-3 py-2 transition font-medium hover:underline underline-offset-4">Portofliu</a>
            <a href="#services"
               className="text-white/90 hover:text-white px-3 py-2 transition font-medium hover:underline underline-offset-4">Servicii</a>
            <a href="#contact"
               className="text-white/90 hover:text-white px-3 py-2 transition font-medium hover:underline underline-offset-4">Contact</a>
        </>
    );

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-emerald-700 shadow' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-white text-lg font-semibold">Sebastian Suciu</div>

                <div className="hidden md:block">
                    <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex text-white text-lg">
                        {navLinks}
                    </div>
                </div>

                {/* Mobile burger */}
                <div className="md:hidden text-white text-2xl">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="flex flex-col md:hidden bg-emerald-600 px-6 py-4 space-y-4 text-white text-lg">
                    {navLinks}
                </div>
            )}
        </header>
    );
}
