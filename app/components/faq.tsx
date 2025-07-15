import React from "react";

export default function FAQ() {
  return (
    <section id="faq" className="py-32 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="monochrome-text">Frequently</span>
            <br />
            Asked Questions
          </h2>
          <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
            Common questions about Superset&apos;s technology, business model,
            and market opportunity.
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">
              How does Superset differ from existing DEX aggregators like 1inch?
            </h3>
            <p className="text-gray-dark">
              1inch can only access liquidity on a single chain, typically $2M
              for a mid-size token. Superset aggregates liquidity across ALL
              chains, so the same token might have $10M+ total liquidity,
              reducing slippage from 33% to 9% on a $1M trade.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">
              What happens if a cross-chain transaction fails?
            </h3>
            <p className="text-gray-dark">
              We implement timeout mechanisms - if a swap response isn&apos;t
              received within a specific block limit, users can call a recovery
              function to get their funds back. We&apos;re built on
              LayerZero&apos;s infrastructure which has zero hacks to date.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">
              How do you achieve $1B monthly volume for cash flow positive?
            </h3>
            <p className="text-gray-dark">
              With our committed $4.6B liquidity and partnerships like
              Tether&apos;s USDT0, we project reaching $1B monthly volume within
              12 months of launch. This generates ~$2M monthly fees, with 20%
              ($400k) going to protocol revenue.
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-xl font-bold text-dark mb-4">
              Why would issuers choose Superset over market makers?
            </h3>
            <p className="text-gray-dark">
              Market makers profit from arbitraging price differences between
              chains - essentially extracting value from the fragmentation
              problem. Superset eliminates price discrepancies by creating one
              unified price across all chains, while incentivizing optimal
              liquidity allocation at no cost to issuers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
