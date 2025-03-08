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
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
    </div>
  )
}
