"use client";
import clsx from "clsx";
import { ChevronRight, FilePlus2, FolderPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarFolder = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div
        className={clsx(
          " flex items-center justify-between text-sm  cursor-pointer hover:bg-secondary rounded-md p-2",
          {
            "bg-secondary": pathname.startsWith("/dashboard/folders"),
          }
        )}
      >
        <div className=" flex gap-2">
          <button
            type="button"
            onClick={(e: any) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            <ChevronRight className={clsx("w-4 h-4", { "rotate-90": open })} />
          </button>
          <Link href={"/dashboard/folders/1"}>Untitled Folder</Link>
        </div>
      </div>
      <div
        className={clsx(
          "ml-4 border-l mt-1 text-sm text-gray-300 overflow-hidden transition-max-height  duration-300 ease-in-out", // Ensure content is clipped when collapsed
          {
            "animate-accordion-down": open,
            "animate-accordion-up hidden": !open,
          }
        )}
      >
        {children}
        <div className=" p-2 ml-3  cursor-pointer hover:bg-secondary rounded-md">
          File
        </div>
      </div>
    </div>
  );
};

export default SidebarFolder;
