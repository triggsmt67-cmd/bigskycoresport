import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const CommunityFeature = () => {
    return (
        <section className="bg-brand-black py-24 lg:py-48 relative overflow-hidden border-t border-white/5 text-white">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 w-full">
                    
                    {/* Community Storytelling */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-12 order-2 lg:order-1 relative z-20">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange flex items-center gap-4">
                                <div className="w-8 h-px bg-brand-orange/50" />
                                Our Culture
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight">
                                More than just <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">a gym.</span>
                            </h2>
                        </motion.div>
                        <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.8, delay: 0.1 }}
                             viewport={{ once: true }}
                             className="flex flex-col gap-8 max-w-xl pl-8 border-l-2 border-brand-orange/20 relative"
                        >
                             <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-brand-orange to-transparent -ml-[2px]" />
                             <p className="text-white/60 text-base md:text-lg font-normal leading-relaxed tracking-tight group-hover:text-white/80 transition-colors duration-500">
                                At Big Sky Coresport, we are a family of athletes, dreamers, and achievers committed to excellence in every movement. Our community is our greatest strength.
                             </p>
                             <div className="flex flex-col gap-4 mt-6 w-fit cursor-pointer group">
                                <span className="text-brand-orange font-mono text-[10px] tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
                                    Join the community
                                </span>
                                <div className="h-px w-full bg-white/10 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full w-4 bg-brand-orange group-hover:w-full transition-all duration-700 ease-out" />
                                </div>
                             </div>
                        </motion.div>
                    </div>

                    {/* Interactive Community Imagery */}
                    <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
                        <motion.div 
                             initial={{ opacity: 0, scale: 0.98 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.8, ease: "easeOut" }}
                             viewport={{ once: true }}
                             className="aspect-[4/3] bg-white/5 overflow-hidden relative rounded-xl border border-white/5 shadow-2xl group cursor-pointer"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop" 
                                alt="Athletes together" 
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transform group-hover:scale-110 transition-transform duration-[1500ms] grayscale-[0.8] group-hover:grayscale-[0.2] brightness-105"
                            />
                            {/* Color Overlay */}
                            <div className="absolute inset-0 bg-brand-orange mix-blend-color opacity-0 group-hover:opacity-[0.15] transition-opacity duration-1000 z-10" />
                            
                            {/* Animated Particle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 z-20 border border-white/20">
                                <svg className="w-6 h-6 text-brand-orange transition-transform duration-500 delay-100 transform -translate-x-1 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </motion.div>
                        
                        {/* Decorative Background Glows */}
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-brand-orange to-red-600 blur-[100px] -z-10 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-orange/10 border border-brand-orange/20 -z-10 rounded-xl transform -rotate-12 transition-all duration-1000 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityFeature;
