"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import HeroCarousel from "@/components/hero-carousel";
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
    transition: { staggerChildren: 0.15 },
  },
};

const menuPreviewItems = [
  { name: "Margherita", desc: "Tomato, mozzarella", price: "6,00 / 7,50" },
  { name: "Farinata Classica", desc: "Chickpea flour, traditional", price: "5,00" },
  {
    name: "Linea 43 — La Fermata",
    desc: "Our signature house pizza",
    price: "9,50 / 11,00",
  },
];

const galleryItems = [
  { id: 0, src: "/images/gallery-pomodorini-gialli.jpg", alt: "Pizza with yellow cherry tomatoes" },
  { id: 1, src: "/images/gallery-pesto-olive.jpg", alt: "Pizza with pesto and olives" },
  { id: 2, src: "/images/gallery-crudo-rucola.jpg", alt: "Pizza with prosciutto crudo and rocket" },
  { id: 3, src: "/images/gallery-margherita-box.jpg", alt: "Margherita al mattone" },
  { id: 4, src: "/images/gallery-bufala-crudo.jpg", alt: "Pizza with buffalo mozzarella and prosciutto" },
  { id: 5, src: "/images/gallery-farinata-classica.jpg", alt: "Classic farinata" },
  { id: 6, src: "/images/gallery-tegamino-pair.jpg", alt: "Pizzas al tegamino" },
  { id: 7, src: "/images/gallery-salsiccia-gialli.jpg", alt: "Pizza with sausage and yellow tomatoes" },
  { id: 8, src: "/images/gallery-margherita-tegamino.jpg", alt: "Margherita al tegamino" },
  { id: 9, src: "/images/gallery-friarielli.jpg", alt: "Pizza with sausage and broccoli rabe" },
];

export default function HomePageClientEN() {
  return (
    <div className="min-h-screen bg-[#FFFDF9]">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Introduction */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-wider text-[#2C2420] md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to La Fermata De Gasperi
          </motion.h2>

          <motion.div
            className="mt-4 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-16 bg-[#C8A96E]/40" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#C8A96E] bg-transparent" />
            <div className="h-px w-16 bg-[#C8A96E]/40" />
          </motion.div>

          <motion.p
            className="mt-8 font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/80 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            At our place, you can enjoy pizza al tegamino and al mattone made
            with carefully selected ingredients, plain and stuffed farinata, and
            a selection of cold dishes for every occasion. Whether you&apos;re
            looking for a quick lunch break, a dinner with friends, or the
            pleasure of a great pizza, you&apos;ll find authentic flavours and a
            warm, familiar atmosphere. Open 7 days a week, for lunch and dinner,
            we also offer takeaway and home delivery, so you can enjoy our
            specialties wherever you prefer. We look forward to welcoming you at
            La Fermata De Gasperi 43, where every guest is treated like family.
          </motion.p>
        </div>
      </section>

      {/* 3. Menu Preview + Hours */}
      <section className="bg-[#FAF6F0] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Menu preview card */}
            <motion.div
              className="rounded-2xl border border-[#C8A96E]/20 bg-[#FFFDF9] p-8 shadow-sm md:p-10"
              variants={fadeUpVariants}
            >
              <h3 className="mb-6 font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wider text-[#2C2420] md:text-2xl">
                Menu
              </h3>

              <div className="space-y-5">
                {menuPreviewItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-4 border-b border-[#C8A96E]/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <p className="font-[family-name:var(--font-playfair)] text-base font-semibold text-[#2C2420]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 font-[family-name:var(--font-dm-sans)] text-sm text-[#7A7068]">
                        {item.desc}
                      </p>
                    </div>
                    <p className="shrink-0 font-[family-name:var(--font-dm-sans)] text-sm font-medium text-[#B85C38]">
                      &euro;{item.price}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/en/menu"
                className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-sm font-medium tracking-wide text-[#B85C38] transition-colors hover:text-[#9A4D2F]"
              >
                View Full Menu
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Hours card */}
            <motion.div variants={fadeUpVariants}>
              <HoursTable />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Photo Gallery Strip */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h3
            className="mb-10 text-center font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wider text-[#2C2420] md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Gallery
          </motion.h3>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl bg-[#FAF0E4]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: item.id * 0.06 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="scrollbar-hide flex gap-4 overflow-x-auto md:hidden">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative aspect-square w-64 shrink-0 cursor-pointer overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: item.id * 0.08 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="256px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section className="bg-[#FAF6F0] py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h3
            className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-wider text-[#2C2420] md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What People Say
          </motion.h3>

          <motion.div
            className="mt-4 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-16 bg-[#C8A96E]/40" />
            <div className="h-2 w-2 rotate-45 border border-[#C8A96E] bg-transparent" />
            <div className="h-px w-16 bg-[#C8A96E]/40" />
          </motion.div>

          {/* Star rating */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                size={28}
                className="fill-[#C8A96E] text-[#C8A96E]"
              />
            ))}
            <div className="relative">
              <Star size={28} className="text-[#C8A96E]/30" />
              <div className="absolute inset-0 overflow-hidden" style={{ width: "20%" }}>
                <Star size={28} className="fill-[#C8A96E] text-[#C8A96E]" />
              </div>
            </div>
            <span className="ml-3 font-[family-name:var(--font-dm-sans)] text-lg font-semibold text-[#2C2420]">
              4.1
            </span>
          </motion.div>

          {/* Review buttons */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CTAButton variant="primary" href="https://www.google.com/maps/place/La+Fermata+Degasperi/@45.0551854,7.6566919,17z/data=!4m8!3m7!1s0x47886d4a5b6198ef:0xd1dea94bef706645!8m2!3d45.0551854!4d7.6592668!9m1!1b1!16s%2Fg%2F11h0gzkw61">
              <ExternalLink size={16} className="mr-2" />
              Read Reviews on Google
            </CTAButton>
            <CTAButton variant="secondary" href="https://www.tripadvisor.com/Restaurant_Review-g187855-d16841657-Reviews-La_Fermata-Turin_Province_of_Turin_Piedmont.html">
              <ExternalLink size={16} className="mr-2" />
              Find Us on TripAdvisor
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
