import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Process from '../components/Process';
import Services from '../components/Services';
import CommunityFeature from '../components/CommunityFeature';
import Location from '../components/Location';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import GlobalScrollLine from '../components/GlobalScrollLine'; // Added the continuous global line

export default function Home() {
    return (
        <>
            <Head>
                <title>Big Sky Coresport | Premier Gym in Great Falls, MT</title>
                <meta name="description" content="Join Big Sky Coresport, the premier gym in Great Falls, MT. Expert coaching, supportive community, and results-driven programming for all levels." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col min-h-screen bg-white relative">
                {/* Global Scrolling Indicator - Won't break design */}
                <GlobalScrollLine />
                
                <Header />
                <main>
                    <Hero />
                    <Features />
                    <About />
                    <Process />
                    <Services />
                    <CommunityFeature />
                    <Location />
                    <Testimonials />
                    <FAQ />
                    <FinalCTA />
                </main>
                <Footer />
            </div>
        </>
    );
}
