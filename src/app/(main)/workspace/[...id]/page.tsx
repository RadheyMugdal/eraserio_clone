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

let Editor = dynamic(() => import("@/components/workspace/Editor"), {
  ssr: false,
});
const page = () => {
  const [content, setContent] = useState({});
  return (
    <main className=" w-screen flex flex-col  h-screen ">
      <header className=" flex p-4 border-b  justify-center items-center">
        <Tabs defaultValue="Both" className="">
          <TabsList>
            <TabsTrigger value="Document">Document</TabsTrigger>
            <TabsTrigger value="Both">Both</TabsTrigger>
            <TabsTrigger value="Canvas">Canvas</TabsTrigger>
          </TabsList>
        </Tabs>
      </header>
      <div className=" flex-1">
        <ResizablePanelGroup direction="horizontal" className=" w-full">
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className=" w-full h-full ">
              <Tiptap />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50} minSize={30}>
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
