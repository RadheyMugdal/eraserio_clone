"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Command, Search, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { formatDistanceToNow } from "date-fns";
import {
  useGetWorkspaces,
  WorkspaceResponse,
} from "@/hooks/workspaces/useGetWorkspaces";
import { useRouter } from "next/navigation";

const page = () => {
  const { data: workspaces, isLoading } = useGetWorkspaces();
  const router = useRouter();

  if (isLoading) return null;
  return (
    <main className=" p-2">
      <h1 className=" flex text-xl   gap-3 items-center font-bold">
        <SidebarTrigger />
        Workspaces
      </h1>
      <div className=" p-4">
        <div className=" flex gap-6 justify-end">
          <button className=" hover:text-red-400 transition-colors">
            <Trash />
          </button>
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
        </div>
        <div className=" p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className=" w-[50px]"></TableHead>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Workspace name</TableHead>
                <TableHead className="">Owner</TableHead>
                <TableHead className="">Created at</TableHead>
                <TableHead className="">Updated at</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workspaces?.map((workspace: WorkspaceResponse) => (
                <TableRow
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
                    {formatDistanceToNow(new Date(workspace.createdAt))}
                  </TableCell>
                  <TableCell>
                    {formatDistanceToNow(new Date(workspace.updatedAt))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default page;
