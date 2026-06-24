import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    date: 'Chapter 1 - 30/9/2025',
    title: 'لما طلبتي مساعدتي في البرمجة',
    image: '/images/3.jpg',
    description: 'أول مرة نتكلم عشان أساعدك في المذاكرة.. ومكنتش عارف إن دي الـ Function اللي هتغير حياتي كلها.',
  },
  {
    date: 'Chapter 2 - 15/11/2025',
    title: 'يوم ما اعترفتلك باللي جوايا',
    image: '/images/2.jpg',
    description: 'لحظة ما الكلمات كانت بتهرب مني بس قلبي كان بيتكلم.',
  },
  {
    date: 'Chapter 3 - 20/11/2025',
    title: 'فرح مريم.. أول نظرة خطفت قلبي',
    image: '/images/1.jpg',
    description: 'اليوم اللي حسيت فيه إن الدنيا نورت بوجودك.',
  },
  {
    date: 'Chapter 4 - 5/12/2025',
    title: 'لما روحت أتقدم لك وقابلت باباكي',
    image: '/images/4.jpg',
    description: 'أهم وأشجع خطوة أخدتها في حياتي.. اليوم اللي جيت أطلب إيدك فيه وكنت طاير من الفرحة.',
  },
  {
    date: 'Chapter 5 - 6/6/2026',
    title: 'اللحظة اللي قررنا نكمل سوا',
    image: '/images/5.jpg',
    description: 'أحلى قرار أخدته، إني اختار أكمل بقية عمري جنبك.',
  },
];

export default function Timeline() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">فصول حكايتنا</h2>
        <p className="text-rosegold font-light text-lg">كل خطوة مشيناها سوا لحد ما وصلنا لبعض</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rosegold/30 rounded-full hidden md:block"></div>

        <div className="flex flex-col gap-12 md:gap-24">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Space for the opposite side */}
                <div className="w-full md:w-5/12"></div>

                {/* Center Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-rosegold shadow-[0_0_10px_rgba(183,110,121,0.8)] hidden md:block z-10 border-2 border-ivory"></div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 glassmorphism rounded-xl p-6 relative group hover:scale-[1.02] transition-transform duration-300">
                  <div className="text-rosegold text-sm font-bold mb-2">{item.date}</div>
                  <h3 className="text-2xl font-serif text-charcoal mb-3">{item.title}</h3>
                  <div className="overflow-hidden rounded-lg mb-4 shadow-md aspect-video relative bg-blush/50 flex items-center justify-center">
                    {/* Image placeholder with fallback */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center hidden text-charcoal/30">
                      صورة ذكرى جميلة هنا
                    </div>
                  </div>
                  <p className="text-charcoal/80 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
