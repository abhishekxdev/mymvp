import { Suspense } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/marketing/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { WorkPageClient } from "./WorkPageClient";

const projects = [
  { src: "/crm.png", alt: "CRM Project", category: "Website" },
  { src: "/serene.png", alt: "Serene Project", category: "Website" },
  { src: "/finc.png", alt: "Finc Project", category: "Website" },
  { src: "/emailai.png", alt: "Email AI Project", category: "Product Design" },
  { src: "/horoscope.PNG", alt: "Horoscope Project", category: "Mobile App" },
  { src: "/nurodeep.png", alt: "Nurodeep Project", category: "Product Design" },
  { src: "/outreach.png", alt: "Outreach Project", category: "Website" },
  { src: "/Phantom.png", alt: "Phantom Project", category: "Website" },
  { src: "/projectsync.JPG", alt: "Project Sync Project", category: "Product Design" },
  { src: "/VorkelAI Snap.png", alt: "Vorkel AI Snap Project", category: "Website" },
  { src: "/brands/imetly.png", alt: "Imetly Brand", category: "Branding" },
  { src: "/brands/nurodeeplogo.png", alt: "Nurodeep Logo", category: "Branding" },
  { src: "/brands/vorkellogo.png", alt: "Vorkel Logo", category: "Branding" },
];

const categories = ["All", "Website", "Mobile App", "Product Design", "Branding"];

interface WorkPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const params = await searchParams;
  const initialCategory = params.category && categories.includes(params.category) 
    ? params.category 
    : "All";

  const filteredProjects = initialCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === initialCategory);

  return (
    <div className="bg-black text-white min-h-screen py-20 md:py-24">
      <TracingBeam>
        {/* Header Section with proper beam spacing */}
        <div className="max-w-2xl mx-auto px-4 md:px-8 pl-12 md:pl-8 text-center">
          <h1 className="text-4xl md:text-6xl font-normal tracking-tighter text-white">
            Let My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Work Speak</span>
          </h1>
        </div>

        {/* Tabs and Content Section with proper beam spacing */}
        <div className="max-w-7xl mx-auto mt-12 px-4 md:px-8 pl-12 md:pl-8">
          <Suspense fallback={<div>Loading...</div>}>
            <WorkPageClient 
              initialCategory={initialCategory}
              categories={categories}
              projects={projects}
            />
          </Suspense>
        </div>
        
        {/* Footer with proper beam spacing */}
        <Footer />
      </TracingBeam>
    </div>
  );
}