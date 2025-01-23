"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis, Folder } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import FolderContextMenu from "@/components/dashboard/FolderContextMenu";

const page = () => {
  const [renameFolder, setRenameFolder] = React.useState(false);
  const [removeFolder, setRemoveFolder] = React.useState(false);
  const router = useRouter();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" w-12"></TableHead>
            <TableHead className=" w-1/2">Name</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Edited</TableHead>
            <TableHead>Author</TableHead>
            <TableHead className=" w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            className=" cursor-pointer"
            onClick={() => {
              router.push("/dashboard/folders/2");
            }}
          >
            <TableCell>
              <Folder className=" w-4" />
            </TableCell>
            <TableCell className="font-medium">
              {renameFolder ? (
                <input
                  className="w-40 focus:outline-none h-full text-sm  rounded-md focus:ring-1  border-2  "
                  onBlur={() => setRenameFolder((prev) => !prev)}
                  autoFocus
                />
              ) : (
                <span>INV001</span>
              )}
            </TableCell>
            <TableCell>22 min ago</TableCell>
            <TableCell>12 min ago</TableCell>
            <TableCell>
              <Avatar className=" text-xs">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <FolderContextMenu
                setRemoveFolder={setRemoveFolder}
                setRenameFolder={setRenameFolder}
              >
                <button
                  type="button"
                  className="hover:bg-secondary p-1 rounded-md"
                >
                  <Ellipsis className=" w-4 text-gray-400 hover:text-white" />
                </button>
              </FolderContextMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
