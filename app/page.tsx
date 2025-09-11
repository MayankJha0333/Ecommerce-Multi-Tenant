import { Header } from "@/components/header";
import StoreHighlights from "@/components/header/StoreHighlights";
import { Navbar } from "@/components/navigation";

export default function Home() {
  return (
    <div className="font-sans h-full w-full">
      <Navbar />
      <Header />
      <StoreHighlights />
    </div>
  );
}
