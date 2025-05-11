"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedShinyTextDemo } from "./Animatedbadge";
import localFont from 'next/font/local';
import React from "react";
import Image from "next/image";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";


// Load Playfair Display font
const playfair = localFont({
  src: [
    {
      path: '../../fonts/PlayfairDisplay-VariableFont_wght.ttf',
      weight: '400 900',
      style: 'normal',
    },
    {
      path: '../../fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
      weight: '400 900',
      style: 'italic',
    },
  ],
  variable: '--font-playfair'
});

export default function Hero() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center  relative bg-black ">
     
      

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_2px),linear-gradient(to_bottom,#8080800a_1px,transparent_2px)] bg-[size:20px_24px]">
        {/* Gradient Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30  to-black"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto z-10 px-4 md:px-0 mt-32 md:mt-48">
        <div className="flex flex-col items-center justify-center gap-4 text-center motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
          <AnimatedShinyTextDemo/>
          <h1 className="text-white text-5xl md:text-7xl xl:text-8xl  tracking-tight font-sans">
            Building Products that <span className={`${playfair.className} italic tracking-tight`}>Validate</span> and <span className={`${playfair.className} italic tracking-tight`}>Scale</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-400 font-sans tracking-tight md:max-w-2xl">
          We specialize in building Web Apps, Mobile Apps, and AI Systems  to help you launch faster and validate market demand faster.
            
          </p>
          <Link className="flex items-center gap-2 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth"  href="https://cal.com/anubhav-dube-h6xzsc/quick-chat">
          <Button variant="secondary" className="">
           Book a Call
          <ArrowRight className="w-4 h-4" />
          </Button>
          </Link>
        </div>



{/* Brands */}

        <div className="hidden md:flex relative flex items-center justify-between mt-24 max-w-5xl mx-auto overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <VelocityScroll defaultVelocity={2} numRows={1} className="flex items-center gap-24">
            <div className="flex items-center gap-24">
              <Image src="/brands/brazen.png" alt="hero" width={150} height={150} className="" />
              <Image src="/brands/credboost.png" alt="hero" width={200} height={200} className="mb-2" />
              <Image src="/brands/bloom.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/orbaflow.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/norric.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/medconnect.png" alt="hero" width={200} height={150} className="mb-2" />
              <Image src="/brands/jobby.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/artise.png" alt="hero" width={150} height={150} className="mb-2" />

              {/* Duplicate set of images for seamless loop */}
              <Image src="/brands/brazen.png" alt="hero" width={150} height={150} className="" />
              <Image src="/brands/credboost.png" alt="hero" width={200} height={200} className="mb-2" />
              <Image src="/brands/bloom.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/orbaflow.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/norric.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/medconnect.png" alt="hero" width={200} height={150} className="mb-2" />
              <Image src="/brands/jobby.png" alt="hero" width={150} height={150} className="mb-2" />
              <Image src="/brands/artise.png" alt="hero" width={150} height={150} className="mb-2" />
            </div>
          </VelocityScroll>

        </div>

     
      </div>



     


    </div>
  );
}

export const Twitter=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
}



