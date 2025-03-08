"use client"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
export default function Pro() {
    return (
        <div className="flex flex-col gap-4 text-white py-8 md:px-16 w-full">
            <Badge className="w-fit px-4 py-2" variant="default">Recurring Payment</Badge>
            <div className="flex items-center justify-between gap-2">
            <div>
                <span className=" font-bold font-sans tracking-tighter text-4xl">
                    $2999
                </span>
                <br />
                <span className="text-gray-400">Recurring Payment for MVP Development</span>
            </div>

            <Link href="https://cal.com/anubhav-dube-h6xzsc" className="text-black rounded-lg bg-white flex justify-between items-center p-2">
                <p className="text-black font-sans font-semibold tracking-tighter text-left ">Reserve</p>
                <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            </div>
           

            <Separator className="bg-gray-400" />

            <div className="flex flex-col gap-2">
                <p className="font-bold font-sans tracking-tighter text-xl">
                        What's Included
                </p>

                <span className="text-gray-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                   Everyting in Standard +
                </span>

                <span className="text-gray-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Min 90 Hours of Development time per month
                </span>

                <span className="text-gray-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                   Time Flexibility
                </span>

                <span className="text-gray-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                 Continous Maintenence and Updates
                </span>

                <span className="text-gray-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                   Quick Emergency Support
                </span>




                <span className="text-gray-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Regular Updates
                </span>
            </div>

           
        </div>
    )
}