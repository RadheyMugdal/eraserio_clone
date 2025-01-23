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

const page = () => {
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
          <TableRow className=" cursor-pointer">
            <TableCell>
              <Folder className=" w-4" />
            </TableCell>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>22 min ago</TableCell>
            <TableCell>12 min ago</TableCell>
            <TableCell>
              <Avatar className=" text-xs">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <button
                type="button"
                className="hover:bg-secondary p-1 rounded-md"
              >
                <Ellipsis className=" w-4 text-gray-400 hover:text-white" />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
