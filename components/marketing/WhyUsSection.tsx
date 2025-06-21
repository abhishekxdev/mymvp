"use client"

import { Lightbulb, Users, Zap, Rocket } from 'lucide-react'
import { cn } from "@/lib/utils"

export function WhyUsSection() {
  const features = [
    {
      title: "Built for Speed & Scale",
      description: "Your MVP is developed using modern, scalable tech—ready to grow with your users and business.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "One Project. One Focus.",
      description: "We don't juggle clients. Your MVP gets our full attention, every step of the way.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Clarity-First MVP Design",
      description: "We turn complex ideas into simple, engaging interfaces that users actually enjoy using.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Built for Real-World Results",
      description: "We don't just build MVPs — we build traction. Funding, users, and growth start with the right product foundation.",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full py-6 md:py-8 relative mt-8 md:mt-12" id="why-us">
      <div className="max-w-2xl mx-auto z-10 px-4 md:px-8">
        <div className="flex flex-col items-start gap-3 mb-8">
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-helvetica font-normal">WHY MVP STUDIO</p>
            <h2 className="text-xl md:text-2xl font-helvetica font-normal tracking-tight text-left text-white">
            High-Impact MVPs for Founders Who Move Fast
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:border-r py-6 relative group/feature border-white/20",
        (index === 0 || index === 2) && "md:border-l border-white/20",
        index < 2 && "md:border-b border-white/20"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-6 text-white/80">
        {icon}
      </div>
      <div className="text-base font-bold mb-2 relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-4 group-hover/feature:h-6 w-1 rounded-tr-full rounded-br-full bg-white/30 group-hover/feature:bg-blue-400 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-xs text-white/80 max-w-xs relative z-10 px-6 leading-tight">
        {description}
      </p>
    </div>
  )
} 