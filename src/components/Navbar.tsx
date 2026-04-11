"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SITE_CONTENT } from "@/constants/content";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/50 border-b border-white/5"
    >
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="VORTEX FYD Logo" 
            width={32} 
            height={32} 
            className="object-contain"
          />
          <span className="text-xl font-serif font-bold tracking-tighter text-gold">
            {SITE_CONTENT.navbar.logo}
          </span>
        </Link>
      </div>
      
      <div className="flex items-center gap-8 text-sm font-medium tracking-wide text-foreground/70">
        {SITE_CONTENT.navbar.links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:text-gold transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
