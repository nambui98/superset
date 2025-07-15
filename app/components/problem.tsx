import React from 'react';
import { HeartCrack, TrendingDown, TrendingUp } from 'lucide-react';

export default function Problem() {
    return (
        <section id="problem" className="py-32 bg-dark-light relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-curious-blue to-transparent opacity-30"></div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 animate-slide-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="monochrome-text">The Liquidity</span>
                        <br />
                        Fragmentation Crisis
                    </h2>
                    <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
                        Stablecoin issuers face an impossible choice: stay on
                        one chain and miss opportunities, or go multi-chain and
                        fragment their liquidity, making trading expensive due
                        to slippage.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <TrendingUp className="w-14 h-14 text-curious-blue" />
                        </div>
                        <h3 className="text-2xl font-bold text-center text-dark mb-4">
                            Market Growth
                        </h3>
                        <p className="text-gray-dark text-center">
                            300+ new chains launching in next 24 months, each
                            locking up more liquidity
                        </p>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <HeartCrack className="w-14 h-14 text-carmine-pink" />
                        </div>
                        <h3 className="text-2xl text-center font-bold text-dark mb-4">
                            Fragmented Liquidity
                        </h3>
                        <p className="text-gray-dark text-center">
                            Multi-chain deployment spreads thin liquidity across
                            multiple DEXs and chains
                        </p>
                    </div>

                    <div className="glass-effect rounded-3xl p-8 hover:scale-105 transform transition-all duration-300">
                        <div className="flex justify-center mb-4">
                            <TrendingDown className="w-14 h-14 text-medium-green" />
                        </div>
                        <h3 className="text-2xl text-center font-bold text-dark mb-4">
                            High Slippage
                        </h3>
                        <p className="text-gray-dark text-center">
                            Large trades become expensive and inefficient,
                            limiting growth potential
                        </p>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-dark mb-6 text-center">
                        Slippage Impact Example
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <div className="text-carmine-pink font-bold text-lg mb-2">
                                Fragmented Liquidity ($2M)
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>$100K trade:</span>
                                    <span className="text-carmine-pink">
                                        4.76% slippage
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>$500K trade:</span>
                                    <span className="text-carmine-pink">
                                        20% slippage
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>$1M trade:</span>
                                    <span className="text-carmine-pink">
                                        33.33% slippage
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-medium-green font-bold text-lg mb-2">
                                Superset Pools ($10M)
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>$100K trade:</span>
                                    <span className="text-medium-green">
                                        0.99% slippage
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>$500K trade:</span>
                                    <span className="text-medium-green">
                                        4.76% slippage
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span>$1M trade:</span>
                                    <span className="text-medium-green">
                                        9.09% slippage
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
