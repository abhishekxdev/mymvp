export default function VideoSkeleton() {
  return (
    <div className="w-full h-full animate-pulse bg-slate-800 rounded-lg flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-slate-600 border-t-slate-400 rounded-full animate-spin"></div>
    </div>
  )
} 