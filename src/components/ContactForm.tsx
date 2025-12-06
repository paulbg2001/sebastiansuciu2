'use client';

import React, { useState, FormEvent, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    selectedService: string;
}

export default function ContactForm() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    
    const [formData, setFormData] = useState<FormData>({
        name: "", email: "", phone: "", message: "", selectedService: ""
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState<number>(0);

    const dataServices = [
        { id: 1, name: 'Pachet Diamond', emoji: '💎' },
        { id: 2, name: 'Pachet Gold', emoji: '🏆' },
        { id: 3, name: 'Pachet Silver', emoji: '🥈' },
        { id: 4, name: 'Pachet Bronze', emoji: '🥉' },
        { id: 5, name: 'Consultanță gratuită', emoji: '💬' },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceSelect = (serviceName: string) => {
        setFormData((prev) => ({ ...prev, selectedService: serviceName }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        
        console.log("Form data:", formData);
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", phone: "", message: "", selectedService: "" });
            setActiveStep(0);
        }, 5000);
    };

    const nextStep = () => {
        if (activeStep < 2) setActiveStep(activeStep + 1);
    };

    const prevStep = () => {
        if (activeStep > 0) setActiveStep(activeStep - 1);
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#24c6dc]/20 to-[#ff6b6b]/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#ffd93d]/10 to-[#24c6dc]/15 blur-3xl"
                />
            </div>

            <div className="max-w-5xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#24c6dc]/20 to-[#ff6b6b]/20 border border-white/10 mb-6"
                    >
                        <HiSparkles className="text-[#ffd93d]" />
                        <span className="text-white font-medium">Pregătit să creștem împreună?</span>
                        <HiSparkles className="text-[#ffd93d]" />
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Scrie-mi un </span>
                        <span className="gradient-text">mesaj</span>
                    </h2>
                </motion.div>

                <AnimatePresence mode="wait">
                    {isSubmitted ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="glass-card p-12 text-center">
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", duration: 0.8 }}
                                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center"
                                >
                                    <FaCheckCircle className="w-12 h-12 text-white" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                                    Mulțumesc! 🎉
                                </h3>
                                <p className="text-white/60 text-lg">
                                    Am primit mesajul tău și te voi contacta în curând.
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/* Progress steps */}
                            <div className="flex justify-center gap-3 mb-10">
                                {['Serviciu', 'Detalii', 'Mesaj'].map((step, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                                            activeStep === index
                                                ? 'bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29]'
                                                : activeStep > index
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : 'bg-white/5 text-white/50 border border-white/10'
                                        }`}
                                    >
                                        <span className="w-6 h-6 rounded-full bg-current/20 flex items-center justify-center text-sm font-bold">
                                            {activeStep > index ? '✓' : index + 1}
                                        </span>
                                        <span className="hidden sm:inline font-medium">{step}</span>
                                    </button>
                                ))}
                            </div>

                            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                                <div className="glass-card p-8 md:p-10">
                                    <AnimatePresence mode="wait">
                                        {/* Step 1: Service Selection */}
                                        {activeStep === 0 && (
                                            <motion.div
                                                key="step1"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-4"
                                            >
                                                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                                    Ce te interesează?
                                                </h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {dataServices.map((service) => (
                                                        <motion.button
                                                            key={service.id}
                                                            type="button"
                                                            onClick={() => handleServiceSelect(service.name)}
                                                            className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                                                                formData.selectedService === service.name
                                                                    ? 'bg-[#24c6dc]/20 border-[#24c6dc] shadow-lg shadow-[#24c6dc]/20'
                                                                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                            }`}
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <span className="text-2xl mb-2 block">{service.emoji}</span>
                                                            <span className="text-white font-medium">{service.name}</span>
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 2: Contact Details */}
                                        {activeStep === 1 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-5"
                                            >
                                                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                                    Cum te contactăm?
                                                </h3>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Nume complet *</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#24c6dc] focus:bg-white/10 transition-all"
                                                        placeholder="Cum te numești?"
                                                        required
                                                    />
                                                </div>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-white/70 text-sm mb-2">Email *</label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#24c6dc] focus:bg-white/10 transition-all"
                                                            placeholder="email@exemplu.ro"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-white/70 text-sm mb-2">Telefon</label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#24c6dc] focus:bg-white/10 transition-all"
                                                            placeholder="+40 7XX XXX XXX"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 3: Message */}
                                        {activeStep === 2 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="space-y-5"
                                            >
                                                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                                    Spune-mi mai multe
                                                </h3>
                                                <div>
                                                    <label className="block text-white/70 text-sm mb-2">Mesajul tău *</label>
                                                    <textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#24c6dc] focus:bg-white/10 transition-all min-h-[180px] resize-none"
                                                        placeholder="Povestește-mi despre afacerea ta și ce obiective ai..."
                                                        required
                                                    />
                                                </div>

                                                {/* Summary */}
                                                {formData.selectedService && (
                                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                        <div className="text-white/50 text-sm mb-1">Serviciu selectat:</div>
                                                        <div className="text-[#24c6dc] font-medium">{formData.selectedService}</div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Navigation buttons */}
                                    <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className={`px-6 py-3 rounded-xl font-medium transition-all ${
                                                activeStep === 0
                                                    ? 'opacity-0 pointer-events-none'
                                                    : 'bg-white/5 text-white hover:bg-white/10'
                                            }`}
                                        >
                                            ← Înapoi
                                        </button>

                                        {activeStep < 2 ? (
                                            <motion.button
                                                type="button"
                                                onClick={nextStep}
                                                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29]"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Continuă →
                                            </motion.button>
                                        ) : (
                                            <motion.button
                                                type="submit"
                                                className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] flex items-center gap-2"
                                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(36, 198, 220, 0.5)" }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaPaperPlane />
                                                <span>Trimite mesajul</span>
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </form>

                            {/* Quick contact alternatives */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 }}
                                className="mt-12 text-center"
                            >
                                <p className="text-white/50 mb-4">Sau contactează-mă direct:</p>
                                <div className="flex justify-center gap-4 flex-wrap">
                                    <motion.a
                                        href="https://wa.me/+40752413396"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaWhatsapp className="text-lg" />
                                        <span className="font-medium">WhatsApp</span>
                                    </motion.a>
                                    <motion.a
                                        href="tel:+40754502408"
                                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaPhone className="text-lg" />
                                        <span className="font-medium">+40 754 502 408</span>
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/sebastiansuciu21/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 text-pink-400 hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaInstagram className="text-lg" />
                                        <span className="font-medium">Instagram</span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
