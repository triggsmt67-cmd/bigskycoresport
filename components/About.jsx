import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="bg-white py-24 lg:py-48 relative overflow-hidden text-brand-black">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 w-full">
                    
                    {/* Visual Media Section using next/image */}
                    <div className="w-full lg:w-5/12 relative group order-2 lg:order-1 h-[600px] rounded-xl">
                        <motion.div 
                             initial={{ opacity: 0, scale: 0.98 }}
                             whileInView={{ opacity: 1, scale: 1 }}
                             transition={{ duration: 0.8, ease: "easeOut" }}
                             viewport={{ once: true }}
                             className="w-full h-full relative overflow-hidden rounded-xl group"
                        >
                            <Image 
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop" 
                                alt="Athlete training" 
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105 grayscale-[0.5] brightness-105"
                            />
                            <div className="absolute inset-0 bg-brand-orange mix-blend-color opacity-0 group-hover:opacity-10 transition-opacity duration-1000 z-10" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl z-20 pointer-events-none" />
                        </motion.div>
                        {/* Interactive Accent Block */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-orange/10 border border-brand-orange/30 -z-10 rounded-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000" />
                        <div className="absolute top-12 -left-12 w-24 h-24 bg-gradient-to-br from-brand-orange to-red-500 blur-[80px] -z-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>

                    {/* Storytelling Text Content */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-12 order-1 lg:order-2 relative z-20">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            <div className="inline-flex items-center gap-4">
                                <div className="h-2 w-2 bg-brand-orange rounded-full animate-pulse" />
                                <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange/80">Great Falls, Montana</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight">
                                Our story, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">redefined.</span>
                            </h2>
                        </motion.div>
                        
                        <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.8, delay: 0.1 }}
                             viewport={{ once: true }}
                             className="flex flex-col gap-8 max-w-2xl text-lg font-normal text-brand-black/60 leading-relaxed relative pl-8 border-l-2 border-brand-orange/30"
                        >
                             <p>
                                Born out of a passion for high-performance training and a commitment to community excellence, Big Sky Coresport is Great Falls' premier destination for those who want to push their limits and achieve lasting success.
                             </p>
                             <p className="text-brand-black/40">
                                We believe that true growth happens when you combine expert coaching, pro-grade equipment, and a supportive environment. Our mission is to provide you with everything you need to reach your peak potential, safely and effectively.
                             </p>
                             <button className="group mt-8 relative w-fit flex items-center gap-4 py-3 font-display font-semibold text-sm hover:text-brand-orange transition-colors uppercase tracking-widest text-brand-black">
                                <span className="relative z-10">Meet the Team</span>
                                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center transform group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300 ml-2">
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 text-brand-orange group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                             </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
