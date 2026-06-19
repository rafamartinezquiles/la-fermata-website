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
      "La tradizione torinese nel tegamino, con bordo alto e croccante",
  },
  {
    icon: Flame,
    title: "Pizza al Mattone",
    description: "Croccante e sottile, cotta direttamente sulla pietra",
  },
  {
    icon: CookingPot,
    title: "Farinata",
    description:
      "Ricetta tradizionale con farina di ceci, semplice e genuina",
  },
  {
    icon: Truck,
    title: "Asporto e Consegna",
    description: "Gustaci dove preferisci, a casa tua o in ufficio",
  },
];

export default function ChiSiamoPageClient() {
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
          La Nostra Storia
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
              alt="Interno de La Fermata con logo e tavoli"
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
              La Fermata De Gasperi 43 nasce nel cuore di Torino, in Corso
              Alcide De Gasperi, con un sogno semplice: offrire la vera pizza
              torinese in un&apos;atmosfera accogliente e familiare.
            </motion.p>
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              La nostra specialit&agrave; &egrave; la pizza al tegamino e al
              mattone, preparata con un impasto maturato per almeno 24 ore e
              ingredienti selezionati con cura. Accanto alla pizza, proponiamo
              la tradizionale farinata di ceci, semplice o farcita, e una
              selezione di piatti della cucina italiana.
            </motion.p>
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              Aperti 7 giorni su 7, a pranzo e a cena, accogliamo ogni cliente
              come fosse a casa. Offriamo anche servizio di asporto e consegna a
              domicilio, per portare i nostri sapori direttamente da voi.
            </motion.p>
            <motion.p
              className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-[#2C2420]/90 md:text-lg"
              variants={fadeUpVariants}
            >
              Il nome &lsquo;La Fermata&rsquo; racconta la nostra filosofia: un
              luogo dove fermarsi, rallentare e gustare il piacere di un buon
              pasto in compagnia. Vi aspettiamo.
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
              Le Nostre Specialit&agrave;
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
