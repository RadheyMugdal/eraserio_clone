"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ExcalidrawComponent from "@/components/Excalidraw";
import dynamic from "next/dynamic";
import Tiptap from "@/components/workspace/Tiptap";
import { Edit, Ellipsis, File, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

let Editor = dynamic(() => import("@/components/workspace/Editor"), {
  ssr: false,
});
const page = () => {
  const [content, setContent] = useState({});
  return (
    <main className=" w-screen flex flex-col  h-screen ">
      <header className=" flex p-4 border-b  justify-between  items-center">
        <div className=" flex items-center gap-2">
          <p className=" font-bold">Untitled file</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className=" flex items-center">
                <Ellipsis className=" w-6 " />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Edit /> Rename workspace
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Tabs defaultValue="Both" className="">
          <TabsList>
            <TabsTrigger value="Document">Document</TabsTrigger>
            <TabsTrigger value="Both">Both</TabsTrigger>
            <TabsTrigger value="Canvas">Canvas</TabsTrigger>
          </TabsList>
        </Tabs>
        <div></div>
      </header>
      <div className=" flex-1">
        <ResizablePanelGroup direction="horizontal" className=" w-full">
          <ResizablePanel defaultSize={40} minSize={30}>
            <div className=" w-full h-full ">
              <Tiptap />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={60} minSize={30}>
            <div className=" w-full h-full ">
              <ExcalidrawComponent />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default page;
