import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import FormSuccess from '../components/FormSuccess';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Contact Us</h1>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <FormSuccess 
              title="Message Sent!" 
              message="Thank you for reaching out! Our team has received your message and we'll get back to you as soon as possible."
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
            <circle cx="90" cy="90" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Have questions or want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-8 font-serif">Get in Touch</h2>
              <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
                Whether you're interested in our programs, want to volunteer, or have a general inquiry, our team is here to help.
              </p>
              
              <div className="space-y-8 mb-12">
                {[
                  { title: "Email Us", desc: "hello@encouragement.org", icon: <Mail className="w-6 h-6" /> },
                  { title: "Call Us", desc: "(555) 123-4567", icon: <Phone className="w-6 h-6" /> },
                  { title: "Visit Us", desc: "123 Community Way, Empowerment City, EC 54321", icon: <MapPin className="w-6 h-6" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue mb-1 font-serif text-xl">{item.title}</h4>
                      <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-bold text-brand-blue mb-6 font-serif text-xl">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-brand-blue/5 border border-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-black/5">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 font-serif">Send a Message</h3>
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
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({...formData, subject: e.target.value});
                      if (errors.subject) setErrors({...errors, subject: ''});
                    }}
                    className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 ${errors.subject ? 'border-red-500' : 'border-neutral-100'}`}
                    placeholder="General Inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({...formData, message: e.target.value});
                      if (errors.message) setErrors({...errors, message: ''});
                    }}
                    className={`w-full px-4 py-3 bg-neutral-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 ${errors.message ? 'border-red-500' : 'border-neutral-100'}`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full bg-brand-blue text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Preview Demo */}
      <section className="h-[400px] bg-neutral-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-bold uppercase tracking-widest">
          Interactive Map Integration Placeholder
        </div>
        <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
      </section>
    </div>
  );
}
