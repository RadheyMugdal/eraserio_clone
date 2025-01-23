import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Delete, Ellipsis, Pencil } from "lucide-react";

const FolderContextMenu = ({
  children,
  setRenameFolder,
  setRemoveFolder,
}: {
  children: React.ReactNode;
  setRenameFolder: React.Dispatch<React.SetStateAction<boolean>>;
  setRemoveFolder: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className=" w-fit text-sm p-2 flex flex-col gap-2 ">
        <button
          className=" flex gap-2 items-center cursor-pointer hover:bg-secondary px-2 py-1 rounded-md "
          onClick={() => setRenameFolder((prev) => !prev)}
        >
          <Pencil className=" w-3" />
          <p>Rename</p>
        </button>
        <button
          className=" flex gap-2 items-center cursor-pointer hover:bg-secondary px-2 py-1 rounded-md "
          onClick={() => setRemoveFolder((prev) => !prev)}
        >
          <Delete className=" w-3" />
          <p>Remove folder</p>
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default FolderContextMenu;
