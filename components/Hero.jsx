import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const yValue = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacityValue = useTransform(scrollY, [0, 600], [1, 0]);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative w-full h-[100svh] min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-black">
            {/* Cinematic Background via Next.js Image */}
            <motion.div 
                className="absolute inset-0 w-full h-[120%] z-0"
                style={{ y: yValue, scale: isLoaded ? 1 : 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image 
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2670&auto=format&fit=crop"
                    alt="Elite training facility"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Dynamic Overlay that lowers opacity on entrance */}
            <motion.div 
                initial={{ opacity: 0.9 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30 z-10" 
            />
            
            {/* Subtle Brand Color Wash */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute inset-0 bg-brand-orange mix-blend-color z-10"
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20">
                <div className="max-w-5xl flex flex-col items-start text-left">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="w-2 h-2 rounded-full bg-brand-orange relative">
                            <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-75" />
                        </div>
                        <span className="text-white/80 font-mono text-[11px] tracking-[0.2em] uppercase group-hover:text-brand-orange transition-colors duration-300">
                            GREAT FALLS, MONTANA EST. 2024
                        </span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-white text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[1.05] tracking-tight mb-8 drop-shadow-lg"
                    >
                        Master the science of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500 italic pr-2">
                            human performance.
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/80 text-lg md:text-xl font-normal max-w-2xl mb-12 leading-relaxed"
                    >
                        Join our team of expert coaches to unlock your full potential and achieve your most ambitious fitness goals in a facility designed for maximum results.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                    >
                        <button className="relative group overflow-hidden bg-brand-orange text-white font-semibold py-4 px-8 text-sm uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center rounded-sm">
                            <span className="relative z-10">Start Today</span>
                            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
                            <span className="absolute inset-0 z-10 flex items-center justify-center text-brand-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest text-sm font-semibold">
                                Start Today
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
            
            {/* Scroll Indicator Micro-interaction */}
            <motion.div 
                style={{ opacity: opacityValue }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-30 flex flex-col items-center gap-4"
            >
                <span className="text-white/60 font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="w-px h-16 bg-white/20 relative overflow-hidden">
                    <motion.div 
                        initial={{ y: "-100%" }}
                        animate={{ y: "200%" }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-brand-orange"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
