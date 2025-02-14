"use client"

import { ChevronDown } from 'lucide-react'
import Link from "next/link"

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
    <div className="h-screen w-screen flex flex-col justify-start p-16 relative bg-black overflow-hidden">
    {/* Background Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

    {/* Content Container */}
    <div className="max-w-6xl w-full mx-auto z-10">
        <div className="flex flex-col gap-4 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-45 intersect:motion-blur-in-sm">
            <h1 className="text-white text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
                Projects
            </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Frequently Asked Questions</CardTitle>
      </CardHeader>
      <CardContent className='border-none shadow-none'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How fast will I receive my requests?</AccordionTrigger>
            <AccordionContent>
              We strive to deliver requests as quickly as possible, typically within a few business days depending on complexity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How does onboarding work?</AccordionTrigger>
            <AccordionContent>
              Our onboarding process is streamlined and user-friendly. We'll guide you through setting up your account and explaining how to submit and manage your requests.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who are the developers?</AccordionTrigger>
            <AccordionContent>
              Our developers are experienced professionals with diverse skill sets, carefully selected to meet the needs of our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a limit to how many requests I can make?</AccordionTrigger>
            <AccordionContent>
              The number of requests you can make depends on your subscription plan. We offer various tiers to suit different needs and volumes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does the pause feature work?</AccordionTrigger>
            <AccordionContent>
              The pause feature allows you to temporarily suspend your subscription without losing your account. You can resume your service at any time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do you handle larger requests?</AccordionTrigger>
            <AccordionContent>
              For larger requests, we assess the scope and may break it down into smaller, manageable tasks. We'll communicate with you throughout the process to ensure your needs are met.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>How will I request development work?</AccordionTrigger>
            <AccordionContent>
              You can submit requests through our user-friendly dashboard. Simply describe your needs, and we'll take it from there.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What if I don't like the work that is done?</AccordionTrigger>
            <AccordionContent>
              We offer revisions to ensure your satisfaction. If you're not happy with the work, we'll work with you to make necessary adjustments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>What if I only have a single request?</AccordionTrigger>
            <AccordionContent>
              We offer flexible plans, including options for one-time requests. Contact us for more information on how we can accommodate your specific needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Are there any refunds?</AccordionTrigger>
            <AccordionContent>
              Our refund policy is designed to be fair and transparent. Please refer to our terms and conditions for specific details on refunds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Can I use Codejoy for just a month?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer monthly subscription options. You can use our service for as long or as short a period as you need.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold text-center">Book a 15-minute intro call</h3>
        <Button asChild className="w-full max-w-xs">
          <Link href="/schedule">
            Schedule now
            <ChevronDown className="ml-2 h-4 w-4 rotate-[-90deg]" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
    </div>
</div>
</div>

  )
}
