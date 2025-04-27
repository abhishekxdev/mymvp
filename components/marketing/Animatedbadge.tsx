import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex min-h-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5  text-base  transition-all ease-in hover:cursor-pointer  border-white/5 bg-neutral-900 hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-neutral-400 hover:text-neutral-600 hover:duration-300 ">
          <span className="flex items-center gap-2"> ✨ Slot's Available for May </span>
          <ArrowRightIcon className="ml-1 size-3 motion-preset-wobble " />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
