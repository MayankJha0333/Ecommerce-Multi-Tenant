"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { NavbarItem } from "@/lib";
import { usePathname } from "next/navigation";

const SimpleNavLink = ({ item }: { item: NavbarItem }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <Link href={item.path || "#"}>
      <motion.div
        className={`relative font-medium text-[15px] tracking-wide cursor-pointer `}
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
        <motion.div
          className="absolute inset-0 bg-gray-100 rounded-md -z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ opacity: 0.1, scale: 1, transition: { duration: 0.2 } }}
        />
      </motion.div>
    </Link>
  );
};

export default SimpleNavLink;
