import React from "react";

export default function Products() {
  return (
    <section id="products" className="py-32 bg-dark-light relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-platinum to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="monochrome-text">Three Core</span>
            <br />
            Platform Components
          </h2>
          <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
            Superset is an onchain stablecoin platform that consists of three
            integrated components working together to solve liquidity
            fragmentation across all blockchains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-curious-blue via-curious-blue-light to-curious-blue-lighter rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-4xl font-bold monochrome-text">
                SuperFactory
              </h3>
            </div>

            <p className="text-xl text-gray-dark leading-relaxed">
              Instant creation of multi-chain contracts across all chains.
              SuperFactory automates the deployment and configuration of
              stablecoin contracts across every major blockchain with a single
              transaction.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Instant Deployment</h4>
                <p className="text-sm text-gray-dark">
                  Deploy to all chains simultaneously
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Cross-Chain Setup</h4>
                <p className="text-sm text-gray-dark">
                  Automatic peering and configuration
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Universal Support</h4>
                <p className="text-sm text-gray-dark">
                  EVM, Solana, and emerging chains
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">
                  Deterministic Addresses
                </h4>
                <p className="text-sm text-gray-dark">
                  Same contract address on all chains
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-dark mb-2">
                SuperFactory Process
              </h4>
              <p className="text-gray-dark">
                How SuperFactory creates multi-chain contracts
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-curious-blue rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Submit Deployment
                  </div>
                  <div className="text-sm text-gray-dark">
                    Send contract parameters to SuperFactory
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-silver rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Cross-Chain Creation
                  </div>
                  <div className="text-sm text-gray-dark">
                    Factory creates contracts on all chains simultaneously
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-platinum rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Instant Activation
                  </div>
                  <div className="text-sm text-gray-dark">
                    Contracts are ready for use across all chains
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 glass-effect rounded-3xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-dark mb-2">
                SuperPool Flow
              </h4>
              <p className="text-gray-dark">
                How trades execute against aggregated liquidity
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-curious-blue rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold text-dark">Swap Request</div>
                  <div className="text-sm text-gray-dark">
                    User initiates trade on any chain
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-silver rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Global Aggregation
                  </div>
                  <div className="text-sm text-gray-dark">
                    SuperPool calculates using total liquidity
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-platinum rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Execute & Optimize
                  </div>
                  <div className="text-sm text-gray-dark">
                    Trade executes with minimal slippage
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-curious-blue-light via-curious-blue to-curious-blue-lighter rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  ></path>
                </svg>
              </div>
              <h3 className="text-4xl font-bold monochrome-text">SuperPool</h3>
            </div>

            <p className="text-xl text-gray-dark leading-relaxed">
              Aggregation of all stablecoin liquidity for deepest trading pools
              and least slippage. SuperPool combines liquidity from all chains
              into unified virtual pools accessible from anywhere.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Deepest Liquidity</h4>
                <p className="text-sm text-gray-dark">
                  Aggregated liquidity across all chains
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Minimal Slippage</h4>
                <p className="text-sm text-gray-dark">
                  Lowest slippage for any trade size
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Smart Routing</h4>
                <p className="text-sm text-gray-dark">
                  Optimal execution across chains
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Universal Access</h4>
                <p className="text-sm text-gray-dark">
                  Trade from any chain to any chain
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-curious-blue-lighter via-curious-blue to-curious-blue-light rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-4xl font-bold monochrome-text">
                SuperBridge
              </h3>
            </div>

            <p className="text-xl text-gray-dark leading-relaxed">
              Stablecoin transfers across all chains. SuperBridge enables
              seamless cross-chain stablecoin transfers with instant finality
              and minimal fees, connecting all blockchains through a unified
              bridge infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Instant Transfers</h4>
                <p className="text-sm text-gray-dark">
                  Cross-chain transfers in seconds
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Universal Bridge</h4>
                <p className="text-sm text-gray-dark">
                  Connect any chain to any chain
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">Minimal Fees</h4>
                <p className="text-sm text-gray-dark">
                  Lowest cross-chain transfer costs
                </p>
              </div>
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="font-bold text-dark mb-2">
                  Secure Infrastructure
                </h4>
                <p className="text-sm text-gray-dark">
                  Enterprise-grade security
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-dark mb-2">
                SuperBridge Flow
              </h4>
              <p className="text-gray-dark">How cross-chain transfers work</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-curious-blue rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Initiate Transfer
                  </div>
                  <div className="text-sm text-gray-dark">
                    User requests cross-chain transfer
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-silver rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Bridge Processing
                  </div>
                  <div className="text-sm text-gray-dark">
                    SuperBridge validates and processes
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl">
                <div className="w-8 h-8 bg-platinum rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold text-dark">
                    Instant Delivery
                  </div>
                  <div className="text-sm text-gray-dark">
                    Stablecoins arrive on target chain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
