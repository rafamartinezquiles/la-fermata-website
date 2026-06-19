"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed, Flame, CookingPot, Truck } from "lucide-react";

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
    transition: { staggerChildren: 0.15 },
  },
};

const specialties = [
  {
    icon: UtensilsCrossed,
    title: "Pizza al Tegamino",
    description:
      "The Torinese tradition in a pan, with a high, crispy crust",
  },
  {
    icon: Flame,
    title: "Pizza al Mattone",
    description: "Crispy and thin, baked directly on stone",
  },
  {
    icon: CookingPot,
    title: "Farinata",
    description:
      "Traditional recipe with chickpea flour, simple and genuine",
  },
  {
    icon: Truck,
    title: "Takeaway & Delivery",
    description: "Enjoy us wherever you prefer, at home or at the office",
  },
];

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      {/* Page header */}
      <div className="pt-28 pb-8 text-center md:pt-32 md:pb-12">
        <motion.h1
          className="font-[family-name:var(--font-playfair)] text-3xl font-bold tracking-wider text-[#2C2420] md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Our Story
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

      {/* Story section */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Interior photo */}
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/images/interior-logo-wall.jpg"
              alt="Interior of La Fermata with logo and tables"
              width={600}
              height={800}
              className="rounded-2xl object-cover w-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </motion.div>

          {/* Story text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              La Fermata De Gasperi 43 was born in the heart of Turin, on Corso
              Alcide De Gasperi, with a simple dream: to serve authentic
              Torinese pizza in a warm and welcoming atmosphere.
            </motion.p>
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              Our specialty is pizza al tegamino and al mattone, made with dough
              aged for at least 24 hours and carefully selected ingredients.
              Alongside our pizza, we offer traditional chickpea farinata, plain
              or stuffed, and a selection of Italian dishes.
            </motion.p>
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              Open 7 days a week, for lunch and dinner, we welcome every guest
              as if they were at home. We also offer takeaway and home delivery,
              bringing our flavours directly to you.
            </motion.p>
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              The name &lsquo;La Fermata&rsquo; (The Stop) tells our
              philosophy: a place to stop, slow down, and savour the pleasure of
              a good meal in good company. We look forward to seeing you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Specialties section */}
      <section className="bg-[#FAF6F0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-wider text-[#2C2420] md:text-4xl">
              Our Specialties
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-[#C8A96E]/40" />
              <div className="h-2 w-2 rotate-45 border border-[#C8A96E] bg-transparent" />
              <div className="h-px w-16 bg-[#C8A96E]/40" />
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {specialties.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-[#C8A96E]/20 bg-[#FFFDF9] p-8 text-center shadow-sm transition-shadow hover:shadow-md"
                  variants={fadeUpVariants}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#B85C38]/10">
                    <Icon size={28} className="text-[#B85C38]" />
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-playfair)] text-lg font-semibold text-[#2C2420]">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#7A7068]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
