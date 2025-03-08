"use client";
import { Button } from "@/components/ui/button";
import { UserRound,Code, AtSign ,Mail} from "lucide-react";
import Link from "next/link";
export default function About() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center p-16 relative bg-black overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 bg-white"></div>

            {/* Content Container */}
            <div className="max-w-6xl w-full mx-auto z-10">
                <div className="flex absolute top-10 flex-col gap-4 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-45 intersect:motion-blur-in-sm">
                    <h1 className="text-black text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
                        About
                    </h1>
                </div>

                <div className="flex justify-center  items-center gap-4 ">
                  <div className="w-full ">
                  <p className="text-black font-sans  font-medium tracking-tighter  text-left text-xl xl:text-4xl leading-[30px] md:leading-[50px]" >
                        I'm a software engineer with a passion for building products that help people live better lives.
                    </p>
                    <Link href="https://cal.com/anubhav-dube-h6xzsc/quick-chat" className="pt-4">
                    <Button className=" hover:shadow-blue-500">
                        Set a Meet
                      </Button>
                      </Link>
                  </div>

                  <div className="w-full flex-col space-y-6 ">
                  <div className="w-full min-h-[120px] flex  justify-start items-center gap-4 ">
                    <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300">
                      <UserRound className="text-white"/>
                    </span>
                    <p>
                    Worked with over 6 clients, I have a decent experience with building MVP's and Web Apps, Discussing you Ideas and getting some market validation is quite Important.
                    </p>
                  </div>
                  <div className="w-full min-h-[150px] flex items-center gap-4  ">
                  <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300">
                      <Code className="text-white"/>
                    </span>
                    <p>
                     Tech Stack used is Nextjs, Tailwind, Shadcn, Typescript, Postgres, Supabase, Vercel. The combination of these are the top tiers of the industry. It ensures the best performance and scalability for your product.
                    </p>
                  </div>
                  <div className="w-full min-h-[150px] flex items-center gap-4 ">
                    <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300">
                      <AtSign className="text-white"/>
                    </span>
                    <p>
                    Building a great product isn't just about writing code—it's about understanding your vision and executing it efficiently. I focus on user experience, scalability, and performance to ensure your idea turns into a successful product.
                    </p>
                  </div>
                  <div className="w-full min-h-[150px] flex items-center gap-4 ">
                    <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300">
                      <Mail className="text-white"/>
                    </span>
                    <p>
                    I believe in collaborative development, clear communication, and delivering results that matter. Let’s turn your vision into reality—one optimized, scalable, and high-performance product at a time.

Ready to get started? Let’s chat! 🚀
                    </p>
                  </div>
                  </div>
                  
                </div>
            </div>
        </div>
    );
}
