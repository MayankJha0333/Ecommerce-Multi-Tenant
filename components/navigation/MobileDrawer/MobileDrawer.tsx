"use client";
import { NavbarItem } from "@/lib";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronRight, ArrowLeft, X } from "lucide-react";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/lib";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavbarItem[];
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  const [history, setHistory] = useState<NavbarItem[][]>([items]);

  const currentItems = history[history.length - 1];
  const parent = history.length > 1 ? history[history.length - 2][0] : null;

  const handleItemClick = (item: NavbarItem) => {
    if (item.children && item.children.length > 0) {
      setHistory((prev) => [...prev, item.children as NavbarItem[]]);
    } else {
      onClose();
      setHistory([items]); // reset
    }
  };

  const handleBackClick = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const handleClose = () => {
    onClose();
    setHistory([items]);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent
        side="left"
        className="p-0 w-80 bg-white border-none rounded-r-xl overflow-hidden [&>button]:hidden gap-0"
      >
        {/* Header */}
        <SheetHeader className="flex flex-row items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <AnimatePresence mode="wait">
              {parent && (
                <motion.button
                  key="back-button"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleBackClick}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Back"
                >
                  <ArrowLeft size={20} className="text-gray-600" />
                </motion.button>
              )}
            </AnimatePresence>
            <SheetTitle asChild>
              <motion.span
                key={parent ? parent.label : "Menu"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className={`font-bold text-lg ${
                  parent ? "ml-2 text-gray-600" : "text-gray-800"
                }`}
              >
                {parent ? parent.label : "Menu"}
              </motion.span>
            </SheetTitle>
          </div>

          {/* Custom Close Button */}
          <motion.button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            aria-label="Close menu"
          >
            <X size={16} className="text-gray-600" />
          </motion.button>
        </SheetHeader>

        {/* Body */}
        <div className="p-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.nav
              key={history.length}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="flex flex-col h-full"
            >
              {currentItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  <motion.button
                    role="menuitem"
                    onClick={() => handleItemClick(item)}
                    className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    <span
                      className={`font-medium px-2 ${
                        item.key === "home" ? "text-green-500" : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.children && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight size={16} className="text-gray-400" />
                      </motion.div>
                    )}
                  </motion.button>
                  {index < currentItems.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05 + 0.1,
                      }}
                      className="border-b border-gray-100 mx-4"
                    />
                  )}
                </motion.div>
              ))}
            </motion.nav>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-0 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-gradient-to-r from-green-400 to-green-500 p-2 w-full"
          >
            <div className="flex justify-start gap-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileDrawer;
