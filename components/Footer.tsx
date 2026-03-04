import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-display font-bold text-white">
                SO<span className="text-orange-500">Royal</span>
                <span className="ml-2 text-sm font-sans font-black uppercase tracking-tighter border-2 border-orange-500 px-1 rounded text-white">Bubbles</span>
              </span>
            </Link>
            <p className="text-stone-400 leading-relaxed">
              Elevating Nigerian celebrations with premium souvenirs, expert event planning, and creative student training programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="hover:text-orange-500 transition-colors">Our Solutions</Link></li>
              <li><Link href="/events" className="hover:text-orange-500 transition-colors">Event Planning</Link></li>
              <li><Link href="/solutions#souvenirs" className="hover:text-orange-500 transition-colors">Souvenir Shop</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>123 Royal Plaza, Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>+234 800 SOROYAL</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>hello@soroyalsolutions.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-stone-400 mb-6 text-sm">Subscribe to get updates on new souvenir arrivals and event tips.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-orange-500 transition-colors text-sm"
              />
              <button className="absolute right-2 top-2 bg-orange-500 hover:bg-orange-600 text-white p-1.5 rounded-lg transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} SORoyal Solutions. All rights reserved. Crafted with culture.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
