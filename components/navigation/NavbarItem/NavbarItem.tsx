"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarItem } from "@/lib";
import MegaMenu from "./menu/MegaMenu";
import DropdownMenuRecursive from "./menu/DropDownMenuRecursive";
import SimpleNavLink from "./SimpleNavLink";

const AnimatedNavbarItem = ({ item }: { item: NavbarItem }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  if (item.children?.length && item.isMegaMenu) {
    return (
      <div className="px-3.5 py-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div
              className={`relative font-medium text-[15px] tracking-wide cursor-pointer flex items-center gap-1 ${
                isActive ? "font-semibold" : ""
              }`}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.div
                className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full origin-left ${
                  isActive ? "bg-gray-100" : "bg-gray-300"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </DropdownMenuTrigger>
          <MegaMenu item={item} />
        </DropdownMenu>
      </div>
    );
  }

  if (item.children?.length) {
    return (
      <div className="px-3.5 py-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div
              className={`relative font-medium text-[15px] tracking-wide cursor-pointer flex items-center gap-1 `}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.div
                className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full origin-left ${
                  isActive ? "bg-gray-100" : "bg-gray-300"
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isActive ? 1 : 0 }}
                variants={{ hover: { scaleX: 1 } }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuRecursive item={item} />
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="px-3.5 py-5">
      <SimpleNavLink item={item} />
    </div>
  );
};

export default AnimatedNavbarItem;
