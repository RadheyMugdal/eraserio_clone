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
  return <SidebarMenu className=" p-2"></SidebarMenu>;
}
