"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Command, Edit2Icon, Ellipsis, Search, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { formatDistanceToNow } from "date-fns";
import {
  useGetWorkspaces,
  WorkspaceResponse,
} from "@/hooks/workspaces/useGetWorkspaces";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import WorkspaceTableSkeleton from "@/components/dashboard/skeletons/WorkspaceTableSkeleton";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateNewWorkspaceModal from "@/components/dashboard/modals/CreateNewWorkspaceModal";
import DeleteWorkspaceModal from "@/components/dashboard/modals/DeleteWorkspaceModal";
import RenameWorkspaceModal from "@/components/dashboard/modals/RenameWorkspaceModal";

const page = () => {
  const [page, setPage] = useState(1);
  const pageSize = 16;
  const { data, isLoading } = useGetWorkspaces(page, pageSize);
  const router = useRouter();
  const [openCreateWorkspaceDialog, setOpenCreateWorkspaceDialog] =
    useState(false);
  const [openDeleteWorkspaceDialog, setOpenDeleteWorkspaceDialog] =
    useState(false);
  const [openRenameWorkspaceDialog, setOpenRenameWorkspaceDialog] =
    useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState<string>("");
  return (
    <main className=" p-2 flex flex-col  w-full h-full  ">
      <h1 className=" flex text-xl   gap-3 items-center font-bold">
        <SidebarTrigger />
        Workspaces
      </h1>
      <div className=" flex-1 p-4 flex flex-col gap-4">
        <div className=" flex gap-6 justify-between">
          {/* <button className=" hover:text-red-400 transition-colors">
            <Trash />
          </button> */}
          <div className=" w-[25%] relative  bg-secondary rounded-md overflow-hidden ">
            <Search className=" w-4 h-4 absolute top-1/2 left-3 -translate-y-1/2" />
            <input
              type="text"
              name=""
              placeholder="Search workspace.."
              className=" bg-secondary w-full text-md p-2 ml-8 outline-none ring-0 "
              id=""
            />
          </div>
          <Button onClick={() => setOpenCreateWorkspaceDialog(true)}>
            Create new workspace
          </Button>
        </div>
        <div className=" flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" w-[50px]"></TableHead>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Workspace name</TableHead>
                <TableHead className="">Owner</TableHead>
                <TableHead className="">Updated at</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <WorkspaceTableSkeleton />
              ) : (
                <>
                  {data?.workspaces?.map((workspace: WorkspaceResponse) => (
                    <TableRow
                      key={workspace.id}
                      className=" cursor-pointer"
                      onClick={() => {
                        router.push(`/dashboard/workspaces/${workspace.id}`);
                      }}
                    >
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-medium">
                        <Command />
                      </TableCell>
                      <TableCell>{workspace.name}</TableCell>
                      <TableCell>{workspace.user.name}</TableCell>
                      <TableCell>
                        {formatDistanceToNow(new Date(workspace.updatedAt))} ago
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <button>
                              <Ellipsis />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedWorkspace(workspace.id);
                                setOpenRenameWorkspaceDialog(true);
                              }}
                            >
                              <Edit2Icon />
                              Rename workspace
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedWorkspace(workspace.id);
                                setOpenDeleteWorkspaceDialog(true);
                              }}
                            >
                              <Trash2 />
                              Delete workspace
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem
              className=" cursor-pointer"
              onClick={() => {
                if (page > 1) setPage(page - 1);
              }}
            >
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem
              className=" cursor-pointer"
              onClick={() => setPage(page + 1)}
            >
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <CreateNewWorkspaceModal
        openCreateWorkspaceDialog={openCreateWorkspaceDialog}
        setOpenCreateWorkspaceDialog={setOpenCreateWorkspaceDialog}
      />
      <DeleteWorkspaceModal
        openDeleteWorkspaceDialog={openDeleteWorkspaceDialog}
        setOpenDeleteWorkspaceDialog={setOpenDeleteWorkspaceDialog}
        id={selectedWorkspace}
      />
      <RenameWorkspaceModal
        openRenameWorkspaceDialog={openRenameWorkspaceDialog}
        setOpenRenameWorkspaceDialog={setOpenRenameWorkspaceDialog}
        id={selectedWorkspace}
      />
    </main>
  );
};

export default page;
