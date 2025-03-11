"use client"
import { ChevronDown } from 'lucide-react'
import Link from "next/link"
import faqs from "@/data/faq"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardFooter} from "@/components/ui/card"

export default function FAQAccordion() {

  return (
    <div className="h-screen w-screen flex flex-col justify-start py-16 px-8 md:p-16 relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-6xl w-full mx-auto z-10 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-3xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
            Doubts
          </h1>
        </div>

        <div className='grid grid-cols-1 w-full'>
          <Card className="bg-transparent text-white border-none shadow-none font-sans  ">
            <CardContent className='border-none shadow-none'>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className=''>
                    <AccordionTrigger className='text-xl font-semibold md:my-2'>{faq.question}</AccordionTrigger>
                    <AccordionContent className='text-xl font-normal text-zinc-200 tracking-tight'>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold text-center">Book a 15-minute intro call</h3>
              <Button asChild className="w-full max-w-xs ">
                <Link href="https://cal.com/anubhav-dube-h6xzsc/quick-chat">
                  Schedule now
                  <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg] animate-pulse" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <div className="absolute z-[-10] bottom-[-50px] left-[-20vw] w-[150vw] h-[250px] bg-gradient-to-r from-cyan-600 to-indigo-600 blur-[200px] rounded-full rotate-[-30deg]  "></div>

          <div className="absolute z-[-10] bottom-[-50px] left-[-10vw] w-[150vw] h-[150px] bg-gradient-to-r from-purple-300 to-purple-500 blur-[200px] rounded-full rotate-[-30deg]  "></div>

        </div>
      </div>

      <div className="absolute  w-screen  bottom-4  flex  items-center justify-betweeen gap-4 ">
        <div className="">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mvpexpereince.agency. All rights reserved.
          </p>
        </div>
        <div className="">
          <Link
            href="https://twitter.com/Anubhavhing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white hover:text-white/80"
          >
            <Twitter  />
            <span>@Anubhaving</span>
          </Link>
        </div>
      </div>
    </div>
  )
}


export const Twitter=()=>
  {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
}