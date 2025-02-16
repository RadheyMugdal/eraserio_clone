"use client";
import { type LucideIcon } from "lucide-react";

import { SidebarMenu } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
