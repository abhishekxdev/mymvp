"use client";
import { Button } from "@/components/ui/button";
import { UserRound,Code, AtSign ,Mail} from "lucide-react";
import Link from "next/link";
export default function About() {
    return (
        <div className="h-screen w-screen flex flex-col justify-center p-4 sm:p-8 md:p-16 relative bg-black overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 bg-white"></div>

            {/* Content Container */}
            <div className="max-w-6xl w-full mx-auto z-10">
                <div className="flex absolute top-4 sm:top-10 flex-col gap-4 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-45 intersect:motion-blur-in-sm">
                    <h1 className="text-black text-3xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
                        About
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-8  ">
                    <div className="w-full lg:w-1/2 intersect:motion-fade-in intersect:motion-slide-in-from-left">
                        <p className="text-black font-sans font-medium tracking-tighter text-left px-1 text-sm md:text-xl xl:text-4xl leading-[30px] md:leading-[50px]">
                            I'm a software engineer with a passion for building products that help people live better lives.
                        </p>
                        <Link href="https://cal.com/anubhav-dube-h6xzsc/quick-chat" className="pt-0 md:pt-4 block">
                            <Button className="hover:shadow-blue-500 w-fit sm:w-auto">
                                Set a Meet
                            </Button>
                        </Link>
                    </div>


    {/* {Code for Lg screen about features} */}
                    <div className=" w-1/2  space-y-6 hidden lg:block">
                    <div className="w-full text-sm md:text-md px-4 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <UserRound className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                Worked with over 6 clients, I have a decent experience with building MVP's and Web Apps, Discussing you Ideas and getting some market validation is quite Important.
                            </p>
                        </div>
                        <div className=" w-full px-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <Code className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                Tech Stack used is Nextjs, Tailwind, Shadcn, Typescript, Postgres, Supabase, Vercel. The combination of these are the top tiers of the industry. It ensures the best performance and scalability for your product.
                            </p>
                        </div>
                        <div className="w-full px-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <AtSign className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                Building a great product isn't just about writing code—it's about understanding your vision and executing it efficiently. I focus on user experience, scalability, and performance to ensure your idea turns into a successful product.
                            </p>
                        </div>
                        <div className="w-full px-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                I believe in collaborative development, clear communication, and delivering results that matter. Let's turn your vision into reality—one optimized, scalable, and high-performance product at a time.

                            </p>
                        </div>
                    </div>

    {/* {Code for Mobile screen about features} */}
                    <div className=" lg:hidden w-full lg:w-1/2 flex-col  md:space-y-6 grid grid-cols-1  gap-4 intersect:motion-fade-in intersect:motion-slide-in-from-right">
                        <div className="w-full text-sm md:text-md px-1 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <UserRound className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                Worked with over 6 clients, I have a decent experience with building MVP's and Web Apps, Discussing you Ideas and getting some market validation is quite Important.
                            </p>
                        </div>
                        <div className=" w-full px-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <Code className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                Tech Stack used is Nextjs, Tailwind, Shadcn, Typescript, Postgres, Supabase, Vercel. The combination of these are the top tiers of the industry. It ensures the best performance and scalability for your product.
                            </p>
                        </div>
                        <div className="w-full px-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <AtSign className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                Building a great product isn't just about writing code—it's about understanding your vision and executing it efficiently. I focus on user experience, scalability, and performance to ensure your idea turns into a successful product.
                            </p>
                        </div>
                        <div className="w-full px-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm">
                            <span className="p-2 bg-black rounded-lg shadow-xl hover:shadow-purple-500 transition-all duration-300 shrink-0">
                                <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6"/>
                            </span>
                            <p className="text-sm sm:text-base">
                                I believe in collaborative development, clear communication, and delivering results that matter. Let's turn your vision into reality—one optimized, scalable, and high-performance product at a time.

Ready to get started? Let's chat! 🚀
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
