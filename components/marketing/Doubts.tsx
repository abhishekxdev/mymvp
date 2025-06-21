"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqs from "@/data/faq"

export default function Doubts() {
  return (
    <section className="w-full pt-12 md:pt-16 pb-20 md:pb-24 relative" id="faq">
       <div className="absolute z-[-10] top-1/2 right-0 w-[50vw] h-[50vh] -translate-y-1/2 bg-cyan-500/30 blur-[200px] rounded-full"></div>
      <div className="max-w-2xl mx-auto px-4 md:px-8 pl-12 md:pl-8 relative z-10">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm uppercase tracking-wider font-normal">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">FAQs</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-left text-white">
            You Ask, We Answer
            </h2>
          </div>
          
          <div className="w-full mt-16">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-6 py-2 bg-black/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-normal hover:text-white hover:no-underline text-white text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pt-2 pb-4 text-left text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}