import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Book your intro",
            description: "Schedule a complimentary discovery call to discuss your goals and current fitness level with one of our expert coaches.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop"
        },
        {
            number: "02",
            title: "Get assessed",
            description: "Meet with your coach for a comprehensive movement assessment and personalized roadmap designed specifically for you.",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop"
        },
        {
            number: "03",
            title: "Start training",
            description: "Join our supportive community and follow your tailored program with consistent guidance to reach New Heights.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="bg-brand-black py-24 lg:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white w-full max-w-7xl">
                <div className="flex flex-col mb-32 md:mb-40">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange mb-6 flex items-center gap-4">
                        <div className="w-12 h-px bg-brand-orange/50" />
                        Our Process
                    </span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight text-white mb-6 max-w-xl"
                    >
                        Getting started is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">the key.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-32 lg:gap-40 w-full relative">
                    {/* Vertical Progress Line */}
                    <div className="absolute top-[10%] bottom-[10%] left-4 lg:left-1/2 w-px bg-white/5 md:-translate-x-1/2 z-0 hidden lg:block" />
                    <motion.div 
                        className="absolute top-[10%] left-4 lg:left-1/2 w-px bg-gradient-to-b from-brand-orange via-brand-orange/50 to-transparent md:-translate-x-1/2 z-0 hidden lg:block" 
                        initial={{ height: "0%" }}
                        whileInView={{ height: "80%" }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                        viewport={{ margin: "-100px", once: true }}
                    />

                    {steps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Image container with Next Image fixed layout */}
                            <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/5 shadow-2xl">
                                 <Image 
                                    src={step.image} 
                                    alt={step.title} 
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover grayscale-[0.8] brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-105 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
                                 />
                                 {/* Hover Glow Map */}
                                 <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/10 transition-colors duration-1000 mix-blend-overlay z-10 pointer-events-none" />
                            </div>

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-8 relative p-6 lg:p-12">
                                <div className="absolute top-0 right-0 lg:-right-10 lg:top-[-2rem] text-brand-orange/5 font-display font-medium text-[12rem] lg:text-[16rem] leading-none pointer-events-none select-none z-0 transform group-hover:text-brand-orange/10 transition-colors duration-1000">
                                    {step.number}
                                </div>
                                
                                <div className="flex items-center gap-6 relative z-10">
                                    <span className="text-brand-orange font-mono text-2xl font-light">{step.number}</span>
                                    <div className="h-px w-16 bg-brand-orange/20 relative overflow-hidden group-hover:w-24 transition-all duration-700">
                                         <div className="absolute top-0 left-0 w-8 h-full bg-brand-orange transform -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 max-w-md relative z-10 transform group-hover:translate-x-2 transition-transform duration-700">
                                    <h3 className="text-3xl lg:text-4xl font-display font-medium leading-tight tracking-tight text-white group-hover:text-brand-orange transition-colors duration-500">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-lg font-normal leading-relaxed tracking-tight group-hover:text-white/80 transition-colors duration-500">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
