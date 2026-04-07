import React from 'react';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    tagline: 'Perfect for getting started',
    price: '$0',
    period: '/Month',
    features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Pro',
    tagline: 'Best for professionals',
    price: '$29',
    period: '/Month',
    features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For teams and businesses',
    price: '$99',
    period: '/Month',
    features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => (
  <div className="bg-white py-20 px-16">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Simple, Transparent Pricing</h2>
      <p className="text-gray-400">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
      {PLANS.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-2xl border p-8 flex flex-col gap-5 ${
            plan.popular
              ? 'bg-gradient-to-b from-purple-700 to-violet-600 border-transparent text-white'
              : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-amber-200 text-amber-900 text-sm font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            </div>
          )}

          <div>
            <h3 className={`text-lg font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
              {plan.name}
            </h3>
            <p className={`text-sm mt-0.5 ${plan.popular ? 'text-violet-200' : 'text-gray-400'}`}>
              {plan.tagline}
            </p>
          </div>

          <div className="flex items-baseline gap-1">
            <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
              {plan.price}
            </span>
            <span className={`text-sm font-medium ${plan.popular ? 'text-violet-200' : 'text-gray-400'}`}>
              {plan.period}
            </span>
          </div>

          <ul className="flex flex-col gap-2.5 flex-1">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check size={15} className={plan.popular ? 'text-violet-200' : 'text-purple-600'} strokeWidth={2.5} />
                <span className={`text-sm ${plan.popular ? 'text-violet-100' : 'text-gray-600'}`}>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className={`mt-4 w-full py-3 rounded-full font-extrabold text-sm transition-opacity hover:opacity-90 ${
              plan.popular
                ? 'btn bg-white text-purple-700'
                : 'btn bg-gradient-to-r from-purple-700 to-violet-600 text-white'
            }`}
          >
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Pricing;