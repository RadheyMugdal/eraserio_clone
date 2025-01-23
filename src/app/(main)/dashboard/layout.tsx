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
        <SidebarInset>
          <header className="flex  h-20  items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
            </div>
            
          </header>
          <div className="flex flex-1 flex-col gap-4 px-4 py-10">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default layout;
