import { Navbar } from "@/components/marketing/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black overflow-hidden">
        <Navbar/>
        {children}
    </div>
  );
}
