"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { restaurantInfo } from "@/lib/restaurant-info";
import GoogleMap from "@/components/google-map";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#2C2420] text-[#FAF6F0]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Seguici */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="mb-6 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#C8A96E]">
              Seguici
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href={restaurantInfo.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[#C8A96E]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="font-[family-name:var(--font-dm-sans)] text-sm">
                  {restaurantInfo.social.instagram}
                </span>
              </a>
              <div className="flex items-center gap-3 text-[#FAF6F0]/50">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="font-[family-name:var(--font-dm-sans)] text-sm">
                  Coming Soon
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contatti */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="mb-6 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#C8A96E]">
              Contatti
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#C8A96E]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed">
                  {restaurantInfo.address.street}
                  <br />
                  {restaurantInfo.address.city}
                </span>
              </div>
              <a
                href={restaurantInfo.phoneLink}
                className="flex items-center gap-3 transition-colors hover:text-[#C8A96E]"
              >
                <Phone size={18} className="text-[#C8A96E]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm">
                  {restaurantInfo.phone}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-[#C8A96E]" />
                <span className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed">
                  Pranzo: 12:30 &ndash; 15:00
                  <br />
                  Cena: 19:00 &ndash; 23:00
                  <br />
                  <span className="text-[#FAF6F0]/60">
                    (Ven &amp; Sab fino alle 00:00)
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mappa */}
          <motion.div variants={fadeUpVariants}>
            <h3 className="mb-6 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#C8A96E]">
              Dove Siamo
            </h3>
            <GoogleMap height="200" className="rounded-lg" />
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 border-t border-[#FAF6F0]/10 pt-8 text-center"
          variants={fadeUpVariants}
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-xs text-[#FAF6F0]/50">
            &copy; 2026 La Fermata De Gasperi 43 &mdash; Tutti i diritti
            riservati
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
