"use client";

import {
  ChevronRight,
  FilePlus2,
  FolderOpen,
  Folders,
  GalleryHorizontalEnd,
  Grid2x2,
  Plus,
  type LucideIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarFolder from "../sidebar/SidebarFolder";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <SidebarMenu className=" p-2">
      <Link
        href={"/dashboard/all"}
        className={clsx(
          " flex gap-2 items-center hover:bg-secondary p-3 rounded-lg  border cursor-pointer  ",
          {
            "bg-secondary": pathname === "/dashboard/all",
          }
        )}
      >
        <GalleryHorizontalEnd className=" w-4 h-4 " />
        <p className=" text-sm leading-none">All Files</p>
      </Link>
      <div className=" mt-5 p-1">
        <div className=" flex justify-between items-center">
          <p className=" text-xs text-gray-300">TEAM FOLDERS</p>
          <Plus className=" w-4 h-4 hover:bg-secondary cursor-pointer p-[1px] text-gray-300 hover:text-white " />
        </div>
        <div className=" mt-3  flex gap-2 flex-col ">
          <SidebarFolder>
            <SidebarFolder >
              <SidebarFolder >
                <SidebarFolder/>  
              </SidebarFolder>
            </SidebarFolder>
          </SidebarFolder>
        </div>
      </div>
    </SidebarMenu>
  );
}
