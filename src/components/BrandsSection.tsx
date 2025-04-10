'use client';

import { useState } from 'react';

type Brand = {
    name: string;
    logo: string;
    description: string;
    followersBefore: number;
    followersAfter: number;
    services: string[];
    campaignDuration: string;
    engagementRate: string;
};

const brands: Brand[] = [
    {
        name: 'Hug the plate',
        logo: '/logos/logo-hug.png',
        description: 'Hug the plate unul din cele mai mari lanturi de restaurante din Sibiu',
        followersBefore: 3000,
        followersAfter: 12500,
        services: ['Instagram Reels', 'TikTok video', 'Video editing'],
        campaignDuration: '3 luni',
        engagementRate: '+320%',
    },
    {
        name: 'Wei Ramen',
        logo: '/logos/logo-wei-ramen.jpeg',
        description: 'Restaurant chinezesc premium cu meniu mananci cat poti',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
    {
        name: 'Smiles By ',
        logo: '/logos/logo-smiles.png',
        description: 'Cabinet stomatologic profesionist',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
    {
        name: 'Yummy Yang',
        logo: '/logos/logo-yummyyang.svg',
        description: 'Restaurant chinezesc premium cu meniu mananci cat poti',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
    // {
    //     name: 'Stefana Peev',
    //     logo: '/logos/logo-stefanapeev.svg',
    //     description: 'Brand 2 ofera servicii de e-commerce de top la nivel european.',
    //     followersBefore: 800,
    //     followersAfter: 4600,
    //     services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
    //     campaignDuration: '2 luni',
    //     engagementRate: '+215%',
    // },
    // {
    //     name: 'We are one',
    //     logo: '/logos/logo-weareone.png',
    //     description: 'Brand 2 ofera servicii de e-commerce de top la nivel european.',
    //     followersBefore: 800,
    //     followersAfter: 4600,
    //     services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
    //     campaignDuration: '2 luni',
    //     engagementRate: '+215%',
    // },
    // {
    //     name: 'LaFiesta',
    //     logo: '/logos/logo-la-fiesta.svg',
    //     description: 'Cele mai tari petreceri din Sibiu pentru tineret',
    //     followersBefore: 800,
    //     followersAfter: 4600,
    //     services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
    //     campaignDuration: '2 luni',
    //     engagementRate: '+215%',
    // },
    {
        name: 'TransAgape',
        logo: '/logos/logo-trans-agape-maro.png',
        description: 'Cel mai cunoscut lant de pain din Sibiu',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
    {
        name: 'CrediResidence',
        logo: '/logos/logo-pureboost.svg',
        description: 'E si el pe aici',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
    {
        name: 'MakeupNUSTIUCE',
        logo: '/logos/logo-vitalstore.svg',
        description: 'La fel si asta',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
];

export default function BrandsSection() {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setFlippedIndex(flippedIndex === index ? null : index);
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12">Branduri care au avut incredere</h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="perspective transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
                            onClick={() => toggleCard(index)}
                        >
                            <div
                                className={`relative w-full h-64 transition-transform duration-700 transform-style preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''}`}>
                                {/* Fata */}
                                <div
                                    className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden">
                                    <img src={brand.logo} alt={brand.name} className="h-20 max-w-[70%]"/>
                                    <div className="absolute bottom-3 right-3 text-xs text-gray-400 italic">Apasa</div>
                                </div>

                                {/* Verso */}
                                <div
                                    className="absolute w-full h-full bg-emerald-100 rounded-lg shadow-lg p-6 text-emerald-800 transform rotate-y-180 backface-hidden overflow-hidden flex flex-col justify-between"
                                >
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">{brand.name}</h3>
                                        <p className="text-xs text-gray-700 mb-3">{brand.description}</p>

                                        <div className="text-sm text-left space-y-1">
                                            <p><span
                                                className="font-semibold">Followers:</span> {brand.followersBefore.toLocaleString()} ➜ {brand.followersAfter.toLocaleString()}
                                            </p>
                                            <p><span
                                                className="font-semibold">Servicii:</span> {brand.services.join(', ')}
                                            </p>
                                            <p><span className="font-semibold">Campanie:</span> {brand.campaignDuration}
                                            </p>
                                            <p><span className="font-semibold">Engagement:</span> {brand.engagementRate}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind custom CSS */}
            <style jsx>{`
                .perspective {
                    perspective: 1000px;
                    cursor: pointer;
                }

                .transform-style {
                    transform-style: preserve-3d;
                }

                .rotate-y-180 {
                    transform: rotateY(180deg);
                }

                .backface-hidden {
                    backface-visibility: hidden;
                }
            `}
            </style>
        </section>
    );
}
