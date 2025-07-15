import React from 'react';
import Image from 'next/image';
import { User, Building2, Shield } from 'lucide-react';

export default function Team() {
    return (
        <section id="team" className="py-32 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 animate-slide-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="monochrome-text">World-Class</span>
                        <br />
                        Team
                    </h2>
                    <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
                        Led by experts in stablecoin development, blockchain
                        engineering, and traditional finance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300 border border-curious-blue/20">
                        <div className="flex items-start space-x-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter p-1 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-gray-dark flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/charles.jpg"
                                        alt="Charles McManus"
                                        className="w-full h-full object-cover filter grayscale scale-140 translate-y-4"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-dark mb-2">
                                    Charles McManus
                                </h3>
                                <p className="text-gray-dark font-semibold mb-4">
                                    Chairman
                                </p>
                                <p className="text-gray-dark text-sm leading-relaxed">
                                    Co-Founder and Board Director, and former
                                    Group CEO of ClearBank | Unicorn Council Co
                                    Chair | NED. Previously CFO of Ulster Bank,
                                    CFO of Royal Bank of Canada
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300 border border-curious-blue/20">
                        <div className="flex items-start space-x-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter p-1 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-gray-dark flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/neil.jpg"
                                        alt="Neil Staunton"
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-dark mb-2">
                                    Neil Staunton
                                </h3>
                                <p className="text-gray-dark font-semibold mb-4">
                                    Founder & CEO
                                </p>
                                <p className="text-gray-dark text-sm leading-relaxed">
                                    Created the first UK Bank stablecoin
                                    platform, for ClearBank. Founder of Crypton,
                                    an ML-based crypto trading platform.
                                    Formerly ran the consulting arm of a data
                                    science & ML school. Solution Sales Director
                                    at Microsoft, and Google Sales Manager
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300 border border-silver/20">
                        <div className="flex items-start space-x-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-curious-blue-light via-curious-blue to-curious-blue-lighter p-1 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-gray-dark flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/ben.jpg"
                                        alt="Ben Haslam"
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-dark mb-2">
                                    Ben Haslam
                                </h3>
                                <p className="text-gray-dark font-semibold mb-4">
                                    Co-Founder & CTO
                                </p>
                                <p className="text-gray-dark text-sm leading-relaxed">
                                    Former Lead Blockchain Engineer @ Arqit
                                    Quantum, Responsible for protocol
                                    development and building the first
                                    quantum-safe Ethereum-based wallet
                                    infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300 border border-platinum/20">
                        <div className="flex items-start space-x-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-curious-blue-lighter via-curious-blue-light to-curious-blue p-1 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-gray-dark flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/krish.jpg"
                                        alt="Krish Swaminathan"
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-dark mb-2">
                                    Krish Swaminathan
                                </h3>
                                <p className="text-gray-dark font-semibold mb-4">
                                    Co-CTO
                                </p>
                                <p className="text-gray-dark text-sm leading-relaxed">
                                    20 years at JPMorgan, most recently as the
                                    Global Head of Blockchain Engineering at JP
                                    Morgan, who built the Quorum Blockchain for
                                    JPMcoin, trading $10Bn+ a day. Led the
                                    Ethereum engineering design & implementation
                                    for the first UK bank stablecoin platform
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300 border border-platinum/20">
                        <div className="flex items-start space-x-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-curious-blue-lighter via-curious-blue-light to-curious-blue p-1 flex-shrink-0">
                                <div className="w-full h-full rounded-full bg-gray-dark flex items-center justify-center overflow-hidden relative">
                                    <Image
                                        src="/gareth.png"
                                        alt="Gareth Evans"
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-dark mb-2">
                                    Gareth Evans
                                </h3>
                                <p className="text-gray-dark font-semibold mb-4">
                                    CFO
                                </p>
                                <p className="text-gray-dark text-sm leading-relaxed">
                                    Senior strategic finance leader with a
                                    proven track record of scaling businesses
                                    and fundraising across a variety of sectors.
                                    International experience at Director level
                                    (EMEA & APAC) for NASDAQ & UK listed
                                    Companies in B2B SaaS, Cyber Security, Space
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-dark mb-6 text-center">
                        Strategic Advisors
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-center flex flex-col items-center">
                            <div className="flex h-10 w-auto justify-center mb-2">
                                <Image
                                    src="/hsbc.png"
                                    alt="HSBC"
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="font-bold text-dark mb-2 flex-1">
                                HSBC Global Head of Technology Payments Division
                            </h4>
                            <p className="text-sm text-gray-dark">
                                Guiding enterprise adoption strategy
                            </p>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <div className="flex h-10 w-auto justify-center mb-2">
                                <Image
                                    src="/palo.svg"
                                    alt="Palo Alto Networks"
                                    width={150}
                                    height={150}
                                    className="object-contain"
                                />
                            </div>
                            <h4 className="font-bold text-dark mb-2 flex-1">
                                Former CSO of Palo Alto Networks
                            </h4>
                            <p className="text-sm text-gray-dark">
                                Security architecture and enterprise sales
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
