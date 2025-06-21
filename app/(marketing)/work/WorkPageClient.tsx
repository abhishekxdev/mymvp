"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  src: string;
  alt: string;
  category: string;
}

interface WorkPageClientProps {
  initialCategory: string;
  categories: string[];
  projects: Project[];
}

export function WorkPageClient({ initialCategory, categories, projects }: WorkPageClientProps) {
  const [activeTab, setActiveTab] = useState(initialCategory);

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      {/* Responsive Tabs List */}
      <div className="flex justify-center mb-8">
        <TabsList className="bg-transparent border border-neutral-800 rounded-full p-1.5 flex-wrap gap-1 h-auto">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category}
              className="data-[state=active]:bg-white data-[state=active]:text-black text-neutral-400 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      
      {/* Content Grid - Responsive */}
      <TabsContent value={activeTab} className="mt-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-colors duration-300">
              <div className="relative w-full aspect-video bg-black">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}