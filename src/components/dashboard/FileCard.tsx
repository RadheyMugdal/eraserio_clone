import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Edit, Ellipsis, File, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Files } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";

interface FileCardProps {
  file: Files;
  handleRenameFile: (id: string) => void;
  handleDeleteFile: (id: string) => void;
}

const FileCard: React.FC<FileCardProps> = ({
  file,
  handleRenameFile,
  handleDeleteFile,
}) => {
  const lastEdited = formatDistanceToNow(new Date(file.updatedAt));
  const router = useRouter();
  return (
    <Card
      className=" bg-card  max-w-md border-2  cursor-pointer"
      onClick={() => router.push(`/file/${file.id}`)}
    >
      <CardHeader>
        <CardTitle className=" text-lg flex gap-3 items-center">
          <File className=" w-4 h-4" />
          {file.name}
        </CardTitle>
        <CardDescription className=" flex items-center justify-between ">
          Updated {lastEdited} ago
          <DropdownMenu>
            <DropdownMenuTrigger className=" hover:bg-primary rounded-md  hover:text-primary-foreground px-1">
              <Ellipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" p-2">
              <DropdownMenuItem
                className=" cursor-pointer   flex items-center "
                onClick={(e) => {
                  e.stopPropagation();
                  handleRenameFile(file.id);
                }}
              >
                <Edit />
                Rename File
              </DropdownMenuItem>
              <DropdownMenuItem
                className=" cursor-pointer flex items-center "
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFile(file.id);
                }}
              >
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
