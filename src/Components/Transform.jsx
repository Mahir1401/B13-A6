import React from 'react';

const Transform = () => (
  <div className="bg-gradient-to-r from-purple-700 to-violet-600 py-20 px-16 text-center">
    <h2 className="text-4xl font-extrabold text-white mb-4">Ready To Transform Your Workflow?</h2>
    <p className="text-violet-200 mb-8">
      Join thousands of professionals who are already using Digitools to work smarter.<br />
      Start your free trial today.
    </p>
    <div className="flex items-center justify-center gap-4 mb-6">
      <button className="btn btn-lg rounded-full text-purple-700 bg-white">
        Explore Products
      </button>
      <button className="btn btn-lg rounded-full border-2 text-white bg-gradient-to-r from-purple-700 to-violet-600">
        View Pricing
      </button>
    </div>
    <p className="text-violet-300 text-sm">
      14-day free trial • No credit card required • Cancel anytime
    </p>
  </div>
);

export default Transform;