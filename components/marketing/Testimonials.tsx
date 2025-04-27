"use client";
import Image from "next/image";

// Define the structure for a testimonial
interface Testimonial {
  name: string;
  title: string;
  quote: string;
  company?: string; // Optional company name   // Optional company logo
  backgroundImage: string;
}

const testimonials: Testimonial[] = [
    {
      name: "Kashish",
      title: "Founder & CEO",
      quote:
        "Working with Anubhav to build our MVP was the best decision we made. He took our raw idea and turned it into a working product in just a few weeks. The speed, clarity, and attention to detail were unmatched.",
      company: "Bloom",
      backgroundImage: "/BG1.png",
    },
    {
      name: "Kazeie Morgan",
      title: "CTO",
      quote:
        "We needed a fast, reliable MVP to pitch to investors — and MVP Exprerience delivered beyond expectations  and we actually got our first users from the demo build!",
      company: "Jobby",
      backgroundImage: "/BG2.png",
    },
    {
      name: "Emily Carter",
      title: "",
      quote:
        "Our MVP was built in record time, and it worked like magic during our accelerator demo day. Anubhav’s ability to understand business needs and turn them into tech is seriously impressive.",
      company: "MedConnect",
      backgroundImage: "/BG3.png",
    },
  ];
  

// The main Testimonials section component
export default function Testimonials() {
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

        {/* Testimonials Grid */}
        <div className="mt-12  pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 lg:px-12 ">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual Testimonial Card component
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group transition-all duration-300 h-[450px] flex flex-col">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={testimonial.backgroundImage || "/placeholder.svg"} // Fallback placeholder
          alt="Background"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/90 to-transparent group-hover:from-black/80 group-hover:via-black/60 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-end">
        <blockquote className="text-gray-200 text-lg mb-6 leading-relaxed italic font-serif">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className="flex items-center justify-between gap-4">
          {/* Author Info */}
          <div className="flex items-center min-w-0">
            
            <div className="min-w-0">
              <h3 className="text-white font-medium truncate">{testimonial.name}</h3>
              <p className="text-gray-400 text-sm truncate">
                {testimonial.company ? ` ${testimonial.company}` : ""}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
