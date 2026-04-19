"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
  {
    category: "Fish Fry Specials",
    items: [
      { name: "Karimeen Pollichathu", description: "Pearl spot fish marinated in spicy masala and grilled in banana leaf.", price: "₹450", image: "/fish_fry.png" },
      { name: "King Fish Fry", description: "Vanjaram slices deep fried with Kerala specialty spices.", price: "₹380", image: "/fish_fry.png" },
    ]
  },
  {
    category: "Meals (Choru + Meenum)",
    items: [
      { name: "Traditional Fish Curry Meals", description: "Nadan choru served with fish curry, thoran, and pickles.", price: "₹250", image: "/meals.png" },
      { name: "Special Seafood Platter", description: "Assorted seafood delicacies with steam rice.", price: "₹550", image: "/meals.png" },
    ]
  },
  {
    category: "Signature Items",
    items: [
      { name: "Chemmeen Ularthiyathu", description: "Slow roasted prawns with coconut chips and curry leaves.", price: "₹420", image: "/prawns.png" },
      { name: "Kallemmakkaya Roast", description: "Mussels stir-fry with spicy Kerala masala.", price: "₹350", image: "/prawns.png" },
    ]
  }
];

export const Menu = () => {
  return (
    <section id="menu" className="py-32 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-7xl font-bold font-outfit tracking-tighter mb-4">OUR MENU</h2>
          <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-sm">Taste the soul of Kerala through our curated seafood delights.</p>
        </motion.div>

        {menuItems.map((section, sIndex) => (
          <div key={section.category} className="mb-24">
            <h3 className="text-2xl font-bold font-outfit text-white/60 mb-12 uppercase tracking-[0.3em]">{section.category}</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {section.items.map((item, iIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: iIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: iIndex * 0.1 }}
                  className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-bold">{item.name}</h4>
                        <span className="text-xl font-medium text-white/40">{item.price}</span>
                      </div>
                      <p className="text-white/40 leading-relaxed font-inter">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
