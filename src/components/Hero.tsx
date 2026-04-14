"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SITE_CONTENT } from "@/constants/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut"
          }}
          className="relative w-48 h-48 md:w-64 md:h-64 mb-12"
        >
          {/* ロゴ画像 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="VORTEX FYD ロゴ" 
              width={400} 
              height={400} 
              className="object-contain"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const textLogo = document.createElement('div');
                  textLogo.className = "font-serif text-8xl text-gold tracking-tighter opacity-80 select-none";
                  textLogo.innerText = "V";
                  parent.appendChild(textLogo);
                }
              }}
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-foreground mb-6 leading-tight whitespace-pre-line"
        >
          {SITE_CONTENT.hero.headline}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-xl mx-auto text-base md:text-lg text-foreground/60 font-light leading-relaxed mb-10 whitespace-pre-line"
        >
          {SITE_CONTENT.hero.subtext}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-4 justify-center"
        >
          <a href="#apps" className="px-8 py-3 bg-gold text-background font-bold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/20">
            {SITE_CONTENT.hero.buttons.primary}
          </a>
          <a href="#company" className="px-8 py-3 glass rounded-full border border-white/10 hover:bg-white/5 transition-colors duration-300">
            {SITE_CONTENT.hero.buttons.secondary}
          </a>
        </motion.div>
      </div>


    </section>
  );
}
