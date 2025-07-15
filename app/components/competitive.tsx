import React from "react";

export default function Competitive() {
  return (
    <section id="competitive" className="py-32 bg-dark-light relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="monochrome-text">Superior to All</span>
            <br />
            Existing Solutions
          </h2>
          <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
            Why Superset outperforms DEX aggregators, multichain DEXs, and
            traditional market makers.
          </p>
        </div>

        <div className="glass-effect rounded-3xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-dark mb-8 text-center">
            Slippage Impact: $1M Trade Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-accent">
                  <th className="py-4 px-6 text-dark font-bold">Platform</th>
                  <th className="py-4 px-6 text-dark font-bold">
                    Available Liquidity
                  </th>
                  <th className="py-4 px-6 text-dark font-bold">Slippage</th>
                  <th className="py-4 px-6 text-dark font-bold">Amount Out</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-accent/30">
                  <td className="py-4 px-6 text-carmine-pink font-semibold">
                    1inch (Single Chain)
                  </td>
                  <td className="py-4 px-6 text-gray-dark">$2M</td>
                  <td className="py-4 px-6 text-carmine-pink">33.33%</td>
                  <td className="py-4 px-6 text-carmine-pink">$666,667</td>
                </tr>
                <tr className="border-b border-accent/30">
                  <td className="py-4 px-6 text-orange-400 font-semibold">
                    ChainFlip
                  </td>
                  <td className="py-4 px-6 text-gray-dark">Limited Assets</td>
                  <td className="py-4 px-6 text-orange-400">High</td>
                  <td className="py-4 px-6 text-orange-400">Asset Dependent</td>
                </tr>
                <tr className="bg-accent/10">
                  <td className="py-4 px-6 text-medium-green font-semibold">
                    Superset VirtualPools
                  </td>
                  <td className="py-4 px-6 text-medium-green">$10M+</td>
                  <td className="py-4 px-6 text-medium-green">9.09%</td>
                  <td className="py-4 px-6 text-medium-green">$909,091</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-effect rounded-3xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-curious-blue to-curious-blue-light rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark">
                  vs. DEX Aggregators (1inch)
                </h4>
                <p className="text-gray-dark">
                  Why single-chain aggregation isn&apos;t enough
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/30 border border-accent/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-gray-dark rounded-full"></div>
                  <h5 className="font-bold text-dark">The Problem</h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Limited to Single Chain
                </h6>
                <p className="text-gray-dark text-sm">
                  1inch can only access liquidity on one blockchain at a time.
                  If you have $2M liquidity spread across 5 chains, 1inch can
                  only use $2M on one chain, not the full $10M.
                </p>
              </div>

              <div className="bg-medium-green/10 border border-medium-green/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-medium-green rounded-full"></div>
                  <h5 className="font-bold text-medium-green">
                    Superset&apos;s Solution
                  </h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Cross-Chain Aggregation
                </h6>
                <p className="text-gray-dark text-sm">
                  Superset combines liquidity from ALL chains into unified
                  pools. Your $2M across 5 chains becomes $10M of accessible
                  liquidity, reducing slippage dramatically.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-curious-blue-light to-curious-blue-lighter rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark">
                  vs. Multichain DEXs (ChainFlip)
                </h4>
                <p className="text-gray-dark">
                  Why limited asset support restricts growth
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/30 border border-accent/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-gray-dark rounded-full"></div>
                  <h5 className="font-bold text-dark">The Problem</h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Limited Asset Support
                </h6>
                <p className="text-gray-dark text-sm">
                  ChainFlip only supports ETH, BTC, SOL, USDC. New stablecoin
                  issuers can&apos;t deploy their tokens, limiting the ecosystem
                  to just a few established assets.
                </p>
              </div>

              <div className="bg-medium-green/10 border border-medium-green/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-medium-green rounded-full"></div>
                  <h5 className="font-bold text-medium-green">
                    Superset&apos;s Solution
                  </h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Any OFT Token Support
                </h6>
                <p className="text-gray-dark text-sm">
                  Superset supports all new and existing multichain tokens. Any
                  stablecoin issuer can deploy their token and immediately
                  access cross-chain liquidity.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-curious-blue-lighter to-curious-blue rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark">
                  vs. Market Makers
                </h4>
                <p className="text-gray-dark">
                  Why arbitrage extraction hurts users
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/30 border border-accent/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-gray-dark rounded-full"></div>
                  <h5 className="font-bold text-dark">The Problem</h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Profit from Arbitrage
                </h6>
                <p className="text-gray-dark text-sm">
                  Market makers profit from price differences between chains.
                  They extract value from the fragmentation problem, making
                  trades more expensive for users.
                </p>
              </div>

              <div className="bg-medium-green/10 border border-medium-green/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-medium-green rounded-full"></div>
                  <h5 className="font-bold text-medium-green">
                    Superset&apos;s Solution
                  </h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Eliminate Arbitrage
                </h6>
                <p className="text-gray-dark text-sm">
                  Superset creates a single price across all chains, eliminating
                  arbitrage opportunities. Users get better rates because
                  there&apos;s no middleman extracting value.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-curious-blue to-curious-blue-light rounded-2xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark">vs. ThorChain</h4>
                <p className="text-gray-dark">
                  Why token-limited liquidity is restrictive
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent/30 border border-accent/50 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-gray-dark rounded-full"></div>
                  <h5 className="font-bold text-dark">The Problem</h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  RUNE-Limited Liquidity
                </h6>
                <p className="text-gray-dark text-sm">
                  ThorChain&apos;s liquidity depth is limited by RUNE token
                  supply. Even if you have billions in stablecoins, trading
                  depth is capped by RUNE availability.
                </p>
              </div>

              <div className="bg-medium-green/10 border border-medium-green/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-4 h-4 bg-medium-green rounded-full"></div>
                  <h5 className="font-bold text-medium-green">
                    Superset&apos;s Solution
                  </h5>
                </div>
                <h6 className="text-dark font-semibold mb-2">
                  Native Token Liquidity
                </h6>
                <p className="text-gray-dark text-sm">
                  Superset uses the actual stablecoin reserves for liquidity. If
                  you have $1B in stablecoins, you get $1B in trading depth - no
                  artificial limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
