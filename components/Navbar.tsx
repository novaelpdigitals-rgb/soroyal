import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ShoppingBag, Calendar, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'All Solutions', href: '/solutions', icon: <ShoppingBag className="w-4 h-4" /> },
        { name: 'Souvenirs', href: '/solutions#souvenirs', icon: <ShoppingBag className="w-4 h-4" /> },
        { name: 'Event Planning', href: '/events', icon: <Calendar className="w-4 h-4" /> },
        { name: 'Student Training', href: '/solutions#training', icon: <GraduationCap className="w-4 h-4" /> },
      ]
    },
    { name: 'Events', href: '/events' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              SO<span className="text-amber-500">Royal</span>
              <span className={`ml-1 text-sm font-sans font-black uppercase tracking-tighter border-2 px-1 rounded ${isScrolled ? 'border-amber-500 text-black' : 'border-white text-white'}`}>Bubbles</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors ${isScrolled ? 'text-stone-700 hover:text-blue-600' : 'text-white/90 hover:text-white'}`}
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-stone-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center space-x-3 px-4 py-3 text-sm text-stone-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                            >
                              {item.icon}
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link 
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-amber-500/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-stone-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-3 text-sm text-stone-500 hover:text-emerald-600"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
