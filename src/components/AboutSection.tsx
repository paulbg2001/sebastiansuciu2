'use client';

import {useRef, useState} from "react";
import {FaPause, FaPlay} from "react-icons/fa";

export default function AboutSection() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

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
    return (
        <section id="about" className="bg-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
                    Despre mine
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-10">
                    Sunt un tanar nemaivazut de inteligent si ambitios, care nu se da inlaturi de la nicio provocare.
                    Daca crezi ca marketingul afacerii tale este o provocare, haide sa avem o discutie!
                </p>

                <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video">
                    <video
                        ref={videoRef}
                        src="/video/sebastian-suciu-despre.mp4"
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={toggleVideo}
                        className="absolute bottom-4 right-4 bg-white text-emerald-600 hover:bg-emerald-100 p-2 rounded-full shadow transition"
                    >
                        {isPlaying ? <FaPause/> : <FaPlay/>}
                    </button>
                </div>
            </div>
        </section>
    );
}
