"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ingredients = [
  { name: "Bird Eye Chili", desc: "For that intense, sharp Kerala heat.", x: "10%", y: "20%" },
  { name: "Curry Leaves", desc: "The aromatic soul of every fry.", x: "70%", y: "15%" },
  { name: "Virgin Coconut Oil", desc: "The secret to our crispy texture.", x: "40%", y: "60%" },
  { name: "Shallots", desc: "Sweetness that balances the spice.", x: "15%", y: "75%" },
  { name: "Stone Ground Ginger", desc: "Pure, raw, and earthy flavor.", x: "80%", y: "80%" },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-[#050505] min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-8xl md:text-[12rem] font-bold font-outfit tracking-tighter text-white/5 uppercase select-none"
        >
          INGREDIENTS
        </motion.h2>

        <div className="absolute inset-0 pointer-events-none">
          {ingredients.map((item, i) => (
            <IngredientPin key={item.name} item={item} index={i} />
          ))}
        </div>

        <div className="relative mt-[-100px]">
          <h3 className="text-5xl font-bold font-outfit mb-6">Cinematic Preparation</h3>
          <p className="text-white/40 max-w-2xl mx-auto text-xl font-inter">
            Watch as each ingredient takes its place in a delicate dance of flavors. 
            No shortcuts, no compromise. Just pure art.
          </p>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-[2px] animate-pulse" />
          <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-red-500 rounded-full blur-[4px] animate-bounce" />
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full blur-[1px]" />
      </div>
    </section>
  );
};

const IngredientPin = ({ item, index }: any) => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            style={{ left: item.x, top: item.y }}
            className="absolute p-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl max-w-[200px] pointer-events-auto cursor-pointer hover:bg-white/10 transition-all group"
        >
            <div className="w-2 h-2 bg-white rounded-full mb-2 group-hover:scale-150 transition-transform" />
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">{item.name}</h4>
            <p className="text-[10px] text-white/40 mt-1 uppercase leading-tight">{item.desc}</p>
        </motion.div>
    );
};
