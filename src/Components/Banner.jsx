import React from 'react';
import { Circle, Play } from 'lucide-react';

const Stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
];

const Banner = () => {
  return (

      <div className="min-h-screen bg-white flex flex-col">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-lg">
            <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full border border-purple-200 bg-purple-50">
              <Circle  size={10} className="text-purple-700 fill-purple-700"></Circle>
              <span className="text-sm font-semibold text-purple-700">New: AI-Powered Tools Available</span>
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Supercharge Your Digital Workflow
            </h1>
            <p className="text-gray-500 text-base">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>
            <div className="flex gap-4 items-center mt-2">
              <button className="btn px-7 py-3 rounded-full bg-gradient-to-r from-purple-700 to-violet-600 text-white font-extrabold">
                Explore Products
              </button>
              <button className="btn flex items-center gap-2 px-7 py-3 rounded-full font-bold text-gray-800">
                <Play size={15} className="text-purple-700 fill-purple-700"></Play>
                Watch Demo
              </button>
            </div>
          </div>

          <div className="w-[560px] h-[680px] rounded-2xl">
            <img
              src="/assets/banner.png"
              alt="Digital workflow"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-700 to-fuchsia-600 px-16 py-12">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4">
            {Stats.map((stat) => (
              <div key={stat.label}>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-5xl font-extrabold text-white">{stat.value}</span>
                  <span className="text-white/80 text-base font-medium">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Banner;