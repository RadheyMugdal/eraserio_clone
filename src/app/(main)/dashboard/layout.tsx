import React from "react";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { NavActions } from "@/components/dashboard/nav-actions";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DashboardHeader from "@/components/dashboard/dashboard-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className=" w-full h-full">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
