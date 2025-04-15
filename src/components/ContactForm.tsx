'use client';
import React, { useState, FormEvent } from "react";
import {FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTiktok, FaWhatsapp} from "react-icons/fa";
import Link from "next/link";
import {FaLocationPin} from "react-icons/fa6";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    selectedService: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", phone: "", message: "", selectedService: "" });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const dataServices = [
        { id: 1, name: 'Pachet Diamond' },
        { id: 2, name: 'Pachet Gold' },
        { id: 3, name: 'Pachet Silver' },
        { id: 4, name: 'Pachet Bronze' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Toate câmpurile sunt obligatorii!");
            return;
        }

        console.log("Form data:", formData);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", message: "", selectedService:"" });
        }, 3000);
    };

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-emerald-700 mb-12">Contact</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-center">
                    <div className="text-gray-800 space-y-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Date contact</h3>
                        <div className="space-y-4 text-lg">
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-black"/>
                                <Link href="tel:+40754502408">+40 754 502 408</Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMailBulk className="text-black"/>
                                <Link href="mailto:sebisuciu2002@gmail.com">sebisuciu2002@gmail.com</Link>
                            </div>
                        </div>

                        <div className="text-3xl text-black flex gap-6">
                            <Link href="https://wa.me/+40752413396" target="_blank"
                                  rel="noopener noreferrer"><FaWhatsapp/></Link>
                            <Link href="https://www.instagram.com/sebastiansuciu21/" target="_blank"
                                  rel="noopener noreferrer"><FaInstagram/></Link>
                            <Link href="https://www.tiktok.com/@sebisuciu21" target="_blank"
                                  rel="noopener noreferrer"><FaTiktok/></Link>
                        </div>
                    </div>

                    {/* Linie verticală */}
                    <div className="hidden md:block h-full w-px bg-black"/>

                    {/* Dreapta - Formular */}
                    <div className="bg-white p-8 shadow-lg rounded-xl">
                        {isSubmitted ? (
                            <p className="text-green-600 text-center font-semibold">Mesajul a fost trimis cu succes!</p>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Formular de
                                    contact</h3>
                                <div>
                                    <label className="block text-gray-700 font-medium">Nume</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#704214] text-gray-700"
                                        placeholder="Introduceți numele și prenumele"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#704214] text-gray-700"
                                        placeholder="Introduceți email-ul"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium">Nr tel</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#704214] text-gray-700"
                                        placeholder="Introduceți numarul de telefon"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium">Serviciul dorit</label>
                                    <select
                                        name="selectedService"
                                        value={formData.selectedService}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#704214] text-gray-700"
                                        required
                                    >
                                        <option value="">Selectează un serviciu</option>
                                        {dataServices.map((service) => (
                                            <option key={service.id} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium">Mesaj</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#704214] h-32 text-gray-700"
                                        placeholder="Scrie mesajul..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-8 inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
                                >
                                    Trimite mesajul
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
}
