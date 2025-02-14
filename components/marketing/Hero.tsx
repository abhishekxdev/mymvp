"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
export default function Hero() {
    return <div className="h-screen w-screen flex flex-col items-center justify-around pb-24 relative bg-black overflow-hidden ">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        </div>

        <div className="max-w-6xl mx-auto z-10 ">
            <div className="flex flex-col items-center justify-center gap-4 text-center motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
                <h1 className="text-white text-5xl  md:text-7xl xl:text-8xl font-bold tracking-tighter font-sans  ">
                   Building Digital
                   <br />
                   Products, MVP's
                   <br/> and Experiences.
                </h1>
                <p className="text-sm md:text-base text-gray-400 font-sans tracking-tight h">A digital agency that helps you build digital products, MVP's and experiences.</p>
                <Button className=" flex items-center gap-2 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth " variant="secondary">
                    Book a Call
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>

          <div className="absolute bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#DCF9FF] rounded-full blur-3xl shadow-[100px_-100px_200px_150px_rgba(59,_130,_246,_0.5)] animate-shadow-left "></div>

          <div className=" hidden md:block absolute  bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#EAD3D2] rounded-full blur-3xl shadow-[-50px_-50px_150px_50px_rgba(160,_106,_226,_1)] animate-shadow-right "></div>
    </div>;
}
