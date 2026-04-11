
import { ShoppingCart } from 'lucide-react';
import React from 'react';

const NavLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

const Navbar = () => {
  return (
    <div className='flex justify-around items-center py-3 px-3'>
      <h2 className='text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent'>DigiTools</h2>
      <div className='flex gap-5'>
        {
          NavLinks.map((link,index) => <a key={index} className='font-bold' href=''>{link}</a>)
        }
      </div>
      <div className=' flex gap-5 items-center'>
      <a href='' className='font-semibold'><ShoppingCart></ShoppingCart></a>
      <a href='' className='font-semibold'>Login</a>
      <button className='btn rounded-full bg-gradient-to-r from-purple-700 to-violet-600 text-white font-extrabold'>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;