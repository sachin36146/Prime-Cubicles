
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-extrabold text-blue-400 tracking-tighter">PRIME</span>
              <span className="text-2xl font-light text-white ml-1 tracking-widest">CUBICLES</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Leading manufacturers and installers of high-quality washroom and office partitions. We specialize in Action TESA board solutions and HPL cubicles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-600 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-400 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-full hover:bg-pink-500 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition">Our Services</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-blue-400 transition">Products</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-blue-400 transition">Latest Blog</Link></li>
            </ul>
          </div>

          {/* Services SEO Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Partitions</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition">Toilet Cubicles</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition">Office Dividers</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition">Urinal Screens</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition">Modular Workstations</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-blue-400 transition">Action TESA Boards</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-slate-700 pb-2">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">Get industry insights and new project updates.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-slate-800 border-none rounded px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded font-bold transition">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Prime Cubicles. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
