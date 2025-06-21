"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center p-8 relative bg-[#ECF0F1] overflow-hidden">

      <div className="absolute inset-0"></div>

      <div className="max-w-6xl w-full mx-auto z-10 space-y-8 md:space-y-16">
        <div className="flex flex-col md:gap-4">
          <h1 className="text-black text-3xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
            About Me
          </h1>
          <p className="text-black font-sans font-medium tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
            I build fast, scalable MVPs to turn ideas into reality. From concept to launch, I make your product market-ready with speed and precision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-6 lg:max-w-xl xl:max-w-3xl">
            <h2 className="text-black font-sans font-bold tracking-tighter text-left text-2xl md:text-3xl xl:text-4xl">
              So, what is an MVP?
            </h2>
            <p className="text-black font-sans font-medium leading-relaxed tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
              <span className="text-green-600">A Minimum Viable Product (MVP) </span> is the simplest version of a product that allows you to test your business idea with real customers. It's a crucial step in
              <span className="relative inline-block mx-1">
                validating your idea
                <motion.svg
                  className="absolute left-0 bottom-[-5px] max-w-full h-[10px]"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <path
                    d="M5 15 C50 25, 150 5, 195 15"
                    stroke="orange"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </span>
              and building a successful business.
            </p>
            <p className="text-black font-sans font-medium leading-relaxed tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
              1. It can be a <span className="text-red-600">Landing page</span> that explains product benefits and gathers visitor emails
            </p>
            <p className="text-black font-sans font-medium leading-relaxed tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
              2. A <span className="text-purple-600">Video demo</span> that explains how the future product will work
            </p>
            <p className="text-black font-sans font-medium leading-relaxed tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
              3. A <span className="text-blue-600">Digital MVP</span> that is an app or website with core features.
            </p>
          </div>

          <div className="hidden lg:block max-w-[400px]">
            <Image
              src="/MVP_loop.png"
              alt="MVP"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
