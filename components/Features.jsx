import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Dumbbell } from 'lucide-react';

const Features = () => {
    const values = [
        {
            icon: Target,
            title: "Result-First Culture",
            description: "We don't just work out; we train with purpose. Every movement is a calculated step towards your peak potential.",
        },
        {
            icon: Users,
            title: "Elite Community",
            description: "Join a high-performance environment of athletes, professionals, and achievers who push you to be better every day.",
        },
        {
            icon: Dumbbell,
            title: "Pro-Grade Facility",
            description: "Equipped with the finest tools in the industry to support your journey towards athletic excellence.",
        }
    ];

    return (
        <section className="bg-brand-black py-24 lg:py-40 relative overflow-hidden border-t border-white/5">
            {/* Subtle Gradient Glow Map */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/[0.03] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-28 w-full border-b border-brand-orange/20 pb-16 relative">
                    <div className="absolute bottom-0 left-0 w-32 h-px bg-brand-orange" />
                    <div className="max-w-2xl">
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.05] tracking-tight"
                        >
                            The Standard of <br/>
                            <span className="text-brand-orange italic font-normal">Excellence.</span>
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-md"
                    >
                         <p className="text-white/60 text-base md:text-lg font-normal leading-relaxed">
                            Experience a higher level of training that prioritizes science, community, and lasting results for every member.
                         </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full relative">
                    {/* Background Connection Line */}
                    <div className="hidden md:block absolute top-[28px] left-12 right-12 h-px bg-white/5 z-0" />
                    
                    {values.map((val, idx) => (
                        <motion.div 
                             key={idx}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.6, delay: 0.1 * idx }}
                             viewport={{ once: true }}
                             className="flex flex-col gap-8 group relative z-10"
                        >
                            <div className="relative w-16 h-16 bg-brand-black border border-white/10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/50 overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-15px_rgba(255,107,0,0.5)]">
                                <motion.div 
                                    className="absolute inset-0 bg-brand-orange blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                />
                                <val.icon size={28} className="text-white/60 group-hover:text-brand-orange transition-colors duration-500 relative z-10" strokeWidth={1.5} />
                            </div>
                            
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-display font-medium text-white tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                                    {val.title}
                                </h3>
                                <p className="text-white/50 text-base leading-relaxed">
                                    {val.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
