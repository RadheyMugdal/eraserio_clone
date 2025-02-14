import React from "react";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className=" w-full h-screen">{children}</main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
