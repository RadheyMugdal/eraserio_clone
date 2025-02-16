import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteWorkspace } from "@/hooks/workspaces/useDeleteWorkspace";
import { Loader2, Trash2 } from "lucide-react";

interface DeleteWorkspaceModalProps {
  openDeleteWorkspaceDialog: boolean;
  setOpenDeleteWorkspaceDialog: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const DeleteWorkspaceModal: React.FC<DeleteWorkspaceModalProps> = ({
  openDeleteWorkspaceDialog,
  setOpenDeleteWorkspaceDialog,
  id,
}) => {
  const deleteWorkspaceMutation = useDeleteWorkspace(
    setOpenDeleteWorkspaceDialog
  );
  const handleDelete = () => {
    deleteWorkspaceMutation.mutate(id);
  };
  return (
    <Dialog
      open={openDeleteWorkspaceDialog}
      onOpenChange={setOpenDeleteWorkspaceDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename a file</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this workspace?
          </DialogDescription>
        </DialogHeader>
        <div className=" w-full flex justify-end gap-4">
          <Button
            variant={"destructive"}
            onClick={handleDelete}
            disabled={deleteWorkspaceMutation.isPending}
          >
            {deleteWorkspaceMutation.isPending ? (
              <Loader2 className=" animate-spin  w-4 h-4" />
            ) : (
              <Trash2 />
            )}
            Delete
          </Button>
          <Button>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteWorkspaceModal;
