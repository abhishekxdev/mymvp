"use client";

export default function About() {
    return (
        <div className="h-screen w-screen flex flex-col justify-start p-16 relative bg-black overflow-hidden">
            {/* Background Grid Overlay */}
            <div className="absolute inset-0 bg-white"></div>

            {/* Content Container */}
            <div className="max-w-6xl w-full mx-auto z-10">
                <div className="flex absolute top-10 flex-col gap-4 intersect:motion-translate-y-in-100 intersect:motion-rotate-in-45 intersect:motion-blur-in-sm">
                    <h1 className="text-black text-5xl md:text-6xl xl:text-7xl font-bold tracking-tighter font-sans">
                        About
                    </h1>
                </div>
            </div>
        </div>
    );
}
