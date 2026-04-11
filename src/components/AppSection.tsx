"use client";

import { SITE_CONTENT } from "@/constants/content";
import { motion } from "framer-motion";
import { TrendingUp, Mic, Languages, Activity } from "lucide-react";

const apps = SITE_CONTENT.appSection.apps.map((app, index) => ({
  ...app,
  icon: [TrendingUp, Mic, Languages, Activity][index],
}));

export default function AppSection() {
  return (
    <section id="apps" className="py-32 px-6 bg-navy-light/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-4 font-medium">{SITE_CONTENT.appSection.label}</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-6">{SITE_CONTENT.appSection.title}</h3>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-500 relative"
            >
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold tracking-widest text-gold border border-gold/40 px-2 py-0.5 rounded-full uppercase">
                  {app.status}
                </span>
              </div>
              
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <app.icon className="w-6 h-6 text-gold" />
              </div>
              
              <h4 className="text-xl font-bold mb-3 tracking-tight">{app.title}</h4>
              <p className="text-foreground/50 text-sm leading-relaxed font-light">
                {app.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
