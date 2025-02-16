"use client";
import * as React from "react";
import { Briefcase, Command, Home, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { NavUser } from "./nav-user";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

// This is sample data.
const data = [
  {
    title: "Home",
    route: "/dashboard",
    id: "Home",
    icon: Home,
  },
  {
    title: "Workspaces",
    route: "/dashboard/workspaces",
    id: "Workspaces",
    icon: Command,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Sidebar
      className="border-r-0 h-full flex flex-col justify-between"
      {...props}
    >
      <SidebarHeader>
        <h1 className=" flex text-2xl justify-center   gap-3 items-center font-bold">
          <Briefcase />
          ExcalText
        </h1>
      </SidebarHeader>
      <Separator />
      <SidebarRail />
      <SidebarContent className=" ">
        <SidebarGroup>
          <SidebarGroupContent className=" gap-0">
            <SidebarMenu className=" mt-0">
              {data.map((item) => (
                <Link href={item.route} key={item.id}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className={clsx("", {
                        " bg-sidebar-accent": pathname === item.route,
                      })}
                      onClick={() => {
                        router.push(item.route);
                      }}
                    >
                      <item.icon className=" w-3 h-3" />
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className=" rounded-md bg-secondary p-2  mb-8 flex flex-col gap-4">
          <p className=" text-xs font-bold">ExcalText Free Tier</p>
          <div>
            <Progress value={5} max={10} />
            <span className=" text-xs">5/10 files created</span>
          </div>
          <p className=" text-xs">
            Upgrade your plan for unlimited files and workspaces.
          </p>
          <Button size={"sm"}>Upgrade</Button>
        </div>
        <div className=" w-full">
          <Button className=" w-full">
            <Plus className=" w-4 h-4" />
            New Workspace
          </Button>
        </div>
        <NavUser
          user={{
            name: "John Doe",
            email: "john@doe.com",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
