// "use client";
// import { HeaderItems } from "@/lib/interface";
// import React, { useState, useEffect } from "react";
// import { Button } from "./button";
// import { motion, AnimatePresence } from "framer-motion";

// interface CarouselProps {
//   items: HeaderItems[];
//   autoPlay?: boolean;
//   autoPlayInterval?: number;
// }

// const Carousel: React.FC<CarouselProps> = ({
//   items,
//   autoPlay = true,
//   autoPlayInterval = 5000,
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!autoPlay) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//     }, autoPlayInterval);

//     return () => clearInterval(interval);
//   }, [autoPlay, autoPlayInterval, items.length]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="w-full h-full relative overflow-hidden rounded-b-4xl flex group">
//       {/* All Carousel Items Container */}
//       <motion.div
//         className="flex w-full h-full"
//         animate={{ x: `-${currentIndex * 100}%` }}
//         transition={{ duration: 0.6, ease: "easeInOut" }}
//       >
//         {items.map((item, index) => (
//           <div key={index} className="w-full h-full flex-shrink-0 relative">
//             {/* Background Image */}
//             <div
//               className="absolute inset-0 bg-cover bg-center"
//               style={{
//                 backgroundImage: item.image
//                   ? `url(${item.image})`
//                   : "linear-gradient(to bottom right, #60a5fa, #facc15)",
//               }}
//             />

//             {/* Wave SVG */}
//             <div className="absolute bottom-0 border-none left-0 right-0 h-24 overflow-hidden">
//               <svg
//                 viewBox="0 0 1200 90"
//                 className="absolute bottom-0 w-full h-full border-none"
//                 preserveAspectRatio="none"
//               >
//                 <path
//                   d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
//                   fill="white"
//                   className="drop-shadow-sm border-none"
//                 />
//               </svg>
//             </div>

//             {/* Content */}
//             <div className="flex z-10 py-24 w-4/5 mx-auto relative">
//               <div className="basis-[65%] w-full h-full"></div>
//               <div className="basis-[35%] h-full flex flex-col justify-center items-start">
//                 <motion.div
//                   initial={{ y: 50, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="w-full"
//                 >
//                   <motion.h1
//                     style={{
//                       fontSize: item.title.fontSize,
//                       fontWeight: item.title.fontWeight,
//                       color: item.title.color,
//                       fontFamily:
//                         "var(--font-poppins), 'Poppins', 'Inter', 'Segoe UI', system-ui, sans-serif",
//                       lineHeight: "1.1",
//                       letterSpacing: "-0.02em",
//                       textShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                     }}
//                     className="leading-tight mb-4"
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                   >
//                     {item.title.content}
//                   </motion.h1>
//                   <motion.p
//                     className="mb-6 leading-relaxed"
//                     style={{
//                       color: item.description.color,
//                       fontSize: item.description.fontSize,
//                       fontWeight: item.description.fontWeight,
//                       fontFamily:
//                         "var(--font-inter), 'Inter', 'Segoe UI', system-ui, sans-serif",
//                       letterSpacing: "0.01em",
//                       textShadow: "0 1px 2px rgba(0,0,0,0.1)",
//                     }}
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                   >
//                     {item.description.content}
//                   </motion.p>
//                   <motion.div
//                     initial={{ y: 30, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.5 }}
//                   >
//                     <Button
//                       className="bg-white text-black px-8 py-3 text-sm font-semibold rounded-full hover:text-white hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
//                       style={{
//                         fontFamily:
//                           "var(--font-inter), 'Inter', 'Segoe UI', system-ui, sans-serif",
//                         letterSpacing: "0.02em",
//                       }}
//                     >
//                       Shop Now
//                     </Button>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </motion.div>

//       {/* Navigation Arrows */}
//       <motion.button
//         onClick={goToPrevious}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group/arrow"
//         aria-label="Previous slide"
//         whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)" }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ x: -50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <svg
//           className="w-5 h-5 text-white group-hover/arrow:scale-110 transition-transform duration-200"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </motion.button>

//       <motion.button
//         onClick={goToNext}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-300 group/arrow"
//         aria-label="Next slide"
//         whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.4)" }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ x: 50, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <svg
//           className="w-5 h-5 text-white group-hover/arrow:scale-110 transition-transform duration-200"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </motion.button>

//       {/* Pagination Indicators */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2"
//         initial={{ y: 30, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         {items.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-300 ${
//               index === currentIndex
//                 ? "w-8 h-2 bg-white rounded-full" // Active indicator (horizontal rectangle)
//                 : "w-2 h-2 bg-white/60 rounded-full hover:bg-white/80" // Inactive indicators (circles)
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//             whileHover={{
//               scale: 1.2,
//               backgroundColor:
//                 index === currentIndex ? "white" : "rgba(255,255,255,0.9)",
//             }}
//             whileTap={{ scale: 0.9 }}
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };
// export default Carousel;
