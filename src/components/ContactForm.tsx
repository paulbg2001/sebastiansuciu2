'use client';

import React, { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp, FaPhone, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    selectedService: string;
}

export default function ContactForm() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
    
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
        <section id="contact" ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 md:mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#24c6dc]/20 to-[#ff6b6b]/20 border border-white/10 mb-4 md:mb-6">
                        <HiSparkles className="text-[#ffd93d]" />
                        <span className="text-white font-medium text-sm md:text-base">Pregătit să creștem împreună?</span>
                        <HiSparkles className="text-[#ffd93d]" />
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
                        <span className="text-white">Scrie-mi un </span>
                        <span className="gradient-text">mesaj</span>
                    </h2>
                </motion.div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="glass-card p-8 md:p-12 text-center">
                            <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                <FaCheckCircle className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                                Mulțumesc! 🎉
                            </h3>
                            <p className="text-white/60 text-base md:text-lg">
                                Am primit mesajul tău și te voi contacta în curând.
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Progress steps */}
                        <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-10">
                            {['Serviciu', 'Detalii', 'Mesaj'].map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveStep(index)}
                                    className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition-all ${
                                        activeStep === index
                                            ? 'bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29]'
                                            : activeStep > index
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : 'bg-white/5 text-white/50 border border-white/10'
                                    }`}
                                >
                                    <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-current/20 flex items-center justify-center text-[10px] md:text-sm font-bold">
                                        {activeStep > index ? '✓' : index + 1}
                                    </span>
                                    <span className="hidden sm:inline font-medium">{step}</span>
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                            <div className="glass-card p-5 md:p-10">
                                {/* Step 1: Service Selection */}
                                {activeStep === 0 && (
                                    <div className="space-y-3 md:space-y-4">
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            Ce te interesează?
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                            {dataServices.map((service) => (
                                                <button
                                                    key={service.id}
                                                    type="button"
                                                    onClick={() => handleServiceSelect(service.name)}
                                                    className={`p-3 md:p-4 rounded-xl md:rounded-2xl border text-left transition-all active:scale-[0.98] ${
                                                        formData.selectedService === service.name
                                                            ? 'bg-[#24c6dc]/20 border-[#24c6dc]'
                                                            : 'bg-white/5 border-white/10'
                                                    }`}
                                                >
                                                    <span className="text-xl md:text-2xl mb-1 md:mb-2 block">{service.emoji}</span>
                                                    <span className="text-white font-medium text-sm md:text-base">{service.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Contact Details */}
                                {activeStep === 1 && (
                                    <div className="space-y-4 md:space-y-5">
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            Cum te contactăm?
                                        </h3>
                                        <div>
                                            <label className="block text-white/70 text-sm mb-2">Nume complet *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm md:text-base"
                                                placeholder="Cum te numești?"
                                                required
                                            />
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                                            <div>
                                                <label className="block text-white/70 text-sm mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm md:text-base"
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
                                                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm md:text-base"
                                                    placeholder="+40 7XX XXX XXX"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Message */}
                                {activeStep === 2 && (
                                    <div className="space-y-4 md:space-y-5">
                                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
                                            Spune-mi mai multe
                                        </h3>
                                        <div>
                                            <label className="block text-white/70 text-sm mb-2">Mesajul tău *</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 min-h-[140px] md:min-h-[180px] resize-none text-sm md:text-base"
                                                placeholder="Povestește-mi despre afacerea ta..."
                                                required
                                            />
                                        </div>

                                        {formData.selectedService && (
                                            <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/10">
                                                <div className="text-white/50 text-xs md:text-sm mb-1">Serviciu selectat:</div>
                                                <div className="text-[#24c6dc] font-medium text-sm md:text-base">{formData.selectedService}</div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Navigation buttons */}
                                <div className="flex justify-between mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-medium text-sm md:text-base transition-all ${
                                            activeStep === 0
                                                ? 'opacity-0 pointer-events-none'
                                                : 'bg-white/5 text-white'
                                        }`}
                                    >
                                        ← Înapoi
                                    </button>

                                    {activeStep < 2 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] active:scale-95 transition-transform"
                                        >
                                            Continuă →
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold text-sm md:text-base bg-gradient-to-r from-[#24c6dc] to-[#1db9cd] text-[#0f0c29] flex items-center gap-2 active:scale-95 transition-transform"
                                        >
                                            <FaPaperPlane />
                                            <span>Trimite</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>

                        {/* Quick contact alternatives */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.3 }}
                            className="mt-8 md:mt-12 text-center"
                        >
                            <p className="text-white/50 mb-3 md:mb-4 text-sm md:text-base">Sau contactează-mă direct:</p>
                            <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
                                <a
                                    href="https://wa.me/+40752413396"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] text-sm md:text-base active:scale-95 transition-transform"
                                >
                                    <FaWhatsapp className="text-base md:text-lg" />
                                    <span className="font-medium">WhatsApp</span>
                                </a>
                                <a
                                    href="tel:+40754502408"
                                    className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm md:text-base active:scale-95 transition-transform"
                                >
                                    <FaPhone className="text-base md:text-lg" />
                                    <span className="font-medium hidden sm:inline">+40 754 502 408</span>
                                    <span className="font-medium sm:hidden">Telefon</span>
                                </a>
                                <a
                                    href="https://www.instagram.com/sebastiansuciu21/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-pink-500/30 text-pink-400 text-sm md:text-base active:scale-95 transition-transform"
                                >
                                    <FaInstagram className="text-base md:text-lg" />
                                    <span className="font-medium">Instagram</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
