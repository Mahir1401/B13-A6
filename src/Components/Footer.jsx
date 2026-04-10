import React from 'react';

const LINKS = {
  Product: ['Features', 'Pricing', 'Templates', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-16 relative">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-12 mb-16">
      <div className="max-w-xs">
        <h2 className="text-2xl font-extrabold text-white mb-4">DigiTools</h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

      {Object.entries(LINKS).map(([category, links]) => (
        <div key={category}>
          <h3 className="text-white font-semibold mb-5">{category}</h3>
          <ul className="flex flex-col gap-3">
            {links.map(link => (
              <li key={link}>
                <a href="" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <h3 className="text-white font-semibold mb-5">Social Links</h3>
        <div className="flex gap-3">
            <a href="" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors">
              <img src="/assets/youtube-icon-logo-black-white_901408-456.avif" alt="Youtube" className='rounded-full'/>
            </a>
            <a href="" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors">
              <img src="/assets/business-icons-business-ecommerce-finance-accounting-big-set-icons-collection-vector-illustrat_1059745-252.avif" alt="Instagram" className='rounded-full'/>
            </a>
            <a href="" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors">
              <img src="/assets/social-media-x-logo-black-and-white-free-vector.jpg" alt="X" className='rounded-full'/>
            </a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 pt-8 flex items-center justify-between">
      <p className="text-sm text-gray-500">© 2026 Digitools. All rights reserved.</p>
      <div className="flex gap-6">
          <a  href="" className="text-sm text-gray-500 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a  href="" className="text-sm text-gray-500 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a  href="" className="text-sm text-gray-500 hover:text-white transition-colors">
            Cookies
          </a>
      </div>
    </div>
  </footer>
);

export default Footer;