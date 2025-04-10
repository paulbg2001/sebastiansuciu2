'use client';

import { motion } from 'framer-motion';

const packages = [
    {
        name: 'Pachet Bronze',
        color: 'bg-[#cd7f32]',
        textColor: 'text-white',
        price: '500€/luna',
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '10 scenarii/luna',
            '10 video-uri filmate si editate/luna',
            'Gandirea unei strategii bine alese',
        ],
    },
    {
        name: 'Pachet Silver',
        color: 'bg-gray-300',
        textColor: 'text-gray-900',
        price: '700€/luna',
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '18 scenarii/luna',
            '18 video-uri filmate si editate/luna',
            'Gandirea unei strategii bine alese',
            'Administrarea reclamelor (Google, Facebook si TikTok)',
        ],
    },
    {
        name: 'Pachet Gold',
        color: 'bg-yellow-400',
        textColor: 'text-yellow-900',
        price: '1000€/luna',
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '18 scenarii/luna',
            '18 video-uri filmate si editate/luna',
            'Gandirea unei strategii bine alese',
            'Administrarea reclamelor (Google, Facebook si TikTok)',
            'Actori pentru filmari personalizate',
        ],
    },
    {
        name: 'Pachet Diamond',
        color: 'bg-gradient-to-tr from-cyan-200 via-white to-emerald-300',
        textColor: 'text-emerald-900',
        price: '1500€/luna',
        features: [
            'Administrarea TikTok',
            'Administrarea Instagram',
            'Administrarea Facebook',
            '18 scenarii/luna',
            '18 video-uri filmate si editate/luna',
            'Gandirea unei strategii bine alese',
            'Administrarea reclamelor (Google, Facebook si TikTok)',
            'Creare/Innoire Site + Administrare Site',
            'Actori pentru filmari personalizate',
            'Story cu tag de la un alt influencer diferit lunar cu minim 100k',
        ],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-emerald-700 mb-12">Serviciile mele</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`rounded-2xl shadow-xl p-6 ${pkg.color} ${pkg.textColor} hover:scale-105 transition-transform duration-300 flex flex-col justify-between`}
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                                <ul className="space-y-2 text-left text-sm mb-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h4 className="text-lg font-semibold mt-auto">PRET: {pkg.price}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
