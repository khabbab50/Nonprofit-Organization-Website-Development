import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Briefcase, CheckCircle2, Send } from 'lucide-react';

import FormSuccess from '../components/FormSuccess';

export default function GetInvolved() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'volunteer',
    message: ''
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', interest: 'volunteer', message: '' });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Get Involved</h1>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <FormSuccess 
              title="Application Received!" 
              message="Thank you for your interest in joining our mission! Our team will review your application and get in touch with you shortly."
              onReset={() => setIsSubmitted(false)}
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="80" cy="20" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Get Involved</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your time and support are the catalysts for change. Join our mission today.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Volunteer", desc: "Share your skills and time to support our programs and community events.", icon: <Heart className="w-8 h-8" /> },
              { title: "Mentor", desc: "Provide one-on-one guidance to individuals seeking growth and empowerment.", icon: <Users className="w-8 h-8" /> },
              { title: "Partner", desc: "Collaborate with us as a business or organization to create systemic change.", icon: <Briefcase className="w-8 h-8" /> }
            ].map((way, i) => (
              <div key={way.title} className="bg-neutral-50 p-10 rounded-3xl text-center border border-black/5 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-brand-blue/5 text-brand-blue rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {way.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">{way.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{way.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-6 font-serif">Why Join Us?</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                When you join Encouragement by Empowerment, you aren't just volunteering—you're becoming part of a compassionate network dedicated to real, lasting change.
              </p>
              <div className="space-y-4">
                {[
                  "Make a direct impact in your local community.",
                  "Develop new skills and gain valuable experience.",
                  "Connect with like-minded individuals and leaders.",
                  "Be part of a supportive and inclusive team."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-gold w-6 h-6" />
                    <span className="font-medium text-neutral-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-black/5">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 font-serif">Sign Up Today</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({...formData, name: e.target.value});
                        if (errors.name) setErrors({...errors, name: ''});
                      }}
                      className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 ${errors.name ? 'border-red-500' : 'border-neutral-100'}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({...formData, email: e.target.value});
                        if (errors.email) setErrors({...errors, email: ''});
                      }}
                      className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 ${errors.email ? 'border-red-500' : 'border-neutral-100'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (errors.phone) setErrors({...errors, phone: ''});
                    }}
                    className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 ${errors.phone ? 'border-red-500' : 'border-neutral-100'}`}
                    placeholder="(555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Interest Area</label>
                  <select 
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                  >
                    <option value="volunteer">Volunteer</option>
                    <option value="mentor">Mentor</option>
                    <option value="partner">Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                    placeholder="Tell us a bit about yourself..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full bg-brand-blue text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Submitting...' : 'Submit Application'} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-blue mb-8 font-serif">Partnership Opportunities</h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We collaborate with businesses, foundations, and other nonprofits to maximize our impact. Let's work together to create a stronger community.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Corporate Sponsorship", desc: "Support our programs and events while gaining visibility for your brand." },
              { title: "Grant Partnerships", desc: "Collaborate on specific projects and community initiatives." },
              { title: "In-Kind Donations", desc: "Provide resources, space, or professional services to support our mission." }
            ].map((opp, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <h4 className="text-xl font-bold text-brand-blue mb-4 font-serif">{opp.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
