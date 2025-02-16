import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { useState } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { WorkspaceResponse } from "@/hooks/workspaces/useGetWorkspaces";
import { useCreateFile } from "@/hooks/files/useCreateFile";
import { Loader2, Plus } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchama = z.object({
  name: z.string().min(3, "Name is too short").max(20, "Name is too long"),
  workspaceId: z.string(),
});

interface CreateNewFileModalProps {
  openCreateNewFileDialog: boolean;
  setOpenCreateNewFileDialog: React.Dispatch<React.SetStateAction<boolean>>;
  workspaces: WorkspaceResponse[];
  isWorkspaceLoading: boolean;
  handleCreateNewWorkspace: () => void;
}
const CreateNewFileModal: React.FC<CreateNewFileModalProps> = ({
  openCreateNewFileDialog,
  setOpenCreateNewFileDialog,
  workspaces,
  isWorkspaceLoading,
  handleCreateNewWorkspace,
}) => {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState("");
  const [filename, setFilename] = useState("");
  const createNewfileMutation = useCreateFile();
  const form = useForm<z.infer<typeof formSchama>>({
    resolver: zodResolver(formSchama),
  });
  const handleCreateNewFile = () => {
    createNewfileMutation.mutate({
      name: filename,
      workspaceId: selectedWorkspaceId,
    });
  };
  const onSubmit = (data: z.infer<typeof formSchama>) => {
    createNewfileMutation.mutate(data);
  };
  if (isWorkspaceLoading) return;
  return (
    <Dialog
      open={openCreateNewFileDialog}
      onOpenChange={setOpenCreateNewFileDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new file</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className=" flex flex-col gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="workspaceId"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                          {...field}
                        >
                          <SelectTrigger className="">
                            <SelectValue placeholder="Select workspace" />
                          </SelectTrigger>
                          <SelectContent className=" max-h-48 overflow-y-scroll flex  flex-col gap-4 ">
                            {workspaces.length === 0 && (
                              <div className=" p-2">
                                <p className=" text-xs italic">
                                  There are no workspaces available.Click the
                                  button below to create a new one.
                                </p>
                              </div>
                            )}
                            {workspaces?.map((workspace) => (
                              <SelectItem
                                key={workspace.id}
                                value={workspace.id}
                                className=" my-2"
                              >
                                {workspace.name}
                              </SelectItem>
                            ))}
                            <button
                              className=" text-xs w-full p-2 bg-secondary rounded-md flex items-center justify-center cursor-pointer gap-2"
                              onClick={handleCreateNewWorkspace}
                            >
                              {" "}
                              <Plus className=" w-4 h-4" />
                              Create new workspace
                            </button>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter file name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className=" w-full"
                  disabled={createNewfileMutation.isPending}
                >
                  {createNewfileMutation.isPending ? (
                    <>
                      <Loader2 className=" animate-spin  w-4 h-4" />
                      Create new file
                    </>
                  ) : (
                    "Create new file"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewFileModal;
