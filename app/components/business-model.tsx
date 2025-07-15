import React from "react";

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="monochrome-text">Revenue Model</span>
            <br />
            &nbsp; Financial Projections
          </h2>
          <p className="text-xl text-gray-dark max-w-4xl mx-auto leading-relaxed">
            Clear path to profitability with multiple revenue streams and strong
            unit economics.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold monochrome-text mb-4">
              Fee Structure
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold text-white">0.1-0.3%</div>
                <div className="text-gray-light">Swap Fees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">80%</div>
                <div className="text-gray-light">Shared with LPs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">20%</div>
                <div className="text-gray-light">Protocol Revenue</div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold monochrome-text mb-4">
              Path to Profitability
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold text-white">$1B</div>
                <div className="text-gray-light">
                  Monthly Volume for Cash Flow+
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Sep 2025</div>
                <div className="text-gray-light">Revenue Generation Starts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">9%</div>
                <div className="text-gray-light">Target LP Yield</div>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold monochrome-text mb-4">
              Market Opportunity
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold text-white">$3.7T</div>
                <div className="text-gray-light">
                  Market Size by 2030 (Citi)
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">$100B</div>
                <div className="text-gray-light">
                  Daily Trading Volume Target
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-gray-light">New Chains (24 months)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-3xl p-12">
          <h3 className="text-3xl font-bold monochrome-text mb-8 text-center">
            Use of Funds
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-dark mb-6">
                Pre-Revenue Allocation ($1.15M)
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl">
                  <span className="text-dark">Structure Setup</span>
                  <span className="text-dark font-bold">$280k</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl">
                  <span className="text-dark">Tech Build Costs</span>
                  <span className="text-dark font-bold">$260k</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl">
                  <span className="text-dark">Sales & Marketing</span>
                  <span className="text-dark font-bold">$110k</span>
                </div>
                <div className="flex justify-between items-center p-4 glass-effect rounded-xl">
                  <span className="text-dark">Working Capital</span>
                  <span className="text-dark font-bold">$500k</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-dark mb-6">
                Revenue Projections
              </h4>
              <div className="space-y-6">
                <div className="border-l-4 border-curious-blue pl-6">
                  <h5 className="font-bold text-dark mb-2">Year 1 Target</h5>
                  <p className="text-gray-dark">
                    $1B monthly volume → $20M annual fees → $4M protocol revenue
                  </p>
                </div>
                <div className="border-l-4 border-silver pl-6">
                  <h5 className="font-bold text-dark mb-2">Year 3 Target</h5>
                  <p className="text-gray-dark">
                    $10B monthly volume → $200M annual fees → $40M protocol
                    revenue
                  </p>
                </div>
                <div className="border-l-4 border-platinum pl-6">
                  <h5 className="font-bold text-dark mb-2">LP Economics</h5>
                  <p className="text-gray-dark">
                    9% yield from trading fees + SUP token incentives for
                    optimal allocation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
