"use client"

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "MVP Standard Plan",
    price: "$1,999",
    description: "Perfect for validating your idea quickly",
    features: [
      "Core features only",
      "Basic UI/UX design",
      "2 Weeks development",
      "Basic testing",
      "Deployment support",
      "1 month of support",
    ],
    highlighted: false,
    cta: "Book a Call",
    href: "https://calendly.com/vishnoiabhishek29/30min",
  },
  {
    name: "MVP Growth Retainer Plan",
    price: "$2,999",
    description: "Ideal for growing businesses",
    features: [
      "All MVP features",
      "Advanced UI/UX design",
      "Continuous development",
      "Comprehensive testing",
      "Performance optimization",
      "3 months of support",
      "Analytics integration",
      "Basic SEO setup",
    ],
    highlighted: true,
    cta: "Book a Call",
    href: "https://calendly.com/vishnoiabhishek29/30min",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="max-w-2xl mx-auto z-10 px-4 md:px-8">
        <div className="text-left">
          <h2 className="text-base font-helvetica font-normal leading-7 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Pricing
          </h2>
          
        </div>
        <h2 className="mt-4 text-2xl md:text-3xl font-helvetica font-normal tracking-tight text-left text-white">
          Simple Pricing. Maximum Value.
        </h2>
        <div className="isolate mt-12 grid max-w-md grid-cols-1 gap-y-12 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col justify-between rounded-3xl p-8 ring-1 ring-white/20 xl:p-10"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 px-4 py-1.5 text-sm font-semibold leading-6 text-white">
                  Most popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-white/80">
                    /project
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-white/80"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-blue-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block rounded-full px-4 py-2 text-center text-sm font-normal text-white border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}