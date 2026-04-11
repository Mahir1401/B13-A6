import React from 'react';
import { ShoppingCart } from 'lucide-react';

const NavLinks = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
          NavLinks.map((link,index) => <a key={index} className='font-bold' href=''>{link}</a>)
        }
          </div>
        </div>
        <a className="btn btn-ghost text-xl"><h2 className='text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-violet-600 bg-clip-text text-transparent'>DigiTools</h2></a>
      </div>
      <div className="navbar-center flex gap-5 hidden lg:flex">
        {
          NavLinks.map((link,index) => <a key={index} className='font-bold' href=''>{link}</a>)
        }
      </div>
      <div className="navbar-end flex gap-5 items-center">
        <a href='' className='font-semibold'><ShoppingCart></ShoppingCart></a>
        <a href='' className='font-semibold'>Login</a>
        <button className='btn rounded-full bg-gradient-to-r from-purple-700 to-violet-600 text-white font-extrabold'>Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;