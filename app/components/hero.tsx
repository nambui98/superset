'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroContentRef = useRef<HTMLDivElement>(null);
    const heroSectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    // Refs for parallax background elements
    const parallaxElement1 = useRef<HTMLDivElement>(null);
    const parallaxElement2 = useRef<HTMLDivElement>(null);
    const parallaxElement3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set initial states (opacity: 0, translateY: 30px)
        const elements = [
            titleRef.current,
            subtitleRef.current,
            statsRef.current,
            buttonsRef.current,
        ];

        gsap.set(elements, {
            opacity: 0,
            y: 30,
        });

        // Create GSAP timeline with ScrollTrigger for content animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroContentRef.current,
                start: 'top 90%', // Similar to threshold: 0.1 with rootMargin
                end: 'bottom 50%',
                toggleActions: 'play none none none',
            },
        });

        // Animate elements in sequence
        tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
        })
            .to(
                subtitleRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.6',
            )
            .to(
                statsRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.4',
            )
            .to(
                buttonsRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.2',
            );

        // Create parallax effects that match the original vanilla JS behavior
        const parallaxElements = document.querySelectorAll(
            '.hero-bg > div > div',
        );
        parallaxElements.forEach((element, index) => {
            const speed = 0.2 + index * 0.1; // Same speed calculation as original: 0.2, 0.3, 0.4

            // Create a global scroll trigger that always runs (like the original window scroll listener)
            ScrollTrigger.create({
                trigger: 'body', // Use body so it always triggers
                start: 'top top',
                end: 'bottom bottom',
                onUpdate: () => {
                    // Direct replication of original vanilla JS logic
                    const scrolled = window.pageYOffset;
                    const translation = scrolled * speed;
                    gsap.set(element, { y: translation });
                },
            });
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={heroSectionRef}
            className="min-h-screen relative flex items-center justify-center hero-bg overflow-hidden py-20"
        >
            <div className="absolute inset-0">
                <div
                    ref={parallaxElement1}
                    className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float"
                ></div>
                <div
                    ref={parallaxElement2}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gray-light/5 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div
                    ref={parallaxElement3}
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"
                    style={{ animationDelay: '4s' }}
                ></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
                <div ref={heroContentRef} className="text-center space-y-8">
                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Make Every Stablecoin
                        <span className="monochrome-text block">
                            As Liquid As Tether
                        </span>
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-lg md:text-xl text-gray-dark leading-relaxed max-w-4xl mx-auto font-light"
                    >
                        The Native Liquidity Network that solves fragmented
                        liquidity across 300+ blockchains.
                        <span className="text-dark font-medium">
                            Aggregate all stablecoin liquidity into unified
                            virtual pools.
                        </span>
                    </p>

                    <div
                        ref={statsRef}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12"
                    >
                        <div className="stats-counter rounded-2xl p-6 glass-effect">
                            <div
                                className="text-3xl font-bold text-dark"
                                data-counter="4600000000"
                                data-format="currency"
                            >
                                $4.6B
                            </div>
                            <div className="text-sm text-gray-dark">
                                Committed Liquidity
                            </div>
                        </div>
                        <div className="stats-counter rounded-2xl p-6 glass-effect">
                            <div
                                className="text-3xl font-bold text-dark"
                                data-counter="300"
                                data-suffix="+"
                            >
                                300+
                            </div>
                            <div className="text-sm text-gray-dark">
                                New Chains (24mo)
                            </div>
                        </div>
                        <div className="stats-counter rounded-2xl p-6 glass-effect">
                            <div
                                className="text-3xl font-bold text-dark"
                                data-counter="3700000000000"
                                data-format="currency"
                            >
                                $3.7T
                            </div>
                            <div className="text-sm text-gray-dark">
                                Market by 2030
                            </div>
                        </div>
                        <div className="stats-counter rounded-2xl p-6 glass-effect">
                            <div
                                className="text-3xl font-bold text-dark"
                                data-counter="9"
                                data-format="percentage"
                            >
                                9%
                            </div>
                            <div className="text-sm text-gray-dark">
                                LP Yield
                            </div>
                        </div>
                    </div>

                    <div
                        ref={buttonsRef}
                        className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
                    >
                        <button className="px-10 py-4 bg-curious-blue text-dark font-semibold hover:scale-105 transform transition-all duration-300 animate-glow rounded-full shadow-2xl font-sans">
                            Deploy Your Token
                        </button>
                        <button className="px-10 py-4 border-2 border-dark rounded-full text-dark font-semibold hover:bg-dark hover:text-primary transition-all duration-300 font-sans">
                            Read Whitepaper
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
