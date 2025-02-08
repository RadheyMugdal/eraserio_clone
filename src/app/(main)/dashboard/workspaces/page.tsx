import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Command, Search, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { SidebarTrigger } from "@/components/ui/sidebar";

const page = () => {
  return (
    <main className=" p-2">
      <h1 className=" flex text-xl   gap-3 items-center font-bold">
        <SidebarTrigger />
        {/* <Command /> */}
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
            <TableCaption>A list of your recent invoices.</TableCaption>
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
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">
                  <Command />
                </TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default page;
