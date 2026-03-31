import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const GlobalScrollLine = () => {
    const { scrollYProgress } = useScroll();

    // The glowing streak length maps down as you scroll
    const heightValue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="fixed top-0 bottom-0 left-4 lg:left-6 z-50 pointer-events-none mix-blend-difference hidden md:block">
            {/* The Track */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />
            
            {/* The Scrolling Orange Progress */}
            <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-brand-orange shadow-[0_0_20px_2px_rgba(0,64,241,1)]"
                style={{ height: heightValue }}
            />
            
            {/* The Continuous Pulsing Tip at the exact scroll point */}
            <motion.div 
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                style={{ top: heightValue }}
            >
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full relative">
                    <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-70" />
                </div>
            </motion.div>
        </div>
    );
};

export default GlobalScrollLine;
