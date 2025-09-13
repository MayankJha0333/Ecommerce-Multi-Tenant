"use client";
import React from "react";
import Image from "next/image";
import { CategoryItem } from "@/lib/interface";
import { motion } from "framer-motion";

interface CategoryCardV1Props {
  item: CategoryItem;
}

export const CategoryCardV1 = ({ item }: CategoryCardV1Props) => {
  return (
    <motion.div
      className="shadow-md rounded-2xl h-fit bg-white origin-center" // origin-center ensures zoom from middle
      whileHover={{
        scale: 1.03, // zooms the whole card + shadow
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <div className="basic-product-card relative overflow-hidden rounded-2xl flex justify-center items-end">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover z-[1] transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <motion.div
          className="absolute inset-0 bg-black z-[2] rounded-2xl"
          initial={{ opacity: 0, scale: 0.75 }}
          whileHover={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <p className="uppercase text-lg font-extrabold z-10 pb-6 text-white font-sans">
          {item.title}
        </p>
      </div>

      {/* Custom fields */}
      <div className="flex justify-evenly my-4">
        <div className="text-center">
          <p className="font-bold">{item.customFields[0].fieldValue}</p>
          <p className="text-xs">{item.customFields[0].displayName}</p>
        </div>
        <div className="border-l border-gray-300 pl-4 text-center">
          <p className="font-bold">{item.customFields[1].fieldValue}</p>
          <p className="text-xs">{item.customFields[1].displayName}</p>
        </div>
      </div>
    </motion.div>
  );
};
