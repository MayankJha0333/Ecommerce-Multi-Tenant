"use client";
import { motion } from "framer-motion";

interface Props {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

const CarouselIndicators = ({ count, currentIndex, onSelect }: Props) => (
  <motion.div
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    {Array.from({ length: count }).map((_, index) => (
      <motion.button
        key={index}
        onClick={() => onSelect(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={`transition-all duration-300 ${
          index === currentIndex
            ? "w-8 h-2 bg-white rounded-full"
            : "w-2 h-2 bg-white/60 rounded-full hover:bg-white/80"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
    ))}
  </motion.div>
);

export default CarouselIndicators;
