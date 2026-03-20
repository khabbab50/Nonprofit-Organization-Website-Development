import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Heart, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-blue rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="https://picsum.photos/seed/empower/200/200" 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-xl font-bold text-white">Encouragement by Empowerment</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Uplifting families and individuals through mentorship, resources, and community programs. Together, we rise.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-gold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-brand-gold transition-colors">Our Programs</Link></li>
              <li><Link to="/get-involved" className="hover:text-brand-gold transition-colors">Volunteer</Link></li>
              <li><Link to="/events" className="hover:text-brand-gold transition-colors">Events & News</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-4 text-white/60 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>123 Community Way<br />Empowerment City, EC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>hello@encouragement.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-gold mb-6 uppercase tracking-widest text-xs">Stay Updated</h4>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Join our newsletter to receive the latest news and impact stories.
            </p>
            {isNewsletterSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl text-green-500 text-sm font-bold flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing!
              </motion.div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsNewsletterSubmitted(true);
                  setTimeout(() => setIsNewsletterSubmitted(false), 5000);
                }}
                className="space-y-3"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-brand-gold/50 text-sm"
                />
                <button type="submit" className="w-full bg-brand-gold text-white py-3 rounded-xl font-bold text-sm hover:bg-brand-gold/90 transition-all">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 Encouragement by Empowerment. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
