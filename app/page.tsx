import { Header } from "@/components/header";
import StoreHighlights from "@/components/storeHighlight/StoreHighlights";
import { Navbar } from "@/components/navigation";
import CategorySection from "@/components/category/CategorySection";
import ProudctofDay from "@/components/section/ProudctofDay";

export default function Home() {
  return (
    <div className="font-sans h-full w-full overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Header />
      <StoreHighlights />
      <div className="bg-[#f7f8fc]">
        <CategorySection />
        <ProudctofDay />
      </div>
    </div>
  );
}
