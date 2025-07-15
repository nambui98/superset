import React from 'react';
import { Zap, RefreshCw, Mountain, Webhook } from 'lucide-react';

export default function Architecture() {
    return (
        <section id="architecture" className="py-32 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 animate-slide-up">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="monochrome-text">
                            Enterprise-Grade
                        </span>
                        <br />
                        Technical Architecture
                    </h2>
                    <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
                        Built on LayerZero&apos;s zero-hack infrastructure with
                        advanced security measures and intelligent liquidity
                        management.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold monochrome-text">
                            Hub-and-Spoke Architecture
                        </h3>
                        <p className="text-xl text-gray-dark leading-relaxed">
                            Our central hub aggregates liquidity from all spoke
                            chains, creating a unified pool that traders can
                            access from any blockchain. The hub chain processes
                            all swap calculations using total cross-chain
                            liquidity.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-effect rounded-2xl p-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Central Hub
                                </h4>
                                <p className="text-sm text-gray-dark">
                                    Aggregates all liquidity data
                                </p>
                            </div>
                            <div className="glass-effect rounded-2xl p-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Spoke Chains
                                </h4>
                                <p className="text-sm text-gray-dark">
                                    Local pools on each blockchain
                                </p>
                            </div>
                            <div className="glass-effect rounded-2xl p-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Real-time Sync
                                </h4>
                                <p className="text-sm text-gray-dark">
                                    Instant balance updates
                                </p>
                            </div>
                            <div className="glass-effect rounded-2xl p-6">
                                <h4 className="font-bold text-dark mb-2">
                                    Global Pricing
                                </h4>
                                <p className="text-sm text-gray-dark">
                                    Single price across all chains
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-effect rounded-3xl p-8">
                        <h4 className="text-2xl font-bold text-dark mb-6">
                            Security Features
                        </h4>
                        <div className="space-y-4">
                            <div className="border-l-4 border-curious-blue pl-6">
                                <h5 className="font-bold text-dark mb-2">
                                    LayerZero Infrastructure
                                </h5>
                                <p className="text-gray-dark text-sm">
                                    Zero hacks to date, enterprise-grade
                                    cross-chain messaging
                                </p>
                            </div>
                            <div className="border-l-4 border-silver pl-6">
                                <h5 className="font-bold text-dark mb-2">
                                    Timeout Mechanisms
                                </h5>
                                <p className="text-gray-dark text-sm">
                                    Automatic fund recovery if transactions fail
                                </p>
                            </div>
                            <div className="border-l-4 border-platinum pl-6">
                                <h5 className="font-bold text-dark mb-2">
                                    JIT Liquidity
                                </h5>
                                <p className="text-gray-dark text-sm">
                                    Just-in-time liquidity movement when needed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-effect rounded-3xl p-12">
                    <h3 className="text-3xl font-bold monochrome-text mb-8 text-center">
                        Advanced Features
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Zap className="w-12 h-12 text-curious-blue" />
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-4">
                                Post-Swap Execution
                            </h4>
                            <p className="text-gray-dark">
                                Execute additional logic after swaps complete,
                                enabling integration with lending protocols and
                                other DeFi applications
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Webhook className="w-12 h-12 text-curious-blue" />
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-4">
                                Uniswap V4-Style Hooks
                            </h4>
                            <p className="text-gray-dark">
                                Customizable hooks for before/after swap logic,
                                allowing issuers to build additional
                                functionality
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <RefreshCw className="w-12 h-12 text-curious-blue" />
                            </div>
                            <h4 className="text-xl font-bold text-dark mb-4">
                                Atomic Hub Trading
                            </h4>
                            <p className="text-gray-dark">
                                Zero-latency atomic swaps on the hub chain for
                                high-frequency trading strategies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
