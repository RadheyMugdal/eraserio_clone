"use client";
import { Command, Edit, Ellipsis, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useGetWorkspaceData } from "@/hooks/workspaces/useGetWorkspaceData";
import { useParams } from "next/navigation";
import FileCard from "@/components/dashboard/FileCard";

const page = () => {
  const id = useParams().id;
  const { data, isLoading } = useGetWorkspaceData(id as string);
  if (isLoading) return null;
  return (
    <div className=" w-full flex flex-col h-full">
      <div className=" flex p-4 gap-4 w-full items-center">
        <SidebarTrigger />
        <div className=" flex  items-center gap-3">
          <Command className=" w-4 h-4" />
          <h1>{data.name}</h1>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className=" flex items-center">
            <Ellipsis className=" w-6 " />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Edit /> Rename workspace
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 /> Delete workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" flex-1  p-4 space-y-6">
        <div className=" flex w-full justify-between items-center">
          <div className=" w-[25%] relative  bg-secondary rounded-md overflow-hidden ">
            <Search className=" w-4 h-4 absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              type="text"
              name=""
              placeholder="Search files.."
              className=" bg-secondary w-full text-md p-2 ml-8 outline-none ring-0 "
              id=""
            />
          </div>
          <Button>
            <Plus className=" w-4 h-4" />
            Create new File
          </Button>
        </div>
        <div className=" grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 ">
          {data.files.map((file: any) => (
            <FileCard file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
