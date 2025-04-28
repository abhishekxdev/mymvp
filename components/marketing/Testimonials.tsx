"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
interface Testimonial {
  quote: string
  company: string
  logo: string
}

  

// The main Testimonials section component
export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The platform has completely transformed how we approach customer engagement. The intuitive interface and powerful analytics have helped us increase conversion rates by over 40% in just three months.",
      company: "Medconnect",
      logo: "/brands/medconnect.png",
    },
    {
      quote:
        "Since implementing this solution, our team productivity has increased by 35%. The seamless workflow automation has eliminated bottlenecks we've struggled with for years.",
      company: "Bloom",
      logo: "/brands/bloom.png",
    },
    {
      quote:
        "Our customer satisfaction scores have reached an all-time high after adopting this platform. The personalized experience it provides has been a game-changer for our business.",
      company: "CredBoost",
      logo: "/brands/credboost.png",
    },
    {
      quote:
        "The robust analytics dashboard gives us insights we never had before. We've been able to identify opportunities that increased our revenue by 28% in the first quarter alone.",
      company: "Jobby",
      logo: "/brands/jobby.png",
    },
    {
      quote:
        "The integration capabilities are exceptional. We connected all our existing tools within days, creating a unified ecosystem that has streamlined our entire operation.",
      company: "Artise",
      logo: "/brands/artise.png",
    },
    {
      quote:
        "The security features provide peace of mind for both our team and our clients. The platform's compliance standards exceed industry requirements while maintaining ease of use.",
      company: "Brazen",
      logo: "/brands/brazen.png",
    },
    {
      quote:
        "The onboarding process was remarkably smooth. Our entire team was proficient with the platform within a week, and the support team was exceptional throughout the transition.",
      company: "Norric",
      logo: "/brands/norric.png",
    },
    {
      quote:
        "We've reduced operational costs by 25% while improving service quality. The automation features handle routine tasks, allowing our team to focus on strategic initiatives.",
      company: "Orbaflow",
      logo: "/brands/orbaflow.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [,setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Check if we're on mobile for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Function to change slide with animation
  const changeSlide = (newIndex: number) => {
    // Start animation
    setIsAnimating(true)

    // After a short delay, change the slide
    setTimeout(() => {
      setCurrentIndex(newIndex)

      // End animation after the slide has changed
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
    }, 300)
  }

  // Auto-rotation effect with 3 second interval
  useEffect(() => {
    const startTimer = () => {
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }

      // Set new timer that advances the slide every 3 seconds
      timerRef.current = setInterval(() => {
        if (!isPaused && !isAnimating) {
          const nextIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
          changeSlide(nextIndex)
        }
      }, 3000)
    }

    // Start the timer
    startTimer()

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isPaused, currentIndex, isAnimating, testimonials.length])

  const goToPrevious = () => {
    // Pause auto-rotation temporarily
    setIsPaused(true)

    // Don't allow navigation during animation
    if (isAnimating) return

    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    changeSlide(newIndex)

    // Resume auto-rotation after 4 seconds of inactivity
    setTimeout(() => setIsPaused(false), 4000)
  }

  const goToNext = () => {
    // Pause auto-rotation temporarily
    setIsPaused(true)

    // Don't allow navigation during animation
    if (isAnimating) return

    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    changeSlide(newIndex)

    // Resume auto-rotation after 4 seconds of inactivity
    setTimeout(() => setIsPaused(false), 4000)
  }

  const goToSlide = (slideIndex: number) => {
    // Don't do anything if clicking the current slide or during animation
    if (slideIndex === currentIndex || isAnimating) return

    // Pause auto-rotation temporarily
    setIsPaused(true)

    changeSlide(slideIndex)

    // Resume auto-rotation after 4 seconds of inactivity
    setTimeout(() => setIsPaused(false), 4000)
  }

  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden bg-black" id="testimonials">
      {/* Glow effect */}


      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl w-full mx-auto z-10 space-y-12 md:space-y-16">
        {/* Header section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
            Trusted by Founders & Teams
          </h1>
          <p className="text-slate-300 font-sans font-medium tracking-tight text-base md:text-xl max-w-2xl">
            Hear from clients and collaborators about their experience working with us.
          </p>
        </div>


        <div
          className="relative w-full text-white py-8 md:py-12 z-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 4000)}
        >
          <div className="max-w-[90%] sm:max-w-[85%] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
            <div className="relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex flex-col items-center justify-center">
              {/* Quote with fade animation */}
              <div
                className={`text-center mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-600 ease-in-out ${
                  isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
                }`}
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight font-sans font-light leading-normal sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
              </div>

              {/* Company with fade animation */}
              <div
                className={`flex flex-col items-center mb-8 sm:mb-6 transition-all duration-600 ease-in-out ${
                  isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
                }`}
              >
                <div className="h-6 sm:h-8 flex items-center justify-center mb-2">
                  <Image src={testimonials[currentIndex].logo} alt={testimonials[currentIndex].company} width={100} height={100} />
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="w-full flex justify-between items-center absolute top-1/2 -translate-y-1/2 px-2 sm:px-4 md:px-6 lg:px-8">
                <button
                  onClick={goToPrevious}
                  className="bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 transition-all duration-300"
                  aria-label="Previous testimonial"
                  disabled={isAnimating}
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="bg-black/30 hover:bg-black/50 rounded-full p-2 sm:p-3 transition-all duration-300"
                  aria-label="Next testimonial"
                  disabled={isAnimating}
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-0 flex space-x-1 sm:space-x-2">
                {testimonials.map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                      slideIndex === currentIndex ? "w-6 sm:w-8 bg-white" : "w-1.5 sm:w-2 bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${slideIndex + 1}`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
