"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function About() {
    return (
        <div className="h-screen w-screen flex flex-col justify-start p-8  relative bg-black overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute top-1/8 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[104px]"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[104px]"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

           
            <div className="max-w-6xl w-full mx-auto z-10 space-y-8 md:space-y-16 intersect:motion-preset-fade intersect:motion-duration-2000">
                <div className="flex flex-col items-center gap-4 pt-8 ">
                    <h1 className="text-white text-3xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans ">
                    Move at Startup Speed
                    </h1>
                    <p className="text-white font-sans font-medium tracking-tighter text-left text-md md:text-2xl xl:text-3xl">
                    Speed Meets Precision—Launch Faster Than Ever
                    </p>

                </div>

                <div className="flex lg:flex-row flex-col gap-4">
                    <div className="hidden lg:flex lg:w-1/2 flex-col items-start pr-8 justify-center  md:space-y-6 grid grid-cols-1  gap-4 intersect:motion-fade-in intersect:motion-slide-in-from-right">
                        <p className="text-white font-sans font-medium tracking-tighter text-left text-xl md:text-2xl xl:text-2xl">
                            I'm a software engineer with a passion for building products that help people live better lives.
                            In this fast paced world, I believe in building products that are scalable and future proof so Let's make sure your MVP is built within weeks and not months.
                        </p>
                        <Link href="https://cal.com/anubhav-dube-h6xzsc/quick-chat">
                            <Button variant="outline" className="shadow-[0px_0px_50px_10px_rgba(59,_130,_246,_0.5)]
                            hover:shadow-[0px_0px_80px_10px_#c180ff] transition-all duration-300">
                                Book a Call
                            </Button>
                        </Link>
                    </div>


                    <div className=" w-full lg:w-1/2 flex-col     grid grid-cols-1 gap-4  md:gap-8 intersect:motion-fade-in intersect:motion-slide-in-from-right">
                        <div className="w-full hover:shadow-xl  hover:shadow-[#A855F7]/50 transition-all duration-300  border-gray-300 p-3 text-sm md:text-md flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm transform-gpu hover:translate-z-2 hover:-translate-y-1">
                            <span className="p-2 bg-black rounded-lg ">
                             <p className="text-xl">🏢</p>
                            </span>
                            <p className="text-sm sm:text-base text-white font-sans font-medium">
                                Worked with over 6 clients, I have a decent experience with building MVP's and Web Apps, Discussing your ideas and getting some market validation is quite important.
                            </p>
                        </div>


                        <div className="w-full hover:shadow-xl  hover:shadow-blue-500/50 transition-all duration-300  border-gray-300 p-3 text-sm md:text-md flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm transform-gpu hover:translate-z-2 hover:-translate-y-1">
                            <span className="p-2 bg-black rounded-lg ">
                                <p className="text-xl">🔥</p>
                            </span>
                            <p className="text-sm sm:text-base text-white font-sans font-medium r">
                            From Idea to MVP – Fast & Scalable
                        I specialize in turning your concepts into functional MVPs, ensuring market validation and seamless scalability.
                            </p>
                        </div>

                        <div className="w-full hover:shadow-xl  hover:shadow-[#A855F7]/50 transition-all duration-300   border-gray-300 p-3 text-sm md:text-md flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm transform-gpu hover:translate-z-2 hover:-translate-y-1">
                            <span className="p-2 bg-black rounded-lg">
                            <p className="text-xl">🧑‍💻</p>
                            </span>
                            <p className="text-sm sm:text-base text-white font-sans font-medium">
                            I leverage the best modern technologies like Nextjs, Tailwind CSS, Shadcn UI, and Postgres to ensure high-performance, scalable, and future-proof MVP development.
                            </p>
                        </div>

                        <div className="w-full hidden md:flex hover:shadow-xl  hover:shadow-blue-500/50 transition-all duration-300  border-gray-300 p-3 text-sm md:text-md flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white/5 rounded-lg backdrop-blur-sm transform-gpu hover:-translate-y-1   ">
                            <span className="p-2 bg-black rounded-lg">
                            <p className="text-xl">📄</p>
                            </span>
                            <p className="text-sm sm:text-base text-white font-sans font-medium">
                            Proper documentation ensures project scalability and smooth developer collaboration. We provide clear API documentation, a detailed tech stack guide, and ERDs for easy data flow visualization.
                            </p>
                        </div>


                    </div>

                </div>


            </div>
        </div>
    );
}


