import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Link2, RefreshCw, TrendingUp, Wallet } from 'lucide-react';

export default function Traction() {
    return (
        <section id="traction" className="py-32 bg-dark-light relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 animate-slide-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="monochrome-text">Strong</span>
                        <br />
                        Market Traction
                    </h2>
                    <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
                        Leading stablecoin issuers and institutions are already
                        committed to launching with Superset.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <div className="glass-effect flex flex-col items-center justify-center rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex h-10 w-20 justify-center mb-3  overflow-hidden relative">
                            <Image
                                src="/USDT0.webp"
                                alt="USDT0"
                                width={100}
                                height={100}
                                className="object-cover scale-150"
                            />
                        </div>
                        <p className="text-sm text-gray-dark">
                            Base asset for all trading pairs
                        </p>
                    </div>

                    <div className="glass-effect flex flex-col items-center justify-center rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex h-10 justify-center mb-3 rounded-full">
                            <Image
                                src="/plasma.svg"
                                alt="Plasma"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-dark">
                            Dedicated stablecoin chain
                        </p>
                    </div>

                    <div className="glass-effect flex flex-col items-center justify-center rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex h-10 justify-center mb-3 rounded-full">
                            <Image
                                src="/HKMA.png"
                                alt="HKMA"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-dark">
                            eHKD consortium partner
                        </p>
                    </div>

                    <div className="glass-effect flex flex-col items-center justify-center rounded-2xl p-6 text-center hover:scale-105 transform transition-all duration-300">
                        <div className="flex h-10 justify-center mb-3 ">
                            <Image
                                src="/ClearBank.png"
                                alt="ClearBank"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-dark">
                            UK/Europe liquidity platform
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="glass-effect rounded-3xl p-8 text-center">
                        <div
                            className="text-5xl font-bold monochrome-text mb-4"
                            data-counter="4600000000"
                            data-format="currency"
                        >
                            $4.6B
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">
                            Committed Liquidity
                        </h4>
                        <p className="text-gray-dark">
                            From multiple stablecoin issuers including StablR,
                            Quantoz, Brale, M0, Plume, and others
                        </p>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 text-center">
                        <div
                            className="text-5xl font-bold monochrome-text mb-4"
                            data-counter="10"
                            data-suffix="+"
                        >
                            10+
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">
                            Partner Issuers
                        </h4>
                        <p className="text-gray-dark">
                            Including first FCA authorized GBP stablecoin and
                            major tokenization platforms
                        </p>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 text-center">
                        <div className="text-5xl font-bold monochrome-text mb-4">
                            Sep 2025
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">
                            Launch Date
                        </h4>
                        <p className="text-gray-dark">
                            Virtual Pools revenue generation commences with full
                            ecosystem launch
                        </p>
                    </div>
                </div>
            </div>

            <div className="glass-effect p-12 mt-16">
                <h3 className="text-3xl font-bold monochrome-text mb-8 text-center">
                    Strategic Partnerships
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4 h-10 overflow-hidden relative">
                            <Link href="https://p2p.org/" target="_blank">
                                <Image
                                    src="/p2p.svg"
                                    alt="P2P"
                                    width={98}
                                    height={20}
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-light">
                            Access to $6B staking investors for liquidity
                            commitment
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4 h-10 ">
                            <Link href="https://metamask.io/" target="_blank">
                                <Image
                                    src="/metamask.svg"
                                    alt="MetaMask"
                                    width={80}
                                    height={40}
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-light">
                            Virtual pool integration discussions with ConsenSys
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4 h-10 overflow-hidden relative">
                            <Link href="https://li.fi/" target="_blank">
                                <Image
                                    src="/lifi.svg"
                                    alt="LiFi"
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-light">
                            Cross-chain aggregation and routing partnerships
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-4 h-10  relative">
                            <Link
                                href="https://pendle.finance/"
                                target="_blank"
                            >
                                <Image
                                    src="/pendle.png"
                                    alt="Pendle"
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-light">
                            Yield tokenization and DeFi protocol integrations
                        </p>
                    </div>
                </div>
            </div>

            <div className="glass-effect p-12 mt-16">
                <h3 className="text-3xl font-bold monochrome-text mb-8 text-center">
                    Market Analysis
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-5xl font-bold monochrome-text mb-4">
                            300+
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">
                            New Chains (24mo)
                        </h4>
                        <p className="text-gray-light">
                            Each creating their own stablecoin or partnering
                            with existing issuers, fragmenting liquidity further
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold monochrome-text mb-4">
                            $9T
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">
                            Daily FX Market
                        </h4>
                        <p className="text-gray-light">
                            Opportunity for on-chain FX trading with national
                            stablecoins (GBP, EURO, YEN)
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold monochrome-text mb-4">
                            2-3
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-2">
                            Dominant Per Chain
                        </h4>
                        <p className="text-gray-light">
                            Market will consolidate, but different stablecoins
                            will dominate different chains
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
