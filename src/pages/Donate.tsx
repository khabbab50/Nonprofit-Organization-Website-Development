import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, CheckCircle2, CreditCard, DollarSign } from 'lucide-react';

import FormSuccess from '../components/FormSuccess';

export default function Donate() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('50');
  const [frequency, setFrequency] = useState('one-time');
  const [customAmount, setCustomAmount] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: ''
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const finalAmount = customAmount || amount;
    
    if (!finalAmount || parseFloat(finalAmount) <= 0) {
      newErrors.amount = 'Please select or enter a valid donation amount';
    }

    if (!paymentData.nameOnCard.trim()) {
      newErrors.nameOnCard = 'Name on card is required';
    }

    if (!/^\d{16}$/.test(paymentData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number (16 digits required)';
    }

    if (!/^\d{2}\/\d{2}$/.test(paymentData.expiry)) {
      newErrors.expiry = 'Invalid expiry (MM/YY)';
    }

    if (!/^\d{3,4}$/.test(paymentData.cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    return value
      .replace(/[^0-9]/g, '')
      .replace(/^([2-9])$/g, '0$1')
      .replace(/^(1[3-9])$/g, '0$1')
      .replace(/^([0-1][0-9])([0-9]{1,2}).*/g, '$1/$2')
      .substring(0, 5);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20">
        <section className="bg-brand-blue py-24 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Support Our Mission</h1>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <FormSuccess 
              title="Donation Received!" 
              message={`Thank you for your generous ${frequency} contribution of $${customAmount || amount}. Your support directly impacts the lives of those in our community.`}
              onReset={() => {
                setIsSubmitted(false);
                setAmount('50');
                setCustomAmount('');
              }}
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
            <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Support Our Mission</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your contribution fuels the mentorship and resources that transform "struggling" into "thriving."
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold text-brand-blue mb-6 font-serif">Why Give?</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Every dollar you donate is a direct investment in a neighbor's success story. We focus on sustainable empowerment that breaks generational cycles of hardship.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Direct Impact", desc: "100% of your donation goes directly to community programs and resource allocation.", icon: <Heart className="w-6 h-6" /> },
                  { title: "Secure & Transparent", desc: "We use industry-standard encryption and provide regular reports on our impact.", icon: <ShieldCheck className="w-6 h-6" /> },
                  { title: "Sustainable Change", desc: "We focus on long-term empowerment rather than just short-term relief.", icon: <CheckCircle2 className="w-6 h-6" /> }
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
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-black/5">
              <h3 className="text-2xl font-bold text-brand-blue mb-8 font-serif">Make a Difference</h3>
              <form onSubmit={handleDonate} className="space-y-8">
                {/* Frequency Toggle */}
                <div className="flex p-1 bg-neutral-100 rounded-xl">
                  {['one-time', 'monthly'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-3 rounded-lg font-bold text-sm transition-all ${frequency === f ? 'bg-white text-brand-blue shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-4">
                  {['25', '50', '100', '250', '500', '1000'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => { setAmount(val); setCustomAmount(''); }}
                      className={`py-4 border-2 rounded-xl font-bold transition-all ${amount === val && !customAmount ? 'border-brand-gold bg-brand-gold/5 text-brand-gold' : 'border-neutral-100 text-neutral-500 hover:border-brand-gold/50'}`}
                    >
                      ${val}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input 
                    type="number" 
                    placeholder="Custom Amount" 
                    value={customAmount}
                    onChange={(e) => { 
                      setCustomAmount(e.target.value); 
                      setAmount(''); 
                      if (errors.amount) setErrors({...errors, amount: ''});
                    }}
                    className={`w-full pl-12 pr-4 py-4 bg-neutral-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 font-bold ${errors.amount ? 'border-red-500' : 'border-neutral-100'}`}
                  />
                  {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
                </div>

                {/* Payment Information */}
                <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-4">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs mb-2 uppercase tracking-widest font-bold">
                    <CreditCard className="w-4 h-4" /> Secure Payment Information
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 px-1">Name on Card</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 font-medium transition-all ${errors.nameOnCard ? 'border-red-500' : 'border-neutral-100'}`}
                        value={paymentData.nameOnCard}
                        onChange={(e) => {
                          setPaymentData({ ...paymentData, nameOnCard: e.target.value });
                          if (errors.nameOnCard) setErrors({...errors, nameOnCard: ''});
                        }}
                      />
                      {errors.nameOnCard && <p className="text-red-500 text-[10px] mt-1 px-1">{errors.nameOnCard}</p>}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 px-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 font-medium transition-all ${errors.cardNumber ? 'border-red-500' : 'border-neutral-100'}`}
                        value={paymentData.cardNumber}
                        onChange={(e) => {
                          setPaymentData({ ...paymentData, cardNumber: formatCardNumber(e.target.value) });
                          if (errors.cardNumber) setErrors({...errors, cardNumber: ''});
                        }}
                        maxLength={19}
                      />
                      {errors.cardNumber && <p className="text-red-500 text-[10px] mt-1 px-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 px-1">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 font-medium transition-all ${errors.expiry ? 'border-red-500' : 'border-neutral-100'}`}
                          value={paymentData.expiry}
                          onChange={(e) => {
                            setPaymentData({ ...paymentData, expiry: formatExpiry(e.target.value) });
                            if (errors.expiry) setErrors({...errors, expiry: ''});
                          }}
                          maxLength={5}
                        />
                        {errors.expiry && <p className="text-red-500 text-[10px] mt-1 px-1">{errors.expiry}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 px-1">CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          className={`w-full px-4 py-3 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/20 font-medium transition-all ${errors.cvv ? 'border-red-500' : 'border-neutral-100'}`}
                          value={paymentData.cvv}
                          onChange={(e) => {
                            setPaymentData({ ...paymentData, cvv: e.target.value.replace(/\D/g, '').substring(0, 4) });
                            if (errors.cvv) setErrors({...errors, cvv: ''});
                          }}
                          maxLength={4}
                        />
                        {errors.cvv && <p className="text-red-500 text-[10px] mt-1 px-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className={`w-full bg-brand-blue text-white py-5 rounded-xl font-bold shadow-lg hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 text-lg ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Processing...' : 'Complete Donation'} <Heart className="w-5 h-5" />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-neutral-400 text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Secure SSL Encrypted Transaction
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Preview */}
      <section className="py-24 bg-neutral-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-brand-blue mb-12 font-serif">Your Impact in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sarah's Journey", desc: "Your $50 donation provided Sarah with the mentorship she needed to start her own business.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { title: "The Miller Family", desc: "Monthly support helped the Millers secure stable housing and childcare during a transition.", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=400" },
              { title: "Youth Literacy", desc: "Donations funded our neighborhood literacy program, reaching over 200 children this year.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400" }
            ].map((story, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={story.img} alt={story.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-brand-blue mb-2 font-serif">{story.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{story.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
