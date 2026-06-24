import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Heart } from 'lucide-react';
import { cn } from '../utils';

export default function AuthGate({ onUnlock }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === '2662026') {
      onUnlock();
    } else {
      setError(true);
      setPasscode('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ivory via-blush/30 to-ivory">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md p-8 text-center"
      >
        <div className="glassmorphism rounded-2xl p-10 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rosegold/20 via-rosegold to-rosegold/20"></div>
          
          <div className="w-16 h-16 rounded-full bg-rosegold/10 flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-rosegold" />
          </div>
          
          <h1 className="text-3xl font-serif text-charcoal mb-2">أهلاً بيكي يا ندى</h1>
          <p className="text-charcoal/70 mb-8 font-light">في عالم متبرمج مخصوص ليكي</p>

          <form onSubmit={handleSubmit} className="w-full">
            <motion.div
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="relative w-full"
            >
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                }}
                placeholder="الباسورد..."
                className={cn(
                  "glass-input w-full text-center text-2xl tracking-[0.5em] font-sans h-14",
                  error && "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                )}
                autoFocus
              />
            </motion.div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-rosegold mt-4 text-sm flex flex-col gap-1"
              >
                <span className="font-bold text-red-500">الدخول مرفوض.</span>
                <span>تلميح: التاريخ اللي هيفضل محفور في قلوبنا طول العمر</span>
              </motion.div>
            )}

            <button
              type="submit"
              className="btn-primary w-full mt-8 flex items-center justify-center gap-2 group"
            >
              <span>الدخول</span>
              <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
