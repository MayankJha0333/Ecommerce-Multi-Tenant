"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WomenJean from "@/assets/category/women_jeans.png";

const ProductCardV1 = () => {
  return (
    <div
      className="p-2.5 basic-card shadow-md rounded-2xl bg-white font-sans"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <motion.div
        className="h-fit origin-center" // origin-center ensures zoom from middle
        whileHover={{
          scale: 1.03, // zooms the whole card + shadow
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <div className="flex justify-between items-center pb-4 px-3 pt-1.5">
          <p className="text-sm font-semibold">Colvin Klien</p>
          <p className="font-semibold">₹1000</p>
        </div>
        <div className="basic-product-card relative overflow-hidden rounded-2xl flex justify-center items-end">
          <Image
            src={WomenJean}
            alt={"product"}
            fill
            className="object-cover z-[1] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="px-3 py-1.5 text-center font-semibold">
          <p className="text-sm">Short denim shorts</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCardV1;
