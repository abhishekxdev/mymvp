"use client"
import Image from "next/image"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"



const projects = [
  {
    id: "1",
    title: "BrandAI",
    source: "/BrandAI.mp4",
    about: "A platform for creating Content for Social Media, with AI.",
    tags: ["Next.js","Postgres","Tailwind CSS","Docker","AWS","OAuth"],
  },
  {
    id: "11",
    title: "CredBoost ",
    source: "/CredBoost.mp4",
    about: "Manage your Testimonials and Reviews with Ease",
    tags: ["Next.js","Postgres","Tailwind CSS","Docker","AWS","OAuth"],
  },
  {
    id: "2",
    title: "Norric",
    source: "/Norric.mp4",
    about: "AI Assisted Platform for Real Estate",
    tags: ["AI", "Postgres","Tailwind CSS","Docker","AWS", "NextJs"],
  },
  {
    id: "3",
    title: "Jobby",
    source: "/Jobby.mp4",
    about: "A job portal for finding jobs and applying to them.",
    tags: ["Next.js","Postgres","Tailwind CSS","Docker","AWS","OAuth"],
  },
  {
    id: "4",
    title: "Artiste",
    source: "/Artiste.png",
    about: "A platform for creating and sharing AI-generated images.",
    tags: ["Next.js","Postgres","Tailwind CSS","Docker","AWS","OAuth"],
  },
  {
    id: "5",
    title: "MedConnect",
    source: "/MedConnect.png",
    about: "A platform to connect patients with doctors and get their queries answered.",
    tags: ["Next.js","Postgres","Tailwind CSS","Docker","AWS","OAuth"],
    url: "https://medconnect-topaz.vercel.app/",
  },
  {
    id: "6",
    title: "Engima",
    source: "/two.png",
    about: "A platform for creating and sharing AI-generated images.",
    tags: ["AI", "Image Generation", "Next","Tailwind CSS","Supabase","Resend"],
  },
  {
    id: "7",
    title: "VidAI",
    source: "/three.png",
    about: "A platform for creating and sharing AI-generated videos.",
    tags: ["Next.js","Postgres","Tailwind CSS","Docker","AWS","OAuth"],
  },
]

export default function Projects() {


  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden bg-black">
      {/* Blue and purple glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-4 md:mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            <span className="inline-block relative">
              Projects
            </span>
          </h2> 
          <p className=" mt-4 text-white font-sans font-medium tracking-tighter text-left text-xl md:text-2xl xl:text-3xl">MVP's Built for Founder's and Startups</p>
        </div>

        {/* Desktop view (md and above) */}
        <div className="hidden md:block">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-3/4 lg:basis-2/3">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end mt-4 gap-4">
              <CarouselPrevious className="static transform-none bg-slate-800 hover:bg-slate-700 border-slate-700" />
              <CarouselNext className="static transform-none bg-transparent border border-slate-700  text-slate-400 hover:bg-slate-700 border-slate-700" />
            </div>
          </Carousel>
        </div>

        {/* Mobile view (below md) */}
        <div className="md:hidden space-y-8">
          {projects.map((project) => (
            <ProjectCardMobile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function to check if source is a video
const isVideoSource = (source: string): boolean => {
  return source.toLowerCase().endsWith('.mp4'); // Add other video extensions if needed (e.g., .webm, .ogg)
};

// Define the project type
interface Project {
  id: string;
  title: string;
  source: string;
  about: string;
  tags: string[];
  url?: string; // Optional URL
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative">
      {/* Main Card Content */}
      <div className="h-full backdrop-blur-sm rounded-xl p-6 flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold text-white font-sans tracking-tighter">{project.title}</h3>
          <span className="text-slate-500 font-mono">{project.id}</span>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6 flex-grow bg-black">
          {isVideoSource(project.source) ? (
            <video
              src={project.source}
              autoPlay
              loop
              muted // Autoplay often requires muted
              playsInline // Important for mobile browsers
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-30"
            />
          ) : (
            <Image
              src={project.source}
              alt={project.title}
              fill
              className="object-contain transition-opacity duration-300 group-hover:opacity-30"
              priority
            />
          )}
        </div>

        <p className="text-slate-300 mb-6">{project.about}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-xs rounded-full bg-transparent border border-slate-700 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Link */}
      {project.url && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  );
}

function ProjectCardMobile({ project }: { project: Project }) {
  return (
    <div className="p-1 rounded-xl group relative">
      {/* Main Card Content */}
      <div className="backdrop-blur-sm rounded-lg p-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <span className="text-slate-500 font-mono text-sm">{project.id}</span>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-black">
          {isVideoSource(project.source) ? (
            <video
              src={project.source}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-30"
            />
          ) : (
            <Image
              src={project.source}
              alt={project.title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-30"
              priority
            />
          )}
        </div>

        <p className="text-slate-300 text-sm mb-4">{project.about}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-transparent border border-slate-700 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Link */}
      {project.url && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            Visit Website
          </a>
        </div>
      )}
    </div>
  );
}

