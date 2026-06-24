import React, { useState } from 'react';
import Confetti from 'react-confetti';

import { motion } from 'framer-motion';
import { GitMerge } from 'lucide-react';
import { cn } from '../utils';

export default function Proposal() {
  const [isMerged, setIsMerged] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleMerge = () => {
    setIsMerged(true);
    setShowConfetti(true);
    // Stop confetti after 8 seconds
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti 
            width={window.innerWidth} 
            height={window.innerHeight} 
            colors={['#FFFAF0', '#B76E79', '#FFF0F5', '#ffffff']}
            recycle={true}
            numberOfPieces={400}
          />
        </div>
      )}

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glassmorphism rounded-3xl p-10 md:p-16 border-t-4 border-rosegold"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-8 leading-tight">
            ندى.. الكود اللي ظبط حياتي
          </h2>
          
          <div className="text-lg md:text-2xl font-serif text-charcoal/80 leading-relaxed mb-12 space-y-6">
            <p>
              من يوم ما دخلتي حياتي وكل الـ bugs اللي كانت فيها اتحلت. 
              إنتي مش بس جزء من يومي، إنتي الـ main function اللي مبني عليها كل حاجة حلوة في دنيتي.
            </p>
            <p>
              أنا مش عايز أبني مجرد مستقبل، أنا عايز أبني حياة كاملة معاكي.
              عايز أكون معاكي في كل الأيام الحلوة، ونعدي سوا أي أيام صعبة.
            </p>
            <p className="font-semibold text-rosegold text-2xl md:text-3xl mt-8">
              تقبلي تكملي معايا بقية العمر؟
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center">
            <button
              onClick={handleMerge}
              disabled={isMerged}
              className={cn(
                "relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-md font-sans font-medium text-lg md:text-xl transition-all duration-500",
                isMerged 
                  ? "bg-[#2da44e] text-white cursor-default shadow-lg scale-105" 
                  : "bg-[#2da44e] hover:bg-[#2c974b] text-white shadow-md hover:shadow-lg active:scale-95"
              )}
            >
              <GitMerge className={cn("w-6 h-6", isMerged && "animate-bounce")} />
              {isMerged ? "Merged Successfully 💍" : "Merge 'our_lives' into 'main'"}
            </button>
            
            {!isMerged && (
              <p className="text-sm text-charcoal/50 mt-4 font-mono">
                Deploying our "happily ever after" to production.
              </p>
            )}
            {isMerged && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-rosegold mt-4 font-serif italic"
              >
                بحبك يا أغلى حاجة في حياتي
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
