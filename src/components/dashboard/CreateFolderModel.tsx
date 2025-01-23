import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CreateFolderModel = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className=" w-[30%]  ">
        <DialogHeader className=" flex gap-4">
          <DialogTitle>Create new Folder</DialogTitle>
          <DialogDescription className=" flex flex-col items-center gap-6">
            <Input placeholder="Enter Folder name" />
            <Button>Create Folder</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFolderModel;
