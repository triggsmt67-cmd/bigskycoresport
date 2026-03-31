import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const Location = () => {
    return (
        <section className="bg-white py-24 lg:py-48 relative overflow-hidden">
             {/* Map Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.02] select-none pointer-events-none">
                <svg viewBox="0 0 1000 1000" className="w-[150%] h-[150%] transform -translate-x-1/4 -translate-y-1/4">
                    <path d="M0 0h1000v1000H0z" fill="none"/>
                    <path d="M100 0v1000M200 0v1000M300 0v1000M400 0v1000M500 0v1000M600 0v1000M700 0v1000M800 0v1000M900 0v1000M0 100h1000M0 200h1000M0 300h1000M0 400h1000M0 500h1000M0 600h1000M0 700h1000M0 800h1000M0 900h1000" stroke="var(--color-brand-orange)" strokeWidth="0.5"/>
                </svg>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-brand-black w-full max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 w-full">
                    {/* Location Info */}
                    <div className="flex flex-col gap-16 relative">
                        <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange via-transparent to-transparent opacity-20 hidden lg:block" />

                        <div className="flex flex-col gap-6">
                            <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange mb-2 flex items-center gap-4">
                                <div className="w-8 h-px bg-brand-orange/50" />
                                Location
                            </span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight"
                            >
                                Visit the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">lab.</span>
                            </motion.h2>
                            <p className="text-black/60 text-base md:text-lg font-normal tracking-tight mt-6 max-w-md">
                                Our elite training facility is ready for you. Come see the difference expert coaching and pro-grade equipment make.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex flex-col gap-4 group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                                        <MapPin size={16} className="text-brand-orange" />
                                    </div>
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange">Address</span>
                                </div>
                                <div className="text-brand-black/80 text-sm md:text-base font-normal tracking-tight leading-relaxed transition-colors duration-300 group-hover:text-brand-black">
                                    123 Main St,<br/> Great Falls, MT 59401
                                </div>
                            </motion.div>

                            <motion.div 
                                 initial={{ opacity: 0, y: 10 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6, delay: 0.2 }}
                                 className="flex flex-col gap-4 group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                                        <Clock size={16} className="text-brand-orange" />
                                    </div>
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange">Hours</span>
                                </div>
                                <div className="text-brand-black/80 text-sm md:text-base font-normal tracking-tight leading-relaxed transition-colors duration-300 group-hover:text-brand-black">
                                    Mon - Fri: 5 AM - 9 PM <br/> Sat: 8 AM - 4 PM
                                </div>
                            </motion.div>

                             <motion.div 
                                 initial={{ opacity: 0, y: 10 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.6, delay: 0.3 }}
                                 className="flex flex-col gap-4 group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                                        <Phone size={16} className="text-brand-orange" />
                                    </div>
                                    <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange">Contact</span>
                                </div>
                                <div className="text-brand-black/80 text-sm md:text-base font-normal tracking-tight leading-relaxed transition-colors duration-300 group-hover:text-brand-black">
                                    (406) 123-4567 <br/> hello@coresportmt.com
                                </div>
                            </motion.div>
                             
                            <div className="flex items-center mt-6">
                                <button className="group relative overflow-hidden bg-brand-black text-white font-semibold py-4 px-8 rounded-full text-xs uppercase tracking-wider transition-all duration-300 w-fit">
                                    <span className="relative z-10 flex items-center gap-2">Get Directions <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                                    <div className="absolute inset-0 bg-brand-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stylized Map View */}
                    <motion.div 
                         initial={{ opacity: 0, scale: 0.98 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.8, ease: "easeOut" }}
                         viewport={{ once: true }}
                         className="aspect-square bg-white border border-brand-orange/10 relative rounded-2xl overflow-hidden group shadow-2xl"
                    >
                        {/* Map Image using Next.js Image */}
                        <Image 
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                            alt="Map relative" 
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover grayscale transition-all duration-[2000ms] group-hover:scale-110 brightness-110 contrast-125 opacity-70 group-hover:opacity-90" 
                        />
                         
                        <div className="absolute inset-0 bg-brand-orange mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-1000 z-10" />

                        {/* Elegant Map PIN */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                            <motion.div 
                                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-16 h-16 bg-brand-orange rounded-full pointer-events-none -z-10"
                            />
                            <div className="relative transform transition-transform duration-500 bg-white p-4 rounded-full shadow-[0_10px_40px_-15px_rgba(255,107,0,0.5)] border border-brand-orange/20 cursor-pointer group hover:-translate-y-2">
                                <MapPin size={24} className="text-brand-orange fill-brand-orange/20 transition-all duration-300 group-hover:fill-brand-orange" strokeWidth={1.5} />
                            </div>
                            <span className="text-brand-black mt-4 font-mono font-medium tracking-widest uppercase text-[10px] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-black/10 shadow-lg -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Coresport
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
