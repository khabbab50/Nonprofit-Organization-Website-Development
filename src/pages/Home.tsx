import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, HandHelping, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImpactStats from '../components/ImpactStats';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000" 
            alt="Community support" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-light-blue/20 text-brand-light-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6">
              Community & Trust
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 font-serif">
              Lifting Each Other Up, <br className="hidden sm:block" />
              <span className="text-brand-gold italic">One Hand at a Time.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
              We empower families and individuals through dedicated mentorship and community resources, fostering a future where everyone has the strength to rise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link to="/donate" className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg group">
                Donate to the Cause <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/get-involved" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all text-center">
                Become a Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-6 font-serif">Our Mission</h2>
              <p className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed">
                Encouragement by Empowerment is dedicated to uplifting individuals and families through a holistic approach to community support. We believe that by providing the right resources and mentorship, we can break cycles of struggle and build a stronger, more resilient community.
              </p>
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                {[
                  "Personalized Mentorship Plans",
                  "Direct Resource Allocation",
                  "Community-Driven Solutions",
                  "Long-term Support Networks"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="text-brand-gold w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="font-medium text-neutral-800 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all text-sm sm:text-base">
                Learn more about our story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000" 
                  alt="Community interaction" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-gold p-8 rounded-2xl text-white shadow-xl hidden md:block max-w-xs">
                <p className="italic text-lg mb-4">"No one should have to walk their hardest path alone."</p>
                <p className="font-bold">— Founder's Message</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImpactStats />

      {/* Quick Services */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4 font-serif">How We Help</h2>
            <p className="text-base sm:text-lg text-neutral-600">Tailored support systems designed to meet the unique needs of our community members.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Mentorship",
                desc: "One-on-one guidance connecting experienced leaders with individuals seeking growth.",
                icon: <Users className="w-8 h-8" />,
                link: "/programs"
              },
              {
                title: "Resources",
                desc: "Direct access to essential community tools, from workshops to emergency assistance.",
                icon: <HandHelping className="w-8 h-8" />,
                link: "/programs"
              },
              {
                title: "Community",
                desc: "A safe space for members to gather, share experiences, and build lasting networks.",
                icon: <Heart className="w-8 h-8" />,
                link: "/programs"
              }
            ].map((program, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-black/5 group"
              >
                <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">{program.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-8">{program.desc}</p>
                <Link to={program.link} className="text-brand-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="100" cy="0" r="80" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-serif">Ready to make a difference?</h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your time and support are the catalysts for change. Join us in our mission to empower and encourage our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/donate" className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg text-center">
              Donate Now
            </Link>
            <Link to="/get-involved" className="w-full sm:w-auto bg-white text-brand-blue px-10 py-4 rounded-full font-bold transition-all text-center">
              Volunteer Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
