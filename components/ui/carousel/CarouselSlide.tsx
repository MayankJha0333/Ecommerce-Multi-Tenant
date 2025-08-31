"use client";
import { motion } from "framer-motion";
import { HeaderItems } from "@/lib";
import { Button } from "../button";

const CarouselSlide = ({ item }: { item: HeaderItems }) => (
  <div className="w-full h-full flex-shrink-0 relative">
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: item.image
          ? `url(${item.image})`
          : "linear-gradient(to bottom right, #60a5fa, #facc15)",
      }}
    />

    {/* Wave SVG */}
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
      <svg
        viewBox="0 0 1200 90"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 C400,100 600,100 1200,0 L1200,120 L0,120 Z"
          fill="white"
          className="drop-shadow-sm"
        />
      </svg>
    </div>

    {/* Content */}
    <div className="flex z-10 py-24 w-4/5 mx-auto relative h-[95%]">
      <div className="basis-[65%]" />
      <div className="basis-[35%] flex flex-col justify-center items-start">
        <motion.h1
          className="leading-tight mb-4"
          style={{
            fontSize: item.title.fontSize,
            fontWeight: item.title.fontWeight,
            color: item.title.color,
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {item.title.content}
        </motion.h1>

        <motion.p
          className="mb-6 leading-relaxed"
          style={{
            fontSize: item.description.fontSize,
            fontWeight: item.description.fontWeight,
            color: item.description.color,
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {item.description.content}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button className="bg-white text-black px-8 py-3 text-sm font-semibold rounded-full hover:text-white hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Shop Now
          </Button>
        </motion.div>
      </div>
    </div>
  </div>
);

export default CarouselSlide;
