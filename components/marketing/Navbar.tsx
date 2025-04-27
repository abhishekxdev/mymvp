import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Navbar(){
    return(
        <div className="fixed top-4 left-0 right-0 z-50 max-w-5xl mx-auto px-6  text-white bg-black/90 backdrop-blur-sm rounded-xl py-5 flex justify-between items-center">

            <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="logo" width={100} height={100} className="rounded-xl w-10 h-10" />
            <h1 className="text-white text-xl md:text-2xl font-sans font-semibold tracking-tight">Agency</h1>
            </div>

            <div className=" items-center gap-8 font-sans font-medium hidden md:flex">
                <Link href="#why-us">Why Us?</Link>
                <Link href="#our-work">Our Work</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#testimonials">Testimonials</Link>
                <Link href="#faq">FAQ's</Link>
            </div>

            <div className="flex items-center gap-2">
            <Link className="flex items-center gap-2 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth"  href="https://cal.com/anubhav-dube-h6xzsc/quick-chat">
                <Button variant="outline" className="bg-white text-black rounded-xl">
                    Book a Call</Button>
                    </Link>

                    {/* <div className="md:hidden">
                <MenuIcon className="w-6 h-6"/> 
            </div> */}
            </div>

            
        </div>
    )
}