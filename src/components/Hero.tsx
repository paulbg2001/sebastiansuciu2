'use client';

export default function Hero() {
    return (
        <section id="home" className="h-[80vh] w-full relative overflow-hidden bg-gradient-to-r from-[#d1fae5] to-[#a7f3d0]">
            <div className="absolute top-1/2 left-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse-slow z-0"
                 style={{
                     background: `radial-gradient(circle, #ffffff 0%, #a7f3d0 40%, #10b981 100%)`,
                     opacity: 0.6,
                     filter: 'blur(60px)'
                 }}
            />

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-emerald-900">
                    Sebastian Suciu Marketing
                </h1>
                <p className="mt-4 text-lg text-emerald-800">
                    Ai o afacere care știi că merită mai mult? Lasă marketing-ul în grija echipei mele pentru creșterea vânzărilor.
                </p>
                <a
                    href="#contact"
                    className="mt-8 inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
                >
                    Incepe acum
                </a>
            </div>

            <style jsx>{`
                @keyframes pulseSlow {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 0.9;
                    }
                }

                .animate-pulse-slow {
                    animation: pulseSlow 3s ease-in-out infinite;
                }
            `}</style>

        </section>
    );
}
