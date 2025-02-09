import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Edit, Ellipsis, File, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FileCard = () => {
  return (
    <Card className=" bg-card  max-w-md border-2">
      <CardHeader>
        <CardTitle className=" text-lg flex gap-3 items-center">
          <File className=" w-4 h-4" />
          Untitled File
        </CardTitle>
        <CardDescription className=" flex items-center justify-between ">
          Updated about 2 sec ago
          <DropdownMenu>
            <DropdownMenuTrigger className=" hover:bg-primary rounded-md  hover:text-primary-foreground px-1">
              <Ellipsis />
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
