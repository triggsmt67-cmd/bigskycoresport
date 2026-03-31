import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const questions = [
        {
            id: 1,
            question: "What is the first step to joining?",
            answer: "The first step is booking a complimentary discovery call through our website. We'll discuss your goals, experience level, and how we can best support your journey."
        },
        {
            id: 2,
            question: "Do I need prior experience?",
            answer: "No. We welcome all fitness levels. Our expert coaches will assess your current movement patterns and design a personalized roadmap that meets you where you are."
        },
        {
            id: 3,
            question: "What are your membership options?",
            answer: "We offer several membership tiers designed to provide the right level of support and accountability for your needs. We'll review these options during your initial assessment."
        },
        {
            id: 4,
            question: "Do you offer personal training?",
            answer: "Yes. All of our programs include a high level of coaching support, and we offer dedicated 1-on-1 personal training for those who want focused attention on specific goals."
        }
    ];

    return (
        <section className="bg-white py-24 lg:py-48 relative overflow-hidden">
             {/* Subtle Map Underlay */}
             <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-brand-orange/[0.015] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-brand-black w-full max-w-7xl">
                 {/* Header Section */}
                 <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20 md:mb-32 w-full border-b border-brand-orange/20 pb-16">
                    <div className="max-w-xl">
                        <span className="font-mono text-[10px] tracking-widest uppercase text-brand-orange mb-6 flex items-center gap-4">
                            <div className="w-8 h-px bg-brand-orange/50" />
                            FAQ
                        </span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-brand-black leading-[1.05] tracking-tight"
                        >
                            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500 italic font-normal pr-2">questions.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Accordion Container */}
                <div className="flex flex-col w-full max-w-5xl">
                    {questions.map((q) => (
                        <div 
                            key={q.id}
                            className={`group border-b py-8 lg:py-12 transition-colors duration-500 cursor-pointer ${openId === q.id ? 'border-brand-orange/30' : 'border-black/5 hover:border-brand-orange/20'}`}
                            onClick={() => setOpenId(openId === q.id ? null : q.id)}
                        >
                            {/* Question Header */}
                            <div className="flex items-center justify-between gap-6 pr-4 lg:pr-8 relative">
                                <h3 className={`text-xl md:text-2xl lg:text-3xl font-display font-medium leading-tight tracking-tight transition-colors duration-500 transform ${openId === q.id ? 'text-brand-orange translate-x-2' : 'text-brand-black/80 group-hover:text-brand-black group-hover:translate-x-1'}`}>
                                    {q.question}
                                </h3>
                                <div className={`absolute right-0 flex flex-col items-center justify-center w-8 h-8 rounded-full border flex-shrink-0 transition-all duration-500 overflow-hidden ${openId === q.id ? 'border-brand-orange/20 bg-brand-orange/10 scale-110 shadow-[0_5px_15px_-5px_rgba(255,107,0,0.5)]' : 'border-black/10 text-black/40 group-hover:border-brand-orange/30 group-hover:text-brand-orange'}`}>
                                    <motion.div 
                                        initial={false}
                                        animate={{ rotate: openId === q.id ? 180 : 0, scale: openId === q.id ? 1.1 : 1 }}
                                        transition={{ duration: 0.5, ease: "backOut" }}
                                        className="absolute inset-0 flex items-center justify-center text-brand-orange"
                                    >
                                        {openId === q.id ? <Minus size={14} /> : <Plus size={14} />}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Answer Item */}
                            <AnimatePresence>
                                {openId === q.id && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0, scale: 0.98 }}
                                        animate={{ height: "auto", opacity: 1, scale: 1 }}
                                        exit={{ height: 0, opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className="overflow-hidden pl-2 lg:pl-4"
                                    >
                                        <div className="pt-8 text-black/60 text-base md:text-lg font-normal tracking-tight leading-relaxed max-w-3xl border-l-2 border-brand-orange/20 pl-6 mt-4">
                                            {q.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
