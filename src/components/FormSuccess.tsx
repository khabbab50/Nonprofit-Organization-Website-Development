import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface FormSuccessProps {
  title: string;
  message: string;
  onReset: () => void;
}

export default function FormSuccess({ title, message, onReset }: FormSuccessProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 px-6 bg-white rounded-3xl border border-brand-blue/10 shadow-xl"
    >
      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle2 className="w-10 h-10" />
      </div>
      <h3 className="text-3xl font-bold text-brand-blue mb-4 font-serif">{title}</h3>
      <p className="text-neutral-600 mb-10 max-w-md mx-auto leading-relaxed">
        {message}
      </p>
      <button 
        onClick={onReset}
        className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all"
      >
        Send another message <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
