import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthGate from './components/AuthGate';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Proposal from './components/Proposal';
import Footer from './components/Footer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showHero, setShowHero] = useState(true);



  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowHero(true);
  };

  const handleHeroExecute = () => {
    setShowHero(false);
  };

  return (
    <div className="min-h-screen bg-ivory overflow-x-hidden selection:bg-rosegold selection:text-white">
      <AnimatePresence>
        {!isUnlocked && <AuthGate key="auth" onUnlock={handleUnlock} />}
        
        {isUnlocked && showHero && (
          <Hero key="hero" onExecute={handleHeroExecute} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {isUnlocked && !showHero && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }} // Wait for hero to fade out
            className="w-full relative"
          >
            <Timeline />
            <Gallery />
            <Proposal />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
