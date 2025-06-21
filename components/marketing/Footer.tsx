import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 md:px-8 pl-12 md:pl-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white">
            Your Idea, Our Expertise<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Lets Make It Happen.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="https://calendly.com/vishnoiabhishek29/30min" passHref>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-neutral-200 rounded-full text-base font-normal"
              >
                Book an Intro Call
              </Button>
            </Link>
            <Link href="#work" passHref>
              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-full text-base font-normal text-white border border-white/10 bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-black/90 hover:via-gray-900/90 hover:to-black/90 active:scale-[0.98]"
              >
                View Work <Play className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-20 text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} MVP Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}