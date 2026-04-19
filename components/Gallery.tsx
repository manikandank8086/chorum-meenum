"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/fish_fry.png",
  "/meals.png",
  "/prawns.png",
  "/kitchen.png",
  "/fish_fry.png",
  "/meals.png",
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-7xl font-bold font-outfit tracking-tighter uppercase leading-none">The Visual <br />Feast</h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold leading-loose">
              Captured moments <br />of Kerala soul
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
            >
              <Image 
                src={src} 
                alt={`Gallery ${i}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-6 py-2 border border-white rounded-full text-xs uppercase tracking-widest">View details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
