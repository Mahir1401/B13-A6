import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    icon: User,
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    number: '02',
    icon: Package,
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
  },
];

const Steps = () => {
  return (
    <div className="bg-gray-50 py-20 px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-400">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {STEPS.map(({ number, icon: Icon, title, description }) => (
          <div
            key={number}
            className="relative bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center text-center"
          >
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-700 to-violet-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">{number}</span>
            </div>

            <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-6">
              <Icon size={32} className="text-purple-600" strokeWidth={1.5} />
            </div>

            <h3 className="text-lg font-extrabold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;