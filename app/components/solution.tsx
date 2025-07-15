import React from "react";

export default function Solution() {
  return (
    <section id="solution" className="py-32 bg-white relative z-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver to-transparent opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="monochrome-text">Our Solution:</span>
            <br />
            <span className="text-dark">Native Liquidity Network</span>
          </h2>
          <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
            Superset introduces two revolutionary products that work together to
            solve liquidity fragmentation forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-curious-blue to-curious-blue-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">
              Deploy Multi-Chain
            </h3>
            <p className="text-gray-dark">
              OFT Factory deploys your stablecoin to every chain with a single
              transaction
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-curious-blue-light to-curious-blue-lighter rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">
              Aggregate Liquidity
            </h3>
            <p className="text-gray-dark">
              VirtualPools combine all liquidity across chains into unified
              trading pools
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 text-center hover:scale-105 transform transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-curious-blue-lighter to-curious-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-4">
              Optimize Rebalancing
            </h3>
            <p className="text-gray-dark">
              SUP token incentivizes LPs to allocate liquidity where it&apos;s
              needed most
            </p>
          </div>
        </div>

        <div className="glass-effect rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold monochrome-text mb-6">
            The Result
          </h3>
          <p className="text-xl text-gray-dark leading-relaxed max-w-4xl mx-auto">
            <span className="text-dark font-semibold">
              $5M spread across 5 chains gets the same liquidity depth as $5M in
              one chain.
            </span>
            Your stablecoin becomes as liquid as Tether from day one, enabling
            institutional-grade trading volumes across all major chains.
          </p>
        </div>
      </div>
    </section>
  );
}
