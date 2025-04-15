'use client';

import { useEffect, useRef, useState } from 'react';

type Brand = {
    name: string;
    logo: string;
    image: string;
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
        image: '/2.PNG',
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
        image: '/3.PNG',
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
        image: '/4.PNG',
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
        image: '/5.PNG',
        description: 'Restaurant chinezesc premium cu meniu mananci cat poti',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
    {
        name: 'TransAgape',
        logo: '/logos/logo-trans-agape-maro.png',
        image: '/6.PNG',
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
        image: '/7.PNG',
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
        image: '/8.PNG',
        description: 'La fel si asta',
        followersBefore: 800,
        followersAfter: 4600,
        services: ['Content foto', 'Campanie UGC', 'PPC Meta Ads'],
        campaignDuration: '2 luni',
        engagementRate: '+215%',
    },
];

export default function BrandsSection() {
    const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            cardRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const top = rect.top;
                    const height = rect.height;
                    const viewportHeight = window.innerHeight;

                    const cardMiddle = top + height / 2;
                    const percentageInView = cardMiddle / viewportHeight;

                    if (percentageInView >= 0.2 && percentageInView <= 0.65) {
                        // flip pe spate
                        setFlippedIndexes((prev) => [...new Set([...prev, index])]);
                    } else {
                        // revine la față
                        setFlippedIndexes((prev) => prev.filter((i) => i !== index));
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // inițial

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleCard = (index: number) => {
        setFlippedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12">Branduri care au avut incredere</h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                cardRefs.current[index] = el;
                            }}                            className="perspective transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
                            onClick={() => toggleCard(index)}
                        >
                            <div
                                className={`relative w-full h-64 transition-transform duration-700 transform-style preserve-3d ${
                                    flippedIndexes.includes(index) ? 'rotate-y-180' : ''
                                }`}
                            >
                                {/* Fata */}
                                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden">
                                    <img src={brand.logo} alt={brand.name} className="h-20 max-w-[70%]" />
                                    <div className="absolute bottom-3 right-3 text-xs text-gray-400 italic">Apasa</div>
                                </div>

                                {/* Verso */}
                                <div className="absolute w-full h-full bg-emerald-100 rounded-lg shadow-lg transform rotate-y-180 backface-hidden overflow-hidden flex flex-col justify-between">
                                    <div
                                        className="w-full h-full bg-top bg-cover"
                                        style={{ backgroundImage: `url(${brand.image})` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .perspective {
                    perspective: 1000px;
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
            `}</style>
        </section>
    );
}
