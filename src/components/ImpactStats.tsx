import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate, useMotionValueEvent } from 'motion/react';

function Counter({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/[,+]/g, ''));
  const count = useSpring(0, { bounce: 0, duration: 2000 });
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [displayValue, setDisplayValue] = useState("0");

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 2 });
    return () => controls.stop();
  }, [numericValue, count]);

  return (
    <span>
      {displayValue}
      {value.includes('+') ? '+' : ''}
    </span>
  );
}

export default function ImpactStats() {
  const stats = [
    { label: 'Families Supported', value: '1,200+' },
    { label: 'Active Mentors', value: '450+' },
    { label: 'Community Programs', value: '15+' },
    { label: 'Volunteer Hours', value: '25,000+' },
  ];

  return (
    <section className="py-16 bg-brand-gold text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="10" cy="10" r="20" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="90" cy="90" r="30" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 font-serif">
                <Counter value={stat.value} />
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest opacity-80 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
