"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Badge } from "@/components/ui/badge"
import { BellRing } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Standard from "./Standard"
import Pro from "./Pro"
export default function Pricing() {
    return (
        <div className="h-screen w-screen flex flex-col justify-start p-8  relative bg-[#ECF0F1] overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 "></div>

            <div className="max-w-6xl w-full mx-auto z-10 space-y-8 md:space-y-16 intersect:motion-preset-fade intersect:motion-duration-2000">
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-black text-3xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans ">
                        Pricing
                    </h1>
                    <p className="text-black font-sans font-medium tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
                        We offer a range of pricing options to suit your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 justify-center gap-4">


                    <div className=" hidden md:flex flex-col justify-center gap-4 bg-black p-4 rounded-lg  col-span-2 relative ">
                        <Badge className="w-fit px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-900 motion-preset-compress absolute top-0 right-[-10px] ">
                            <BellRing className="w-4 h-4 mr-2 motion-preset-pulse " />
                            2 Slots Left
                        </Badge>
                        <h2 className="text-white font-sans font-semibold tracking-tighter text-left text-2xl md:text-5xl">
                            Join
                        </h2>
                        <p className="text-white font-sans font-bold tracking-tighter text-left text-2xl md:text-5xl">
                            MVP <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-900">Experience</span>
                        </p>
                        <p className="text-gray-400 font-sans font-medium tracking-tighter text-left text-xl">
                            Dont Sleep on your Ideas, Build your MVP with us.
                        </p>

                        <Link href="https://cal.com/anubhav-dube-h6xzsc" className="w-full flex items-center justify-between p-4 border border-gray-400 rounded-lg motion-preset-compres hover:bg-zinc-900 transition-all duration-300 ">
                            <div className="flex flex-col gap-2">
                                <p className="text-white font-sans font-medium tracking-tighter text-left text-xl">Book a 15 Minute Call</p>
                                <p className="text-gray-400 font-sans font-medium tracking-tighter text-left text-sm">Let's Discuss Your Idea and how we can help you</p>
                            </div>

                            <ArrowRight className="w-8 h-8 text-white motion-preset-seesaw  " />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-4 bg-black p-4 rounded-lg md:min-h-[500px] col-span-3">
                        <Tabs defaultValue="pro" className="w-full">
                            <TabsList className="bg-transparent ">
                                <TabsTrigger value="standard" className="text-xl">Standard</TabsTrigger>
                                <TabsTrigger value="pro" className="text-xl">Pro <p className="motion-preset-pulse ml-1">🔥</p></TabsTrigger>
                            </TabsList>
                            <TabsContent value="standard" className="w-full"><Standard /></TabsContent>
                            <TabsContent value="pro" className="w-full"><Pro /></TabsContent>
                        </Tabs>
                    </div>

                </div>
            </div>



        </div>
    )
}