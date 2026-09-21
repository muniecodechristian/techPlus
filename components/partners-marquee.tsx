"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { id: 1, src: "/partners/1.jpg", alt: "Partenaire 1" },
  { id: 2, src: "/partners/2.jpg", alt: "Partenaire 2" },
  { id: 3, src: "/partners/3.jpg", alt: "Partenaire 3" },
  { id: 4, src: "/partners/4.jpg", alt: "Partenaire 4" },
];

export function PartnersMarquee() {
  return (
    <section className="bg-white py-14 border-b border-[#571426]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#d7263d]">
          Ils nous font confiance
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-[#38131b] sm:text-3xl">
          Nos partenaires de référence
        </h2>
      </div>

      <div className="relative flex w-full flex-col justify-center overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <motion.div
          className="flex w-max items-center gap-12 sm:gap-20"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* We duplicate the array to create a seamless infinite scroll effect */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0"
            >
              <div className="relative h-20 w-32 sm:h-24 sm:w-40 flex items-center justify-center bg-gray-50/50 rounded-xl border border-gray-100 overflow-hidden p-4">
                <span className="absolute text-[10px] text-gray-400 font-bold opacity-50 group-hover:opacity-0 transition-opacity">
                  {partner.alt}
                </span>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain p-2 z-10 opacity-80 group-hover:opacity-100 transition-opacity bg-white"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
