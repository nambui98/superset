'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <nav className="fixed top-0 w-full z-50 glass-effect">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-8 flex items-center justify-center">
                                <Image
                                    src="/superset_white.png"
                                    alt="Superset Logo"
                                    className="w-full h-full object-contain"
                                    width={48}
                                    height={32}
                                />
                            </div>
                            <span className="text-xl font-bold monochrome-text">
                                Superset
                            </span>
                        </div>

                        <div className="hidden lg:flex items-center space-x-8 relative">
                            <a
                                href="#problem"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="problem"
                            >
                                Problem
                            </a>
                            <a
                                href="#solution"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="solution"
                            >
                                Solution
                            </a>
                            <a
                                href="#competitive"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="competitive"
                            >
                                Competitive
                            </a>
                            <a
                                href="#products"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="products"
                            >
                                Products
                            </a>
                            <a
                                href="#architecture"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="architecture"
                            >
                                Architecture
                            </a>
                            <a
                                href="#business-model"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="business-model"
                            >
                                Business
                            </a>
                            <a
                                href="#traction"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="traction"
                            >
                                Traction
                            </a>
                            <a
                                href="#gtm"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="gtm"
                            >
                                GTM
                            </a>
                            <a
                                href="#team"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="team"
                            >
                                Team
                            </a>
                            <a
                                href="#faq"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="faq"
                            >
                                FAQ
                            </a>
                            <a
                                href="#contact"
                                className="nav-link text-gray-dark hover:text-curious-blue transition-colors font-medium relative"
                                data-section="contact"
                            >
                                Contact
                            </a>

                            <div
                                id="nav-underscore"
                                className="absolute -bottom-2 h-0.5 bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter transition-all duration-300 ease-out"
                                style={{
                                    width: 0,
                                    left: 0,
                                    margin: 0,
                                    padding: 0,
                                }}
                            ></div>
                        </div>

                        <button
                            className="lg:hidden text-dark"
                            onClick={toggleMobileMenu}
                        >
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
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-x-0 top-16 bg-white/95 backdrop-blur-lg p-6 lg:hidden border-t border-accent z-40">
                    <div className="space-y-4">
                        <a
                            href="#problem"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Problem
                        </a>
                        <a
                            href="#solution"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Solution
                        </a>
                        <a
                            href="#competitive"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Competitive
                        </a>
                        <a
                            href="#products"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Products
                        </a>
                        <a
                            href="#architecture"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Architecture
                        </a>
                        <a
                            href="#business-model"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Business
                        </a>
                        <a
                            href="#traction"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Traction
                        </a>
                        <a
                            href="#gtm"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            GTM
                        </a>
                        <a
                            href="#team"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Team
                        </a>
                        <a
                            href="#faq"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            FAQ
                        </a>
                        <a
                            href="#contact"
                            className="block text-gray-dark hover:text-curious-blue transition-colors py-2"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
