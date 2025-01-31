"use client";

import * as React from "react";
import { Briefcase, ChevronDown, LogOut, Plus, Users } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="  bg-secondary w-full h-full  p-1 rounded-md">
            <Button
              variant={"secondary"}
              className=" bg-secondary w-full h-full flex  items-center justify-between"
            >
              <div className=" flex gap-2">
                <Briefcase className=" w-4 h-4" />
                <span className=" font-bold text-lg">ExcalText</span>
              </div>
              <ChevronDown className=" w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 rounded-lg"
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className=" flex  items-center w-full gap-3 p-1">
                <Users className="  w-4 h-4" />
                Join or create workspace
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className=" flex  items-center w-full gap-3 p-1">
                <LogOut className="  w-4 h-4" />
                Logout
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className=" flex gap-3 items-center">
                <div className=" rounded-full w-8 h-8 bg-gray-700 flex items-center justify-center">
                  R
                </div>
                <div className=" flex flex-col text-xs">
                  <p className="  font-bold">Radhey</p>
                  <p>Radhey@gmail.com</p>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
