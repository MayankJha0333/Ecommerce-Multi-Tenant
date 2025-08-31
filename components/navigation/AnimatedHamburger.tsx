"use client";
import React from "react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const AnimatedHamburger: React.FC<AnimatedHamburgerProps> = ({
  isOpen,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-5 h-4 flex flex-col justify-center items-center cursor-pointer ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Top line */}
      <span
        className={`absolute w-5 h-0.5 bg-black transform transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
        }`}
      />

      {/* Middle line */}
      <span
        className={`absolute w-5 h-0.5 bg-black transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      />

      {/* Bottom line */}
      <span
        className={`absolute w-5 h-0.5 bg-black transform transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
        }`}
      />
    </button>
  );
};

export default AnimatedHamburger;
