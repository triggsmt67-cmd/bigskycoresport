import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: "Class Scheduling",
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop",
            cta: "Explore Classes",
        },
        {
            title: "Nutrition Programming",
            image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=2574&auto=format&fit=crop",
            cta: "Learn More",
        },
        {
            title: "Gym Amenities",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
            cta: "Take a Tour",
        }
    ];

    return (
        <section className="bg-white py-24 lg:py-48 relative overflow-hidden">
             {/* Subtle Map Underlay */}
             <div className="absolute inset-0 bg-brand-orange/[0.015] pointer-events-none" />
             
            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-brand-black w-full max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32 w-full border-b border-brand-orange/20 pb-16">
                    <div className="max-w-xl">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange mb-6 flex items-center gap-4">
                            <div className="w-8 h-px bg-brand-orange/50" />
                            Core Services
                        </span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-brand-black leading-[1.05] tracking-tight"
                        >
                            Everything you <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">need.</span>
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-md border-l-2 border-brand-orange/20 pl-6 lg:ml-12"
                    >
                         <p className="text-black/60 text-base md:text-lg font-normal tracking-tight leading-relaxed">
                            We provide the tools, the expertise, and the community. You provide the effort. Together, we achieve the impossible.
                         </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full group/container">
                    {services.map((service, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 * idx, type: "spring", stiffness: 50 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative aspect-[3/4] md:aspect-[4/5] bg-brand-black overflow-hidden rounded-xl w-full cursor-pointer hover:z-20 transform transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl md:hover:-translate-y-8"
                        >
                            <Image 
                                src={service.image} 
                                alt={service.title} 
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-[1500ms] group-hover:scale-110 grayscale-[0.9] brightness-[0.6] group-hover:grayscale-[0.3] group-hover:brightness-[0.8]"
                            />
                            
                            {/* Overlay Color Burn */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10 transition-opacity duration-700 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-brand-orange mix-blend-color z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
                            
                            {/* Text content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <motion.div 
                                    className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out"
                                >
                                    <h3 className="text-2xl lg:text-3xl font-display font-medium text-white tracking-tight mb-4 border-l-2 border-transparent group-hover:border-brand-orange group-hover:pl-4 transition-all duration-500">
                                        {service.title}
                                    </h3>
                                    
                                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                        <div className="h-px w-8 bg-brand-orange" />
                                        <button className="flex items-center gap-2 text-brand-orange font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-white">
                                            {service.cta}
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-500 text-brand-orange group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
