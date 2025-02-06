"use client";
import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Briefcase,
  Calendar,
  CircleDollarSign,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/nav-main";
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
import { Button } from "../ui/button";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="border-r-0 h-full flex flex-col justify-between"
      {...props}
    >
      <SidebarHeader>
        <h1 className=" flex text-2xl   gap-3 items-center font-bold">
          <Briefcase />
          ExcalText
        </h1>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarRail />
      <SidebarContent className=" ">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home className=" w-3 h-3" />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <CircleDollarSign className=" w-3 h-3" />
                  Pricing
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <p className=" text-xs ">WORKSPACES</p>
        <div className=" w-full h-96 flex  gap-2 flex-col ">
          <div className=" p-2 text-xs flex items-center gap-4   border hover:bg-secondary cursor-pointer">
            <Briefcase className=" w-4 h-4" />
            Workspace 1
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter>
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
