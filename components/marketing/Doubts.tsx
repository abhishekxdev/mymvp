"use client"
import Link from "next/link"
import faqs from "@/data/faq"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent} from "@/components/ui/card"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function FAQAccordion() {
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show footer when within 20px of bottom
      setShowFooter(documentHeight - scrollPosition < 20)
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen w-screen flex flex-col justify-start py-16 px-8 md:p-16 relative bg-black overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-6xl w-full mx-auto z-10 ">
      <div className="flex flex-col gap-4 mb-6">
                    <h1 className="text-white text-3xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans ">
                      Doubts
                    </h1>
                    <p className="text-white font-sans font-medium tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">
                      We are here to help you with your doubts.
                    </p>
    </div>

        <div className='grid grid-cols-1 w-full'>
          <Card className="bg-transparent text-white border-none shadow-none font-sans  ">
            <CardContent className='border-none shadow-none px-0'>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className=''>
                    <AccordionTrigger className='text-md my-1  md:text-xl font-semibold md:my-2'>{faq.question}</AccordionTrigger>
                    <AccordionContent className='text-md md:text-xl font-normal text-zinc-200 font-light tracking-tight'>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          
          </Card>

          <div className="absolute z-[-10] bottom-[-50px] left-[-20vw] w-[50vw] h-[150px] bg-gradient-to-r from-cyan-600 to-indigo-600 blur-[200px] rounded-full rotate-[-30deg]  "></div>

          <div className="absolute z-[-10] bottom-[-50px] left-[-10vw] w-[50vw] h-[50px] bg-gradient-to-r from-purple-300 to-purple-500 blur-[200px] rounded-full rotate-[-30deg]  "></div>

        </div>
      </div>



    <section className="w-full pt-12 mb-8    text-white z-10">
      <div className="container  mx-auto">
        <div className="flex flex-col items-center text-center space-y-4  mx-auto">
          <h2 className="text-2xl font-light tracking-tighter  ">Your Idea Deserves to Exist</h2>


          <div className="">
          <Link className="flex items-center gap-2 "  href="https://cal.com/anubhav-dube-h6xzsc/quick-chat">
          <Button variant="secondary">
          Book a Call
          <ArrowRight className="w-4 h-4" />
          </Button>
           
          </Link>
          </div>

          <p className="text-sm text-gray-400 pt-4">
            Join the other founders who trusted us to bring their ideas to life.
          </p>
        </div>
      </div>
    </section>





      <div className={`fixed bottom-0 left-0 right-0 w-full bg-black/80 backdrop-blur-sm border-t border-gray-800 py-2 z-50 transition-transform duration-300 ${
        showFooter ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Mvpexpereince.agency. All rights reserved.
            </p>
          </div>
          <div className="hidden md:block">
            <Link
              href="https://twitter.com/Anubhavhing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs sm:text-sm text-white hover:text-white/80"
            >
              <Twitter />
              <span>@Anubhaving</span>
            </Link>
          </div>
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