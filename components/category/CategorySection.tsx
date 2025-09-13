import React from "react";
import { CATEGORY_ITEMS } from "@/lib/constants/category";
import { CategoryCardV1 } from "../ui/CategoryCardV1";

const CategorySection = () => {
  return (
    <section className="flex justify-center items-center p-4 gap-8 h-[700px]">
      {CATEGORY_ITEMS.map((item) => (
        <CategoryCardV1 item={item} key={item.key} />
      ))}
    </section>
  );
};

export default CategorySection;
