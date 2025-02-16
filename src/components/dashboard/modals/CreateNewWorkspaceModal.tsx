import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useCreateNewWorkspace } from "@/hooks/workspaces/useCreateNewWorkspace";
import { Loader2 } from "lucide-react";

interface CreateNewWorkspaceModalProps {
  openCreateWorkspaceDialog: boolean;
  setOpenCreateWorkspaceDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateNewWorkspaceModal: React.FC<CreateNewWorkspaceModalProps> = ({
  openCreateWorkspaceDialog,
  setOpenCreateWorkspaceDialog,
}) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const createNewWorkspaceMutation = useCreateNewWorkspace();
  const handleCreateNewWorkspace = () => {
    createNewWorkspaceMutation.mutate({ name: workspaceName });
    setOpenCreateWorkspaceDialog(false);
  };
  return (
    <Dialog
      open={openCreateWorkspaceDialog}
      onOpenChange={setOpenCreateWorkspaceDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="">Create new workspace</DialogTitle>
        </DialogHeader>
        <div className=" flex flex-col gap-6 my-3  ">
          <Input
            placeholder="Enter workspace name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
          <Button
            onClick={handleCreateNewWorkspace}
            disabled={createNewWorkspaceMutation.isPending}
          >
            {createNewWorkspaceMutation.isPending && (
              <Loader2 className=" animate-spin  w-4 h-4" />
            )}
            Create Workspace
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewWorkspaceModal;
