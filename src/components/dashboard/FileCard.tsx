import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Edit, Ellipsis, File, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FileCard = () => {
  return (
    <Card className=" bg-secondary  max-w-md">
      <CardHeader>
        <CardTitle className=" text-lg flex gap-3 items-center">
          <File className=" w-4 h-4" />
          Untitled File
        </CardTitle>
        <CardDescription className=" flex items-center justify-between ">
          Updated about 2 sec ago
          <DropdownMenu>
            <DropdownMenuTrigger>
              <button className=" hover:bg-primary rounded-md  hover:text-primary-foreground px-1">
                <Ellipsis />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" p-2">
              <DropdownMenuItem className=" cursor-pointer   flex items-center ">
                <Edit />
                Rename File
              </DropdownMenuItem>
              <DropdownMenuItem className=" cursor-pointer flex items-center ">
                <Trash2 />
                Delete File
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FileCard;
