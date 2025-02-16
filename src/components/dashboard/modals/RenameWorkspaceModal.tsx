import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRenameWorkspace } from "@/hooks/workspaces/useRenameWorkspace";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchama = z.object({
  name: z.string().min(3, "Name is too short").max(20, "Name is too long"),
});

interface RenameWorkspaceModalProps {
  openRenameWorkspaceDialog: boolean;
  setOpenRenameWorkspaceDialog: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const RenameWorkspaceModal: React.FC<RenameWorkspaceModalProps> = ({
  openRenameWorkspaceDialog,
  setOpenRenameWorkspaceDialog,
  id,
}) => {
  const renameWorkspaceMutation = useRenameWorkspace(
    setOpenRenameWorkspaceDialog
  );
  const onSubmit = () => {
    const { name } = form.getValues();
    renameWorkspaceMutation.mutate({ workspaceId: id, name });
    setOpenRenameWorkspaceDialog(false);
  };
  const form = useForm<z.infer<typeof formSchama>>({
    resolver: zodResolver(formSchama),
  });
  return (
    <Dialog
      open={openRenameWorkspaceDialog}
      onOpenChange={setOpenRenameWorkspaceDialog}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename workspace</DialogTitle>
          <div className=" flex flex-col ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter workspace name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className=" w-full"
                  disabled={renameWorkspaceMutation.isPending}
                >
                  {renameWorkspaceMutation.isPending && (
                    <Loader2 className=" animate-spin  w-4 h-4" />
                  )}
                  Rename workspace
                </Button>
              </form>
            </Form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RenameWorkspaceModal;
