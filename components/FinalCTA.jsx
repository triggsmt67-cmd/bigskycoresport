import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="bg-brand-black text-white py-32 lg:py-64 relative overflow-hidden group border-t border-white/5">
            {/* Ambient Background interactions */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-video bg-gradient-to-tr from-brand-orange to-red-600 rounded-[100%] blur-[160px] opacity-10 group-hover:opacity-[0.15] transition-opacity duration-1000 rotate-12 group-hover:rotate-[20deg] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
                <div className="flex flex-col items-center text-center gap-10 max-w-3xl mx-auto w-full">
                    
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="font-mono text-[10px] tracking-widest uppercase text-brand-orange flex items-center justify-center gap-4"
                    >
                        <div className="w-8 h-px bg-brand-orange/50" />
                        Start Today
                        <div className="w-8 h-px bg-brand-orange/50" />
                    </motion.span>
                    
                    {/* Final CTA Header */}
                    <div className="flex flex-col items-center gap-4">
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-7xl lg:text-9xl font-display font-medium leading-[1.0] tracking-tight text-white mb-2 relative"
                        >
                            Do something
                            <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 italic font-normal pr-4 pb-2">today.</span>
                        </motion.h2>
                    </div>

                    {/* Final CTA Text Content */}
                    <motion.p 
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                         viewport={{ once: true }}
                         className="text-white/60 text-lg md:text-xl font-normal leading-relaxed tracking-tight max-w-2xl mt-4"
                    >
                        Take the first step towards a stronger, healthier version of yourself. Join our community and let our coaches guide you to lasting success.
                    </motion.p>

                    {/* Final CTA Button */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <button className="relative group overflow-hidden bg-brand-orange text-white font-semibold py-5 px-12 rounded-full text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] shadow-[0_10px_40px_-15px_rgba(255,107,0,0.6)] border border-brand-orange/20">
                            <span className="relative z-10 flex items-center justify-center gap-4">
                                Join Us Now
                                <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" strokeWidth={2} />
                            </span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left z-0" />
                            <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 text-brand-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider text-sm font-semibold">
                                Join Us Now
                                <ArrowRight size={18} className="transform -translate-x-2 group-hover:translate-x-2 transition-transform duration-700 delay-100" strokeWidth={2} />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
