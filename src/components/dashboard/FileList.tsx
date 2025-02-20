import React, { useState } from "react";
import FileCard from "./FileCard";
import { Button } from "../ui/button";
import RenameFileModal from "./modals/RenameFileModal";
import DeleteFileModal from "./modals/DeleteFileModal";

interface FileListProps {
  files: any;
}
const FileList: React.FC<FileListProps> = ({ files }) => {
  const [id, setId] = useState("");
  const [openRenameFileDialog, setOpenRenameFileDialog] = useState(false);
  const [openDeleteFileDialog, setOpenDeleteFileDialog] = useState(false);
  const handleRenameFile = (id: string) => {
    if (!id) return;
    setId(id);
    setOpenRenameFileDialog(true);
  };
  const handleDeleteFile = (id: string) => {
    if (!id) return;
    setId(id);
    setOpenDeleteFileDialog(true);
  };

  if (files.length === 0) {
    return (
      <div className=" w-full h-full flex items-center justify-center flex-col ">
        <div className=" mb-12 flex items-center justify-center flex-col  gap-4">
          <p className=" text-foreground/60 italic">
            {" "}
            There are no files available. Click the button below to create a new
            one.{" "}
          </p>
          <Button onClick={() => {}}>Create new file</Button>
        </div>
      </div>
    );
  }

  return (
    <div className=" grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-4 ">
      {files.map((file: any) => {
        return (
          <FileCard
            key={file.id}
            file={file}
            handleRenameFile={handleRenameFile}
            handleDeleteFile={handleDeleteFile}
          />
        );
      })}
      <RenameFileModal
        openRenameFileDialog={openRenameFileDialog}
        setRenameFileDialog={setOpenRenameFileDialog}
        id={id}
      />
      <DeleteFileModal
        openDeleteFileDialog={openDeleteFileDialog}
        setOpenDeleteFileDialog={setOpenDeleteFileDialog}
        id={id}
      />
    </div>
  );
};

export default FileList;
