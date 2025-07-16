import React from 'react';
import { Target } from 'lucide-react';

export default function GTM() {
    return (
        <section id="gtm" className="py-32 bg-dark-light relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 animate-slide-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="monochrome-text">Go-to-Market</span>
                        <br />
                        Strategy
                    </h2>
                    <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
                        Systematic approach to capturing the fragmented
                        stablecoin liquidity market.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <div className="glass-effect rounded-3xl p-8">
                        <h3 className="text-3xl font-bold text-dark mb-6 flex items-center gap-3">
                            <Target className="w-8 h-8 text-curious-blue" />
                            Tier 1 Targets
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-curious-blue pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Tether&apos;s USDT0
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    Base asset for all trading pairs in the
                                    ecosystem
                                </p>
                            </div>
                            <div className="border-l-4 border-silver pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Mid-Tier Issuers ($50M-$2B)
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    StablR, Quantoz, Brale facing clear
                                    liquidity disadvantages
                                </p>
                            </div>
                            <div className="border-l-4 border-platinum pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Regional Stablecoins
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    USD, EURO, GBP focused on European market
                                </p>
                            </div>
                            <div className="border-l-4 border-white pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    TradFi-Backed Entrants
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    New projects backed by traditional financial
                                    institutions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-effect rounded-3xl p-8">
                        <h3 className="text-3xl font-bold text-dark mb-6">
                            🏢 Tier 2 Targets
                        </h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-curious-blue pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Enterprise Stablecoins
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    Bank and fintech projects (Revolut,
                                    ClearBank)
                                </p>
                            </div>
                            <div className="border-l-4 border-silver pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Specialized Stablecoins
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    Commodity-backed, yield-bearing variants
                                </p>
                            </div>
                            <div className="border-l-4 border-platinum pl-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Cross-Border Payments
                                </h4>
                                <p className="text-gray-dark text-sm">
                                    Companies needing multi-chain payout
                                    capabilities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl p-12">
                    <h3 className="text-3xl font-bold monochrome-text mb-8 text-center">
                        3-Phase Launch Strategy
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-curious-blue to-curious-blue-light rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-primary">
                                    1
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-4">
                                MVP (Months 1-3)
                            </h4>
                            <p className="text-gray-dark">
                                Partner with 7 existing issuers for initial
                                deployments. Focus on measurable liquidity
                                improvements and case studies.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-curious-blue-light to-curious-blue-lighter rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-primary">
                                    2
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-4">
                                Market Validation (Months 4-9)
                            </h4>
                            <p className="text-gray-dark">
                                Scale to 24 issuers with comprehensive data.
                                Joint GTM with Plasma for issuer onboarding.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-curious-blue-lighter to-curious-blue rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-primary">
                                    3
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-4">
                                Market Leadership (Months 10-18)
                            </h4>
                            <p className="text-gray-dark">
                                Capture majority market share through network
                                effects and competitive moats from deepest
                                liquidity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
