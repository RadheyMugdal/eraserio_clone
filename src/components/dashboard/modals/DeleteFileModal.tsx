import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteFile } from "@/hooks/files/useDeleteFile";
import { Trash2 } from "lucide-react";

interface DeleteFileModalProps {
  openDeleteFileDialog: boolean;
  setOpenDeleteFileDialog: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const DeleteFileModal: React.FC<DeleteFileModalProps> = ({
  openDeleteFileDialog,
  setOpenDeleteFileDialog,
  id,
}) => {
  const deleteFileMutation = useDeleteFile(setOpenDeleteFileDialog);
  const handleDelete = () => {
    deleteFileMutation.mutate(id);
  };
  return (
    <Dialog open={openDeleteFileDialog} onOpenChange={setOpenDeleteFileDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename a file</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this file?
          </DialogDescription>
        </DialogHeader>
        <div className=" w-full flex justify-end gap-4">
          <Button variant={"destructive"} onClick={handleDelete}>
            <Trash2 />
            Delete
          </Button>
          <Button>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteFileModal;
