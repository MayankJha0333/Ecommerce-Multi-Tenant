import React from "react";
import CategoryCardV1 from "../ui/categoryCardV1";
import { CATEGORY_ITEMS } from "@/lib/constants/category";

const CategorySection = () => {
  return (
    <section className="flex justify-center items-center p-4 gap-8 h-[700px] bg-[#f7f8fc]">
      {CATEGORY_ITEMS.map((item) => (
        <CategoryCardV1 item={item} key={item.key} />
      ))}
    </section>
  );
};

export default CategorySection;
