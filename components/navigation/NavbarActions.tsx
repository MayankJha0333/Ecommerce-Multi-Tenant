"use client";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Filter,
  MessageCircle,
  Search,
  User,
  Heart,
  ShoppingBag,
} from "lucide-react";

const NavbarActions = () => {
  const actions = [
    { icon: <Filter size={20} />, label: "Filter" },
    { icon: <MessageCircle size={20} />, label: "Chat" },
    { icon: <Search size={20} />, label: "Search" },
    { icon: <User size={20} />, label: "Account" },
    { icon: <Heart size={20} />, label: "Wishlist" },
    { icon: <ShoppingBag size={20} />, label: "Cart" },
  ];

  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        {actions.map((a, idx) => (
          <Tooltip key={idx}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer hover:text-gray-600"
              >
                {a.icon}
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{a.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default NavbarActions;
