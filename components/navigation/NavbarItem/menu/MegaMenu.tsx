"use client";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { NavbarItem } from "@/lib";

interface MegaMenuProps {
  item: NavbarItem;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ item }) => {
  if (!item.isMegaMenu || !item.children) return null;

  return (
    <DropdownMenuContent
      align="start"
      className="w-fit p-6 flex gap-6 border shadow-xl"
      sideOffset={8}
    >
      {/* Left section */}
      <div className="flex gap-6">
        {item.children.slice(0, 3).map((category) => (
          <div key={category.key} className="space-y-3">
            <h3 className="font-extrabold text-sm py-1 uppercase tracking-wide">
              {category.label}
            </h3>
            <div className="space-y-2">
              {category.children?.map((child) => (
                <DropdownMenuItem key={child.key} asChild>
                  <Link
                    href={child.path || "#"}
                    className="text-sm text-black hover:text-gray-900 block py-1 cursor-pointer"
                  >
                    {child.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right section */}
      {item.megaMenuData?.dealOfTheDay && (
        <div className="inline-flex bg-blue-50 p-3 rounded-lg relative overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: item.megaMenuData.dealOfTheDay.imageUrl
                ? `url(${item.megaMenuData.dealOfTheDay.imageUrl})`
                : "linear-gradient(to bottom right, #60a5fa, #facc15)",
            }}
          />
          <div className="text-center space-y-3 flex flex-col cursor-pointer h-full z-10">
            <h2
              className={`text-xs font-semibold uppercase leading-[1.4em] mt-2 mb-4 ${item.megaMenuData.dealOfTheDay.titleColor}`}
            >
              {item.megaMenuData.dealOfTheDay.title}
            </h2>
            <h3
              className={`font-bold uppercase leading-[1.4em] ${item.megaMenuData.dealOfTheDay.subtitleColor}`}
            >
              {item.megaMenuData.dealOfTheDay.subtitle}
            </h3>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-full text-xs font-medium hover:bg-blue-700 mt-auto transition-colors">
              {item.megaMenuData.dealOfTheDay.buttonText}
            </button>
          </div>
        </div>
      )}
    </DropdownMenuContent>
  );
};

export default MegaMenu;
