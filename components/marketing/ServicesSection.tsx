"use client"

import {
  ChevronRight,
  Globe,
  Smartphone,
  DraftingCompass,
  Palette,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function ServicesSection() {
  const router = useRouter()

  const services = [
    {
      title: "Websites",
      category: "Website",
      icon: <Globe className="w-7 h-7 text-neutral-400" />,
    },
    {
      title: "Mobile Apps",
      category: "Mobile App",
      icon: <Smartphone className="w-7 h-7 text-neutral-400" />,
    },
    {
      title: "Product Design",
      category: "Product Design",
      icon: <DraftingCompass className="w-7 h-7 text-neutral-400" />,
    },
    {
      title: "Logo/Branding",
      category: "Branding",
      icon: <Palette className="w-7 h-7 text-neutral-400" />,
    },
  ]

  const handleServiceClick = (category: string) => {
    router.push(`/work?category=${encodeURIComponent(category)}`)
  }

  return (
    <section className="w-full py-12 md:pb-0 relative" id="services">
      <div className="max-w-2xl mx-auto z-10 px-4 md:px-8">
        <div className="flex flex-col items-start gap-3 mb-12">
          <p className="text-sm uppercase tracking-wider font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            SERVICES
          </p>
          <h2 className="text-xl md:text-2xl font-helvetica font-normal tracking-tight text-left text-white">
          We Don't Just Build - We Convert
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              onClick={() => handleServiceClick(service.category)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-black hover:bg-neutral-900 transition-colors duration-300 rounded-lg p-6 flex flex-col justify-between h-40 border border-neutral-800 text-left cursor-pointer"
    >
      <div>
        {icon}
        <h3 className="text-white font-medium text-lg mt-4">{title}</h3>
      </div>
      <div className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300 text-sm">
        <span>View Work</span>
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </button>
  )
}
