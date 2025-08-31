"use client";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NavbarItem } from "@/lib";

interface DropdownMenuRecursiveProps {
  item: NavbarItem;
}

const DropdownMenuRecursive: React.FC<DropdownMenuRecursiveProps> = ({
  item,
}) => (
  <DropdownMenuContent align="start" className="w-56 p-2" sideOffset={8}>
    {item.children?.map((child) => (
      <DropdownMenuItem key={child.key} asChild>
        {child.children?.length ? (
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center justify-between">
              <span>{child.label}</span>
              <ChevronRight className="h-4 w-4" />
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              {child.children.map((grandChild) => (
                <DropdownMenuItem key={grandChild.key} asChild>
                  <Link href={grandChild.path || "#"}>{grandChild.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        ) : (
          <Link href={child.path || "#"} className="w-full">
            {child.label}
          </Link>
        )}
      </DropdownMenuItem>
    ))}
  </DropdownMenuContent>
);

export default DropdownMenuRecursive;
