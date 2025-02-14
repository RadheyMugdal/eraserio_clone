"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ExcalidrawComponent from "@/components/Excalidraw";
import dynamic from "next/dynamic";
import Tiptap from "@/components/workspace/Tiptap";
import { Edit, Ellipsis, Save } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useGetFileData } from "@/hooks/files/useGetFileData";
import { useParams } from "next/navigation";
import { useUpdateFileData } from "@/hooks/files/useUpdateFileData";

let Editor = dynamic(() => import("@/components/workspace/Editor"), {
  ssr: false,
});
type ViewType = "Document" | "Both" | "Canvas";
const page = () => {
  const id = useParams().id;
  const [view, setView] = useState<ViewType>("Both");
  const { data, isLoading } = useGetFileData(id as string);
  const [textEditorData, setTextEditorData] = useState<string>("");
  const [canvasData, setCanvasData] = useState<JSON>();
  const updateFileDataMutation = useUpdateFileData();
  useEffect(() => {
    if (!data) return;
    setTextEditorData(data.file_data);
    setCanvasData(data.canvas_data);
  }, [data, isLoading]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const handleSave = () => {
    updateFileDataMutation.mutate({
      id: id as string,
      data: {
        canvas_data: canvasData,
        text_data: textEditorData,
      },
    });
  };
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
        <Tabs
          defaultValue={view}
          onValueChange={(value) => setView(value as ViewType)}
        >
          <TabsList>
            <TabsTrigger value="Document">Document</TabsTrigger>
            <TabsTrigger value="Both">Both</TabsTrigger>
            <TabsTrigger value="Canvas">Canvas</TabsTrigger>
          </TabsList>
        </Tabs>
        <div>
          <Button onClick={handleSave}>
            <Save />
            Save
          </Button>
        </div>
      </header>
      <div className=" flex-1">
        <ResizablePanelGroup direction="horizontal" className=" w-full">
          {view === "Document" || view === "Both" ? (
            <>
              <ResizablePanel defaultSize={40} minSize={30}>
                <div className=" w-full h-full ">
                  <Tiptap
                    textEditorData={textEditorData}
                    setTextEditorData={setTextEditorData}
                  />
                </div>
              </ResizablePanel>
              <ResizableHandle />
            </>
          ) : null}
          {view === "Canvas" || view === "Both" ? (
            <>
              <ResizablePanel defaultSize={60} minSize={30}>
                <div className=" w-full h-full ">
                  <ExcalidrawComponent />
                </div>
              </ResizablePanel>
              <ResizableHandle />
            </>
          ) : null}
        </ResizablePanelGroup>
      </div>
    </main>
  );
};

export default page;
