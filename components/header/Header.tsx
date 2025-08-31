import { HEADER_ITEMS } from "@/lib/constants/header";
import React from "react";
import { Carousel } from "@/components/ui/carousel";

const Header = () => {
  return (
    <div className="bg-white w-full h-[85vh]">
      <Carousel items={HEADER_ITEMS} />
    </div>
  );
};
export default Header;
