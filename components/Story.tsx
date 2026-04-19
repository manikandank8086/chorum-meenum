"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const Story = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="story" className="relative py-32 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-7xl font-bold font-outfit tracking-tighter mb-12 uppercase leading-none">
              The Roots of <br />
              <span className="text-white/40">Chorum Meenum</span>
            </h2>
            <div className="space-y-8 text-xl text-white/60 font-inter leading-relaxed">
              <p>
                Our story begins in the backwaters of Kerala, where the aroma of freshly fried fish and steaming matta rice 
                defines the essence of home. Founded on generations of culinary secrets, Chorum Meenum is more than just a 
                restaurant; it's a tribute to the coastal traditions of South India.
              </p>
              <p>
                Every spice is hand-picked, every masala is stone-ground, and every fish is sourced daily from local fishermen 
                to ensure that what ends up on your banana leaf is nothing short of authentic.
              </p>
              <button className="px-10 py-5 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-sm font-bold">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: yParallax }}
            className="relative aspect-[4/5] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
          >
            <Image 
              src="/kitchen.png" 
              alt="Traditional Kitchen" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-white opacity-[0.02] blur-[150px] -translate-y-1/2 pointer-events-none" />
    </section>
  );
};
