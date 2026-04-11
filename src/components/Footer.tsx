"use client";

import { SITE_CONTENT } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer id="company" className="py-24 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Interactive Sections Container */}
        <div className="w-full space-y-4 mb-20">
          
          {/* Company Information Accordion */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
            <button 
              onClick={() => toggleSection('company')}
              className="w-full px-8 py-6 flex items-center justify-between group hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-serif font-medium flex items-center gap-3">
                <User className="w-5 h-5 text-gold" />
                {SITE_CONTENT.footer.company.label}
              </span>
              <motion.div
                animate={{ rotate: activeSection === 'company' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-foreground/40" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeSection === 'company' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 space-y-4 border-t border-white/5 pt-6">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-foreground/40 text-sm">屋号 / Trademark</span>
                      <span className="text-foreground/80 font-serif">{SITE_CONTENT.footer.company.trademark}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-foreground/40 text-sm">代表者 / Representative</span>
                      <span className="text-foreground/80">{SITE_CONTENT.footer.company.representative}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-foreground/40 text-sm">所在地 / Address</span>
                      <span className="text-foreground/80 text-right">{SITE_CONTENT.footer.company.address}</span>
                    </div>
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] text-foreground/30 leading-relaxed uppercase tracking-[0.2em]">
                        {SITE_CONTENT.footer.company.business}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Information Accordion */}
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
            <button 
              onClick={() => toggleSection('contact')}
              className="w-full px-8 py-6 flex items-center justify-between group hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-serif font-medium flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                {SITE_CONTENT.footer.contact.label}
              </span>
              <motion.div
                animate={{ rotate: activeSection === 'contact' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-foreground/40" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {activeSection === 'contact' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-8 pb-8 border-t border-white/5 pt-6">
                    <p className="text-foreground/50 font-light mb-6 text-sm">
                      {SITE_CONTENT.footer.contact.description}
                    </p>
                    <div className="flex items-center gap-4 text-foreground/80 hover:text-gold transition-colors cursor-pointer">
                      <Mail className="w-4 h-4" />
                      <span className="font-medium">{SITE_CONTENT.footer.contact.email}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-[10px] text-foreground/40 uppercase tracking-[0.3em] font-medium">
          <p>{SITE_CONTENT.footer.bottom.copyright}</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span className="hover:text-gold transition-colors cursor-pointer">{SITE_CONTENT.footer.bottom.privacy}</span>
            <span className="hover:text-gold transition-colors cursor-pointer">{SITE_CONTENT.footer.bottom.terms}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
