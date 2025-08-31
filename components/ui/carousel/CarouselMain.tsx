"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeaderItems } from "@/lib";
import CarouselSlide from "./CarouselSlide";
import CarouselArrows from "./CarouselArrow";
import CarouselIndicators from "./CarouselIndicators";

interface CarouselProps {
  items: HeaderItems[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(
      () => setCurrentIndex((i) => (i + 1) % items.length),
      autoPlayInterval
    );
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-b-4xl flex group">
      {/* Slides */}
      <motion.div
        className="flex w-full h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {items.map((item, index) => (
          <CarouselSlide key={index} item={item} />
        ))}
      </motion.div>

      {/* Controls */}
      <CarouselArrows
        onPrev={() =>
          setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1))
        }
        onNext={() => setCurrentIndex((i) => (i + 1) % items.length)}
      />
      <CarouselIndicators
        count={items.length}
        currentIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
      />
    </div>
  );
};

export default Carousel;
