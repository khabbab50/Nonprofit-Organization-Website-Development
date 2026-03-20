import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const isSolid = scrolled || !isHome;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-brand-blue">
              <img 
                src="https://picsum.photos/seed/empower/200/200" 
                alt="Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className={`font-serif text-lg font-bold transition-colors ${isSolid ? 'text-brand-blue' : 'text-white'}`}>
              <span className="hidden sm:inline">Encouragement by Empowerment</span>
              <span className="sm:hidden">EbE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-brand-gold ${location.pathname === link.path ? 'text-brand-gold' : isSolid ? 'text-neutral-700' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-neutral-200/20">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors hover:text-brand-gold ${isSolid ? 'text-neutral-700' : 'text-white'}`}
              >
                <Search className="w-5 h-5" />
              </button>
              <Link to="/donate" className="bg-brand-gold hover:bg-brand-gold/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md flex items-center gap-2">
                <Heart className="w-4 h-4" /> Donate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 transition-colors ${isSolid ? 'text-brand-blue' : 'text-white'}`}
            >
              <Search className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 transition-colors ${isSolid ? 'text-brand-blue' : 'text-white'}`}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-black/5 p-4"
          >
            <div className="max-w-3xl mx-auto flex gap-4">
              <input 
                type="text" 
                autoFocus
                placeholder="Search programs, events, news..." 
                className="flex-grow px-6 py-3 bg-neutral-100 border border-neutral-200 rounded-xl focus:outline-none focus:border-brand-gold/50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    alert('Search functionality is a demo. No results found for: ' + (e.target as HTMLInputElement).value);
                    setIsSearchOpen(false);
                  }
                }}
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold"
              >
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${location.pathname === link.path ? 'text-brand-gold' : 'text-neutral-800'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="bg-brand-gold text-white px-6 py-3 rounded-full font-bold text-center flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4" /> Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
