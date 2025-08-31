"use client";
import React from "react";
import Logo from "./Logo";
import AnimatedHamburger from "./AnimatedHamburger";
import NavbarItem from "./NavbarItem/NavbarItem";
import NavbarActions from "./NavbarActions";
import MobileDrawer from "./MobileDrawer/MobileDrawer";
import { FASHION_NAVBAR } from "@/lib/constants/navbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="bg-transparent absolute z-10 w-full">
      <nav className="text-white px-4 py-3 w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          {/* Mobile brand */}
          <div className="md:hidden">
            <Logo content="LUMIA" />
          </div>

          {/* Desktop brand */}
          <div className="hidden md:flex">
            <Logo content="LUMIA" />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center">
            {FASHION_NAVBAR.map((item, idx) => (
              <NavbarItem key={idx} item={item} />
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex gap-6">
            <NavbarActions />
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <NavbarActions />
            <AnimatedHamburger
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={FASHION_NAVBAR}
      />
    </div>
  );
};

export default Navbar;
