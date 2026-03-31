import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-white/5 py-16 lg:py-24 text-white">
            <div className="container mx-auto px-6 lg:px-12 w-full max-w-7xl">
                <div className="flex flex-col gap-16 md:gap-24 w-full">
                     {/* Identity */}
                     <Link href="/" className="flex flex-col items-center gap-4 group mx-auto text-center w-fit">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight leading-none group-hover:text-white/80 transition-colors">
                                Big Sky <span className="italic font-normal">Coresport.</span>
                            </span>
                            <span className="text-[9px] font-mono text-white/40 tracking-[0.3em] uppercase mt-3">Established 2024</span>
                        </div>
                    </Link>

                    {/* Attribution & Legal */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full border-t border-white/5 pt-12">
                        <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em] select-none text-center lg:text-left leading-relaxed">
                            © {new Date().getFullYear()} Big Sky Coresport. All Rights Reserved. <br className="lg:hidden" />
                            <span className="hidden lg:inline"> • </span>
                            Great Falls, Montana.
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <span className="text-white/30 text-[10px] font-mono uppercase tracking-[0.2em]">Powered by</span>
                            <Link 
                                href="https://truepath406.com" 
                                target="_blank"
                                className="text-white/70 font-display font-medium text-sm tracking-tight hover:text-white transition-colors duration-300"
                            >
                                True Path Digital
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
