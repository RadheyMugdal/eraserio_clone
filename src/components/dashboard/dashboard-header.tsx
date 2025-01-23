"use client";
import { Delete, Ellipsis, FolderPlus, Pencil, Search } from "lucide-react";
import React from "react";
import FolderContextMenu from "./FolderContextMenu";
import CreateFolderButton from "./CreateFolderButton";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  const [renameFolder, setRenameFolder] = React.useState(false);
  const [removeFolder, setRemoveFolder] = React.useState(false);
  const pathname = usePathname();
  return (
    <div className=" w-full flex  items-center justify-between ">
      <div className="">
        {pathname.startsWith("/dashboard/folders") ? (
          <div className=" flex items-center gap-2  ">
            {renameFolder ? (
              <input
                className="w-40 focus:outline-none h-full text-sm  rounded-md focus:ring-1  border-2  "
                onBlur={() => setRenameFolder((prev) => !prev)}
                autoFocus
              />
            ) : (
              <p className=" ">Untitled folder</p>
            )}
            <FolderContextMenu
              setRenameFolder={setRenameFolder}
              setRemoveFolder={setRemoveFolder}
            >
              <button
                type="button"
                className=" hover:bg-secondary rounded-md p-1 "
              >
                <Ellipsis className=" w-4" />
              </button>
            </FolderContextMenu>
            <CreateFolderButton />
          </div>
        ) : null}
      </div>
      <div>
        <div className=" h-9 relative  rounded-md w-64  ">
          <Search className=" w-4  absolute -translate-y-1/2 left-2 top-1/2 text-gray-400 " />
          <input
            type="text"
            className="  focus:outline-none h-full pl-9 text-sm w-full rounded-md focus:ring-1  border-2"
            placeholder="Search files "
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
