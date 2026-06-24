import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t border-rosegold/20 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center text-charcoal/60 font-mono text-sm flex flex-col gap-2">
        <p>
          إتعملت بـ <span className="text-red-500 animate-pulse inline-block">❤️</span> و <span className="font-semibold">&lt;Code/&gt;</span> لـ <span className="text-rosegold font-bold font-serif text-base mx-1">ندى سمير</span> بواسطة <span className="font-semibold mx-1">يوسف عماد</span>
        </p>
        <p className="text-xs text-charcoal/40">
          | Version 1.0.0 (Engagement Stable Release) |
        </p>
      </div>
    </footer>
  );
}
