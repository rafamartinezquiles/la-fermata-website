"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";
import GoogleMap from "@/components/google-map";
import HoursTable from "@/components/hours-table";
import CTAButton from "@/components/cta-button";
import { restaurantInfo } from "@/lib/restaurant-info";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function DoveSiamoPageClient() {
  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      {/* Page header */}
      <div className="pt-28 pb-6 text-center md:pt-32 md:pb-8">
        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-wider text-[#2C2420] md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Dove Siamo
        </motion.h1>
        <motion.div
          className="mt-4 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="h-px w-20 bg-[#C8A96E]/40" />
          <div className="h-2.5 w-2.5 rotate-45 border border-[#C8A96E] bg-transparent" />
          <div className="h-px w-20 bg-[#C8A96E]/40" />
        </motion.div>
      </div>

      {/* Map */}
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <GoogleMap
          height="500"
          className="rounded-2xl shadow-lg md:h-[60vh]"
        />
      </motion.div>

      {/* Info section */}
      <motion.section
        className="mx-auto max-w-4xl px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="rounded-2xl border border-[#C8A96E]/20 bg-[#FFFDF9] p-8 shadow-sm md:p-12"
          variants={fadeUpVariants}
        >
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left: Contact info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B85C38]/10">
                  <MapPin size={20} className="text-[#B85C38]" />
                </div>
                <div>
                  <h3 className="mb-1 font-[family-name:var(--font-playfair)] text-base font-semibold text-[#2C2420]">
                    Indirizzo
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#7A7068]">
                    {restaurantInfo.address.street}
                    <br />
                    {restaurantInfo.address.city}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B85C38]/10">
                  <Phone size={20} className="text-[#B85C38]" />
                </div>
                <div>
                  <h3 className="mb-1 font-[family-name:var(--font-playfair)] text-base font-semibold text-[#2C2420]">
                    Telefono
                  </h3>
                  <a
                    href={restaurantInfo.phoneLink}
                    className="font-[family-name:var(--font-dm-sans)] text-sm text-[#B85C38] transition-colors hover:text-[#9A4D2F]"
                  >
                    {restaurantInfo.phone}
                  </a>
                </div>
              </div>

              {/* How to reach us */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B85C38]/10">
                  <Navigation size={20} className="text-[#B85C38]" />
                </div>
                <div>
                  <h3 className="mb-1 font-[family-name:var(--font-playfair)] text-base font-semibold text-[#2C2420]">
                    Come raggiungerci
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#7A7068]">
                    Il nome dice tutto &mdash; La Fermata si trova a pochi passi
                    dalla fermata del tram e dell&apos;autobus su Corso De
                    Gasperi. Facilmente raggiungibile anche in auto, con
                    parcheggio disponibile nelle vie limitrofe.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Hours table */}
            <div>
              <HoursTable />
            </div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUpVariants}
        >
          <CTAButton variant="primary" href={restaurantInfo.googleMapsUrl}>
            <MapPin size={18} className="mr-2" />
            Apri in Google Maps
          </CTAButton>
          <CTAButton variant="secondary" href={restaurantInfo.phoneLink}>
            <Phone size={18} className="mr-2" />
            Chiama per Prenotare
          </CTAButton>
        </motion.div>
      </motion.section>
    </div>
  );
}
