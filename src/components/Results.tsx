'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaUsers, FaArrowUp, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

type Result = {
    id: number;
    name: string;
    description: string;
    image: string;
    followersBefore: number;
    followersAfter: number;
    growth: string;
    campaignDuration: string;
    services: string[];
    link: string;
};

const results: Result[] = [
    {
        id: 1,
        name: 'Hug the Plate',
        description: 'Unul dintre cele mai mari lanțuri de restaurante din Sibiu.',
        image: '/hug-the-plate.jpg',
        followersBefore: 3000,
        followersAfter: 12500,
        growth: '+320%',
        campaignDuration: '3 luni',
        services: ['Instagram Reels', 'TikTok', 'Video editing'],
        link: 'https://www.instagram.com/hugtheplate/',
    },
    {
        id: 2,
        name: 'Wei Ramen',
        description: 'Restaurant premium all-you-can-eat cu o prezență nouă în online.',
        image: '/wei-ramen.jpg',
        followersBefore: 800,
        followersAfter: 4600,
        growth: '+215%',
        campaignDuration: '2 luni',
        services: ['Content foto', 'Content video ', 'Meta Ads'],
        link: 'https://www.instagram.com/weiramencluj/',
    },
    {
        id: 3,
        name: 'Smiles By',
        description: 'Cabinet stomatologic modern care și-a triplat vizibilitatea.',
        image: '/smiles-by.jpg',
        followersBefore: 500,
        followersAfter: 2700,
        growth: '+170%',
        campaignDuration: '1 lună',
        services: ['Foto branding', 'Testimonial video', 'Reels'],
        link: 'https://www.instagram.com/smiles_by_dr.buza/',
    },
    {
        id: 4,
        name: 'TransAgape',
        description: 'Cabinet stomatologic modern care și-a triplat vizibilitatea.',
        image: '/hug-the-plate.jpg',
        followersBefore: 500,
        followersAfter: 2700,
        growth: '+170%',
        campaignDuration: '1 lună',
        services: ['Foto branding', 'Testimonial video', 'Reels'],
        link: 'https://www.instagram.com/trans_agape',
    },
    {
        id: 5,
        name: 'YummyYang',
        description: 'Restaurant chinezesc premium cu meniu all-you-can-eat.',
        image: '/yummy-yang-sibiu_1.jpg',
        followersBefore: 500,
        followersAfter: 2700,
        growth: '+170%',
        campaignDuration: '1 lună',
        services: ['Foto branding', 'Testimonial video', 'Reels'],
        link: 'https://www.instagram.com/yummyyangcity/',
    },
];

export default function ResultsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="results" className="py-16 px-6 bg-white relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-12">Rezultatele mele</h2>

                {/* Navigare */}
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hidden md:flex"
                    onClick={() => scroll('left')}
                >
                    <MdChevronLeft size={24} className="text-black"/>
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hidden md:flex"
                    onClick={() => scroll('right')}
                >
                    <MdChevronRight size={24} className="text-black"/>
                </button>

                <div className="relative mt-6 overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
                    >
                        {results.map((result) => (
                            <div
                                key={result.id}
                                className="min-w-[300px] md:min-w-[320px] bg-white rounded-xl shadow-md overflow-hidden snap-start flex flex-col h-full min-h-[500px]"
                            >
                                {/* Imagine */}
                                <div className="relative w-full h-48">
                                    <Image
                                        src={result.image}
                                        alt={result.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 320px"
                                    />
                                </div>

                                {/* Detalii */}
                                <div className="p-4 flex flex-col flex-grow justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{result.name}</h3>
                                        <p className="text-gray-500 mt-1">{result.description}</p>

                                        <div className="mt-4 text-sm text-gray-600 flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <FaUsers className="text-emerald-600"/>
                                                <span><strong>Followers:</strong> {result.followersBefore} → {result.followersAfter}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaArrowUp className="text-emerald-600"/>
                                                <span><strong>Crestere:</strong> {result.growth}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaChartLine className="text-emerald-600"/>
                                                <span><strong>Durata:</strong> {result.campaignDuration}</span>
                                            </div>
                                            <div className="flex gap-2 mt-2 flex-wrap">
                                                <span className="text-emerald-700 font-medium">Servicii:</span>
                                                <span>{result.services.join(', ')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Link mereu jos */}
                                    <Link
                                        href={result.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 w-full bg-emerald-600 text-white py-2 rounded-lg text-sm font-semibold text-center hover:bg-emerald-700"
                                    >
                                        Vezi profil
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
