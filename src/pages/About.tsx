import React from 'react';
import { motion } from 'motion/react';
import { Heart, Target, Eye, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover the heart behind our mission and the journey that brought us here.
          </p>
        </div>
      </section>

      {/* Organization Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our story" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-6 font-serif">Our Story</h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Encouragement by Empowerment was founded on a simple yet powerful belief: that every individual has the potential to thrive when given the right support and encouragement. What started as a small community initiative has grown into a dedicated nonprofit organization serving hundreds of families.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Our journey began when a group of concerned community members noticed a gap in support for families facing systemic challenges. We realized that while immediate aid is crucial, long-term empowerment through mentorship and resource accessibility is the key to sustainable change.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Today, we continue to evolve, guided by the stories of those we serve and the unwavering commitment of our volunteers and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-black/5 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-brand-gold shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                alt="Founder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6 font-serif">A Message from our Founder</h2>
              <p className="text-xl italic text-neutral-700 mb-6 leading-relaxed">
                "I believe that no one should have to walk their hardest path alone. Encouragement by Empowerment was born from the simple truth that a helping hand can change a life's trajectory. Our goal is not just to provide help, but to build the strength within each person to rise above their circumstances."
              </p>
              <p className="font-bold text-brand-blue">— Marcus Thorne, Founder & Executive Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-blue p-12 rounded-3xl text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Our Mission</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To uplift and support individuals and families through encouragement, mentorship, and resource accessibility, fostering a community where everyone has the opportunity to thrive.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-gold p-12 rounded-3xl text-white"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Our Vision</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                A world where every person is empowered to reach their full potential, supported by a compassionate and resilient community network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-blue mb-16 font-serif">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Empowerment", desc: "Building strength and confidence in others." },
              { title: "Compassion", desc: "Acting with empathy and kindness." },
              { title: "Integrity", desc: "Being honest and transparent in all we do." },
              { title: "Community", desc: "Fostering connection and belonging." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-blue mb-2 font-serif">{value.title}</h4>
                <p className="text-neutral-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
