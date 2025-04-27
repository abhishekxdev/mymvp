"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Define the service types
type Service = {
  id: string
  title: string
  images: string[]
}

// Sample data for the services
const services: Service[] = [
  {
    id: "websites",
    title: "Websites",
    images: ["/two.png", "/Bloom.png"],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    images: ["/MobileApp2.png", "/MobileApp.png"],
  },
  {
    id: "ai-automation",
    title: "AI Apps & Automation",
    images: ["/Automation1.png", "/Automation.png"],
  }
]

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="w-full mt-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-16 lg:gap-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-lg"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="h-48 w-64 relative mb-6 mx-auto rounded-lg">
                {service.images.map((image, index) => (
                  <motion.div
                    key={`${service.id}-${index}`}
                    className="absolute inset-0"
                    initial={{
                      y: 0,
                      rotate: index % 2 === 0 ? -5 : 5,
                      zIndex: service.images.length - index,
                    }}
                    animate={
                      hoveredService === service.id
                        ? {
                            y: [-10, -30, -20, -25],
                            rotate: [
                              index % 2 === 0 ? -5 : 5,
                              index % 2 === 0 ? -8 : 8,
                              index % 2 === 0 ? -3 : 3,
                              index % 2 === 0 ? -6 : 6,
                            ],
                            zIndex: service.images.length + index,
                          }
                        : {
                            y: 0,
                            rotate: index % 2 === 0 ? -5 : 5,
                            zIndex: service.images.length - index,
                          }
                    }
                    transition={{
                      y: { duration: 0.5, ease: "easeOut" },
                      rotate: {
                        duration: 0.8,
                        ease: "easeInOut",
                        repeat: hoveredService === service.id ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "reverse",
                      },
                    }}
                    style={{
                      transformOrigin: "center bottom",
                      filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1))",
                    }}
                  >
                    <div className="w-full h-full overflow-hidden rounded-lg p-2 ">
                      <div className="w-full h-full relative rounded-lg overflow-hidden ">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${service.title} example ${index + 1}`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <h2 className="text-xl font-sans text-center text-white mt-2">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
