"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-around pb-24 relative bg-black overflow-hidden">
      
      <Link
            href="https://twitter.com/Anubhavhing"
            target="_blank"
            rel="noopener noreferrer"
            className=" absolute top-4 right-4 md:right-16 flex items-center gap-1 text-sm text-white hover:text-white/80"
          >
            <Twitter  />
            <span>@Anubhaving</span>
          </Link>

      {/* Overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto z-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
          <h1 className="text-white text-5xl md:text-7xl xl:text-8xl font-bold tracking-tight font-sans">
            Building Digital
            <br />
            Products, 
            <span className="text-blue-500"> MVP's</span>
            <br />
            and Experiences.
          </h1>
          <p className="text-sm md:text-base text-gray-400 font-sans tracking-tight">
            Build, Validate and Scale your MVP's with the best technologies.
          </p>
          <Link className="flex items-center gap-2 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth"  href="https://cal.com/anubhav-dube-h6xzsc/quick-chat">
          <Button variant="secondary">
          Book a Call
          <ArrowRight className="w-4 h-4" />
          </Button>
           
          </Link>
        </div>
      </div>

      {/* Left Glowing Effect */}
      <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#DCF9FF] rounded-full blur-3xl shadow-[100px_-100px_200px_150px_rgba(59,_130,_246,_0.5)] animate-shadow-left"></div>

      {/* Right Glowing Effect (Visible on Medium+ Screens) */}
      <div className="hidden md:block absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#EAD3D2] rounded-full blur-3xl shadow-[-50px_-50px_150px_50px_rgba(160,_106,_226,_1)] animate-shadow-right"></div>
    </div>
  );
}


export const Twitter=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
}

