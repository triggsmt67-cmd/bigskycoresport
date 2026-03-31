import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
                scrolled ? 'bg-brand-black/95 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-8'
            }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between w-full max-w-7xl">
                {/* Minimalist Brand Identity */}
                <Link href="/" className="flex flex-col group py-2">
                    <span className="text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-none transition-colors group-hover:text-white/80">
                        Big Sky <span className="italic font-normal">Coresport.</span>
                    </span>
                    <span className="text-[8px] font-mono text-white/40 tracking-[0.3em] uppercase mt-2">
                        Great Falls
                    </span>
                </Link>

                {/* Single CTA - Clean */}
                <div className="flex items-center gap-8 md:gap-10">
                    <button className="hidden sm:block text-white/60 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors duration-300">
                        Join Us
                    </button>
                    
                    {/* Minimal Burger */}
                    <div className="flex flex-col gap-2 cursor-pointer group px-1 py-3 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="w-6 h-px bg-white group-hover:bg-white/80 transition-colors duration-300" />
                        <div className="w-4 h-px bg-white group-hover:bg-white/80 transition-colors duration-300 ml-auto" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
