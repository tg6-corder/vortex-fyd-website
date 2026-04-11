"use client";

import { motion } from "framer-motion";
import { Video, Globe } from "lucide-react";

import { SITE_CONTENT } from "@/constants/content";

export default function MediaSection() {
  return (
    <section id="media" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-medium">{SITE_CONTENT.mediaSection.label}</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-8 whitespace-pre-line">
            {SITE_CONTENT.mediaSection.title}
          </h3>
          <p className="text-lg text-foreground/60 font-light leading-relaxed mb-8">
            {SITE_CONTENT.mediaSection.description}
          </p>
          
          {SITE_CONTENT.mediaSection.features.length > 0 && (
            <ul className="space-y-4 mb-10">
              {SITE_CONTENT.mediaSection.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {SITE_CONTENT.mediaSection.youtubeButton && (
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
            >
              <Video className="w-5 h-5" />
              {SITE_CONTENT.mediaSection.youtubeButton}
            </a>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <Globe className="w-32 h-32 text-gold/20 group-hover:scale-110 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl border border-white/10">
              <div className="text-xs text-gold font-bold tracking-widest uppercase mb-1">{SITE_CONTENT.mediaSection.comingSoon.label}</div>
              <div className="text-lg font-serif">{SITE_CONTENT.mediaSection.comingSoon.title}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
