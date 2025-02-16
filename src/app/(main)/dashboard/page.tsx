"use client";
import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import FileCard from "@/components/dashboard/FileCard";

import { useGetRecentFile } from "@/hooks/files/useGetRecentFile";
import { useState } from "react";
import { useCreateFile } from "@/hooks/files/useCreateFile";
import { useGetWorkspaces } from "@/hooks/workspaces/useGetWorkspaces";
import CreateNewWorkspaceModal from "@/components/dashboard/modals/CreateNewWorkspaceModal";
import CreateNewFileModal from "@/components/dashboard/modals/CreateNewFileModal";
import RenameFileModal from "@/components/dashboard/modals/RenameFileModal";
import DeleteFileModal from "@/components/dashboard/modals/DeleteFileModal";
import { PaginationWithLinks } from "@/components/ui/pagination-with-link";
import FileCardSkeleton from "@/components/dashboard/skeletons/FileCardSkeleton";
import { useSearchParams } from "next/navigation";

const page = () => {
  const page = useSearchParams().get("page") || "1";
  const pageSize = "16";
  const [filename, setFilename] = useState("");
  const { data, isLoading } = useGetRecentFile(filename, page, pageSize);
  const [openCreateNewFileDialog, setOpenCreateNewFileDialog] = useState(false);
  const [openRenameFileDialog, setOpenRenameFileDialog] = useState(false);
  const [openDeleteFileDialog, setOpenDeleteFileDialog] = useState(false);
  const [selectedFileId, setSelectedFileId] = useState<string>("");
  console.log(data);

  const {
    data: workspacesData,
    isLoading: workspacesIsLoading,
    error,
  } = useGetWorkspaces();
  const [openCreateWorkspaceDialog, setOpenCreateWorkspaceDialog] =
    useState(false);
  const createNewFileMutate = useCreateFile();
  const handleCreateNewFile = () => {
    setOpenCreateNewFileDialog(true);
  };
  const handleCreateNewWorkspace = () => {
    setOpenCreateWorkspaceDialog(true);
  };
  const handleRenameFile = (id: string) => {
    if (!id) return;
    setSelectedFileId(id);
    setOpenRenameFileDialog(true);
  };
  const handleDeleteFile = (id: string) => {
    if (!id) return;
    setSelectedFileId(id);
    setOpenDeleteFileDialog(true);
  };
  return (
    <div className=" w-full flex flex-col h-full">
      <div className=" flex p-4 gap-4 w-full items-center">
        <div className=" flex  items-center gap-3">
          <SidebarTrigger />
          <h1>Recent files</h1>
        </div>
      </div>
      <div className=" flex-1 flex flex-col  p-4 space-y-6">
        <div className=" flex w-full justify-between items-center">
          <div className=" w-[25%] relative  bg-secondary rounded-md overflow-hidden ">
            <Search className=" w-4 h-4 absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              type="text"
              name=""
              placeholder="Search files.."
              className=" bg-secondary w-full text-md p-2 ml-8 outline-none ring-0 "
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              id=""
            />
          </div>
          <Button onClick={handleCreateNewFile}>
            <Plus className=" w-4 h-4" />
            Create new File
          </Button>
        </div>
        {isLoading ? (
          <FileCardSkeleton />
        ) : (
          <div className=" flex-1 ">
            {data?.files?.length !== 0 ? (
              <div className=" grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 ">
                {data?.files?.map((file: any) => (
                  <FileCard
                    key={file.id}
                    file={file}
                    handleRenameFile={handleRenameFile}
                    handleDeleteFile={handleDeleteFile}
                  />
                ))}
              </div>
            ) : (
              <div className=" w-full h-full flex items-center justify-center flex-col ">
                <div className=" mb-12 flex items-center justify-center flex-col  gap-4">
                  <p className=" text-foreground/60 italic">
                    {" "}
                    There are no files available. Click the button below to
                    create a new one.{" "}
                  </p>
                  <Button onClick={handleCreateNewFile}>Create new file</Button>
                </div>
              </div>
            )}
          </div>
        )}
        <PaginationWithLinks
          page={page ? parseInt(page) : 1}
          pageSize={20}
          totalCount={data?.totalRecords || 16}
        />
      </div>
      <CreateNewFileModal
        handleCreateNewWorkspace={handleCreateNewWorkspace}
        openCreateNewFileDialog={openCreateNewFileDialog}
        setOpenCreateNewFileDialog={setOpenCreateNewFileDialog}
        workspaces={workspacesData}
        isWorkspaceLoading={workspacesIsLoading}
      />
      <CreateNewWorkspaceModal
        openCreateWorkspaceDialog={openCreateWorkspaceDialog}
        setOpenCreateWorkspaceDialog={setOpenCreateWorkspaceDialog}
      />
      <RenameFileModal
        openRenameFileDialog={openRenameFileDialog}
        setRenameFileDialog={setOpenRenameFileDialog}
        id={selectedFileId}
      />
      <DeleteFileModal
        openDeleteFileDialog={openDeleteFileDialog}
        setOpenDeleteFileDialog={setOpenDeleteFileDialog}
        id={selectedFileId}
      />
    </div>
  );
};

export default page;
