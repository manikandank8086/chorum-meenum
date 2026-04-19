"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-7xl font-bold font-outfit tracking-tighter mb-12 uppercase leading-none">Find Us</h2>
            <div className="space-y-12">
              <ContactItem 
                icon={<MapPin />} 
                title="Location" 
                detail="Beach Road, Fort Kochi, Kerala - 682001" 
              />
              <ContactItem 
                icon={<Phone />} 
                title="Phone" 
                detail="+91 98765 43210" 
              />
              <ContactItem 
                icon={<Clock />} 
                title="Opening Hours" 
                detail="Mon - Sun: 11:30 AM - 10:30 PM" 
              />
            </div>
            
            <motion.a 
                href="https://wa.me/919876543210"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-16 inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-[#25D366]/20"
            >
              <MessageCircle size={24} />
              Book via WhatsApp
            </motion.a>
          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden border border-white/10 grayscale">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31434.93175114704!2d76.241558!3d9.9672615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0d5bfa78f5%3A0x6b4fb0f46f49e4d!2sFort%20Kochi%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <footer className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm uppercase tracking-widest font-bold">
            <div>© 2026 CHORUM MEENUM. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-12">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
        </footer>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, detail }: any) => {
    return (
        <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 mb-2">
                {icon}
            </div>
            <div>
                <h4 className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">{title}</h4>
                <p className="text-2xl font-bold">{detail}</p>
            </div>
        </div>
    );
};
