import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-emerald-700 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo + descriere */}
                <div>
                    <h3 className="text-2xl font-bold mb-2">Sebastian Suciu</h3>
                    <p className="text-sm text-white/80">
                        Agentie de marketing digital axata pe rezultate reale si crestere organica prin continut relevant si autentic.
                    </p>
                </div>

                {/* Navigatie */}
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold mb-2">Navigatie</h4>
                    <ul className="text-sm space-y-1">
                        <li><a href="#acasa" className="hover:underline">Acasa</a></li>
                        <li><a href="#servicii" className="hover:underline">Servicii</a></li>
                        <li><a href="#branduri" className="hover:underline">Portofoliu</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Urmareste-ne</h4>
                    <div className="flex space-x-4 text-2xl">
                        <a href="https://instagram.com" target="_blank" className="hover:text-emerald-300">
                            <FaInstagram />
                        </a>
                        <a href="https://tiktok.com" target="_blank" className="hover:text-emerald-300">
                            <FaTiktok />
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-emerald-300">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-white/60 mt-10">
                © {new Date().getFullYear()} Sebastian Suciu. Toate drepturile rezervate.
            </div>
        </footer>
    );
}
