import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Johnson",
            role: "Athlete / Member",
            text: "Big Sky Coresport has completely transformed my approach to fitness. The coaching is world-class and the community pushes you to be your best every single day. There is no other facility like it in Great Falls.",
            stars: 5,
        },
        {
            name: "Michael Chen",
            role: "Professional Athlete",
            text: "As a professional athlete, I need a facility that can handle my training volume and complexity. The equipment and expertise at Coresport are unmatched. It is truly the gold standard.",
            stars: 5,
        },
        {
            name: "Emma Davis",
            role: "Founder / Member",
            text: "I was looking for a supportive community and expert guidance. I found both here. The results I've seen in just 6 months are incredible. This gym is more than just a place to workout; it's a home.",
            stars: 5,
        }
    ];

    return (
        <section className="bg-brand-black py-24 lg:py-48 relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/[0.02] to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white w-full max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 md:mb-32 w-full border-b border-brand-orange/20 pb-16 relative">
                    <div className="max-w-2xl">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange mb-6 flex items-center gap-4">
                            <div className="w-8 h-px bg-brand-orange/50" />
                            Testimonials
                        </span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight"
                        >
                            Trusted by <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">the elite.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Testimonial List */}
                <div className="flex flex-col gap-12 md:gap-16 w-full max-w-5xl">
                    {reviews.map((rev, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row items-start gap-8 md:gap-20 border-b border-white/5 pb-16 hover:border-brand-orange/50 transition-colors duration-500 group cursor-pointer"
                        >
                            {/* Review Content */}
                            <div className="w-full md:w-3/4 flex flex-col gap-6 relative">
                                <motion.div 
                                    className="absolute -top-4 -left-8 md:-left-12 text-white/5 pointer-events-none select-none group-hover:text-brand-orange/10 group-hover:-translate-x-2 transition-all duration-700"
                                >
                                    <Quote size={64} strokeWidth={1} />
                                </motion.div>
                                <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal tracking-tight leading-relaxed max-w-4xl text-white/80 group-hover:text-white transition-colors relative z-10 group-hover:translate-x-2 duration-500">
                                    "{rev.text}"
                                </blockquote>
                            </div>

                            {/* Reviewer Details */}
                            <div className="w-full md:w-1/4 flex flex-col gap-3 md:mt-0 mt-4 relative z-10 transform md:group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-1 group-hover:gap-1.5 transition-all duration-300">
                                    {[...Array(rev.stars)].map((_, i) => (
                                        <Star key={i} size={14} className="text-white/40 fill-white/40 group-hover:text-brand-orange group-hover:fill-brand-orange transition-colors duration-300 transform scale-90 group-hover:scale-100" />
                                    ))}
                                </div>
                                <div className="text-brand-orange font-display font-medium text-xl tracking-tight mt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {rev.name}
                                </div>
                                <div className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em]">
                                    {rev.role}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
