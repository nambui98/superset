'use client';
import React, { useState } from 'react';
import { submitContactForm } from '../action';
import { DollarSign, Factory, TrendingUp } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormStatus {
    isSubmitting: boolean;
    isSubmitted: boolean;
    error: string | null;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<FormStatus>({
        isSubmitting: false,
        isSubmitted: false,
        error: null,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset previous status
        setFormStatus({
            isSubmitting: true,
            isSubmitted: false,
            error: null,
        });

        try {
            // Call the server action
            const result = await submitContactForm(formData);

            if (result.success) {
                setFormStatus({
                    isSubmitting: false,
                    isSubmitted: true,
                    error: null,
                });

                // Reset form data
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setFormStatus((prev) => ({ ...prev, isSubmitted: false }));
                }, 5000);
            } else {
                setFormStatus({
                    isSubmitting: false,
                    isSubmitted: false,
                    error: result.message,
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setFormStatus({
                isSubmitting: false,
                isSubmitted: false,
                error: 'An unexpected error occurred. Please try again.',
            });
        }
    };

    return (
        <section id="contact" className="py-32 bg-dark-light relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="monochrome-text">
                            Ready to Make Your
                        </span>
                        <br />
                        Stablecoin Liquid?
                    </h2>
                    <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
                        Join the future of stablecoin liquidity. Whether
                        you&apos;re an issuer, LP, or institutional trader,
                        Superset has a solution for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <div className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <Factory className="w-12 h-12 text-curious-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">
                            For Issuers
                        </h3>
                        <p className="text-gray-dark mb-6">
                            Deploy your stablecoin across all chains with
                            unified liquidity
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter text-primary font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg">
                            Deploy Token
                        </button>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <DollarSign className="w-12 h-12 text-curious-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">
                            For LPs
                        </h3>
                        <p className="text-gray-dark mb-6">
                            Earn 9% yield from trading fees with optimized
                            capital allocation
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-curious-blue-light to-curious-blue text-primary font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg">
                            Provide Liquidity
                        </button>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <TrendingUp className="w-12 h-12 text-curious-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">
                            For Traders
                        </h3>
                        <p className="text-gray-dark mb-6">
                            Access the deepest liquidity with minimal slippage
                            across all chains
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-curious-blue-lighter to-curious-blue-light text-primary font-semibold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg">
                            Start Trading
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-up">
                        <h3 className="text-3xl font-bold monochrome-text mb-6">
                            Get In Touch
                        </h3>
                        <p className="text-gray-dark mb-8 leading-relaxed">
                            Ready to revolutionize stablecoin liquidity? Our
                            team is here to help you understand how Superset can
                            transform your multi-chain strategy.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-curious-blue"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-gray-dark">
                                    neil@superset.finance
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-curious-blue"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-gray-dark">
                                    London, United Kingdom
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                                    <svg
                                        className="w-5 h-5 text-curious-blue"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <span className="text-gray-dark">
                                    Cash flow positive at $1B monthly volume
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="glass-effect rounded-3xl p-8 animate-slide-up"
                        style={{ animationDelay: '0.3s' }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {formStatus.error && (
                                <div className="p-4 bg-red-100 border border-red-300 rounded-xl text-red-700">
                                    {formStatus.error}
                                </div>
                            )}

                            {formStatus.isSubmitted && (
                                <div className="p-4 bg-green-100 border border-green-300 rounded-xl text-green-700">
                                    Message sent successfully! We&apos;ll get
                                    back to you soon.
                                </div>
                            )}

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-accent rounded-xl text-dark placeholder-gray-dark focus:outline-none focus:border-curious-blue transition-colors"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-accent rounded-xl text-dark placeholder-gray-dark focus:outline-none focus:border-curious-blue transition-colors"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-white border border-accent rounded-xl text-dark placeholder-gray-dark focus:outline-none focus:border-curious-blue transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus.isSubmitting}
                                className={`w-full px-6 py-3 bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter text-primary font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                                    formStatus.isSubmitting
                                        ? 'opacity-75 cursor-not-allowed'
                                        : 'hover:scale-105 transform animate-glow'
                                }`}
                            >
                                {formStatus.isSubmitting
                                    ? 'Sending...'
                                    : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
