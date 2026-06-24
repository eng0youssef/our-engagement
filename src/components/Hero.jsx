import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeString = `if (engagement.status === 'Ready' && she.says === 'Yes') {
    await initialize.ourFuture();
    console.log('Error 404: Loneliness not found.');
}`;

export default function Hero({ onExecute }) {
  const [typedCode, setTypedCode] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedCode(codeString.substring(0, i + 1));
      i++;
      if (i === codeString.length) {
        clearInterval(typingInterval);
        setTimeout(() => setIsTypingComplete(true), 500);
      }
    }, 50); // Speed of typing
    return () => clearInterval(typingInterval);
  }, []);

  const handleExecute = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onExecute();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-[#0d1117] flex flex-col items-center justify-center font-mono p-4"
        >
          <div className="w-full max-w-2xl bg-[#161b22] rounded-lg border border-[#30363d] shadow-2xl overflow-hidden min-h-[300px] flex flex-col">
            <div className="flex items-center px-4 py-2 bg-[#0d1117] border-b border-[#30363d]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-xs text-gray-400">future.js</div>
            </div>
            
            <div dir="ltr" className="flex-1 p-6 text-left text-sm sm:text-base md:text-lg overflow-x-auto whitespace-pre-wrap text-green-400">
              {typedCode}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-green-400 ml-1 translate-y-1"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="mt-12 h-16"
          >
            {isTypingComplete && (
              <button
                onClick={handleExecute}
                className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 rounded-md font-mono text-lg uppercase tracking-widest hover:bg-green-500 hover:text-[#0d1117] transition-all shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:shadow-[0_0_25px_rgba(34,197,94,0.8)] focus:outline-none"
              >
                تنفيذ (Execute)
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
