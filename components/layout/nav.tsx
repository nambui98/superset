'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { cn } from '@/lib/utils';
import { useClickAway } from '@uidotdev/usehooks';

gsap.registerPlugin(ScrollToPlugin);

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Use click outside hook for mobile menu
    const navRef = useClickAway<HTMLDivElement>(() => {
        setIsMobileMenuOpen(false);
    });

    useEffect(() => {
        // Smooth scroll function
        function smoothScrollToSection(sectionId: string) {
            const target = document.getElementById(sectionId);
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 0,
                    },
                    ease: 'power2.inOut',
                });
            }
        }

        // Add click handlers for smooth scrolling
        function addSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');

            navLinks.forEach((link) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const sectionId = href.substring(1);
                        smoothScrollToSection(sectionId);

                        // Close mobile menu if open
                        setIsMobileMenuOpen(false);
                    }
                });
            });
        }

        function updateNavUnderscore() {
            const sections = [
                'problem',
                'solution',
                'competitive',
                'products',
                'architecture',
                'business-model',
                'traction',
                'gtm',
                'team',
                'faq',
                'contact',
            ];
            const navLinks = document.querySelectorAll('.nav-link');
            const underscore = document.getElementById('nav-underscore');

            if (!underscore) return;

            let activeSection = '';
            const scrollPosition = window.scrollY + 120; // Increased offset for navbar height

            // Find which section is currently in view
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        activeSection = sectionId;
                    }
                }
            });

            // Update underscore position and active link
            navLinks.forEach((link) => {
                const section = link.getAttribute('data-section');
                if (section === activeSection) {
                    // Update underscore position with precise alignment
                    const linkRect = link.getBoundingClientRect();
                    const navContainer = link.closest(
                        '.hidden.lg\\:flex',
                    ) as HTMLElement;
                    if (navContainer) {
                        const containerRect =
                            navContainer.getBoundingClientRect();

                        // Calculate position relative to the navigation container
                        const left = linkRect.left - containerRect.left;
                        const width = linkRect.width;

                        // Ensure no margin or padding affects positioning
                        underscore.style.left = left + 'px';
                        underscore.style.width = width + 'px';
                        underscore.style.margin = '0';
                        underscore.style.padding = '0';
                    }

                    // Update active link styling
                    link.classList.remove('text-gray-dark');
                    link.classList.add('text-curious-blue');
                } else {
                    // Reset other links
                    link.classList.remove('text-curious-blue');
                    link.classList.add('text-gray-dark');
                }
            });

            // Hide underscore if no section is active (at the top)
            if (!activeSection) {
                underscore.style.width = '0';
            }
        }

        // Initialize smooth scrolling
        addSmoothScrolling();

        // Update underscore on scroll
        window.addEventListener('scroll', updateNavUnderscore);

        // Update underscore on page load
        updateNavUnderscore();

        // Cleanup event listeners
        return () => {
            window.removeEventListener('scroll', updateNavUnderscore);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="fixed top-0 w-full z-50 glass-effect" ref={navRef}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-48 flex items-center justify-center mr-2">
                                <Image
                                    src="/suserset_horizontal_dark.png"
                                    alt="Superset Logo"
                                    className="w-full h-full object-contain"
                                    width={192}
                                    height={56}
                                />
                            </div>
                        </div>

                        <div
                            className={cn(
                                'hidden  min-[1341px]:flex space-x-4 space-y-4 lg:space-y-0 min-[1341px]:space-x-8 items-center relative py-4 transition-all duration-300 ease-out text-mono',
                                isMobileMenuOpen
                                    ? 'block fixed inset-x-0 top-14 bg-white/95 backdrop-blur-lg p-6 min-[1341px]:hidden border-t border-accent z-40 transition-all duration-300 ease-out shadow-sm'
                                    : 'hidden',
                            )}
                        >
                            <a
                                href="#problem"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="problem"
                            >
                                Problem
                            </a>
                            <a
                                href="#solution"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="solution"
                            >
                                Solution
                            </a>
                            <a
                                href="#competitive"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="competitive"
                            >
                                Competitive
                            </a>
                            <a
                                href="#products"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="products"
                            >
                                Products
                            </a>
                            <a
                                href="#architecture"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="architecture"
                            >
                                Architecture
                            </a>
                            <a
                                href="#business-model"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="business-model"
                            >
                                Business
                            </a>
                            <a
                                href="#traction"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="traction"
                            >
                                Traction
                            </a>
                            <a
                                href="#gtm"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="gtm"
                            >
                                GTM
                            </a>
                            <a
                                href="#team"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="team"
                            >
                                Team
                            </a>
                            <a
                                href="#faq"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="faq"
                            >
                                FAQ
                            </a>
                            <a
                                href="#contact"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative block lg:inline-block"
                                data-section="contact"
                            >
                                Contact
                            </a>

                            <div
                                id="nav-underscore"
                                className="absolute -bottom-0 h-0.5 bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter transition-all duration-300 ease-out"
                                style={{
                                    width: 0,
                                    left: 0,
                                    margin: 0,
                                    padding: 0,
                                }}
                            ></div>
                        </div>

                        <button
                            className="max-[1340px]:block hidden text-dark"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
