import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useRenameFile } from "@/hooks/files/useRenameFile";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchama = z.object({
  name: z.string().min(3, "Name is too short").max(20, "Name is too long"),
});

interface RenameFileModalProps {
  openRenameFileDialog: boolean;
  setRenameFileDialog: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const RenameFileModal: React.FC<RenameFileModalProps> = ({
  openRenameFileDialog,
  setRenameFileDialog,
  id,
}) => {
  const renameFileMutation = useRenameFile();
  const onSubmit = () => {
    const { name } = form.getValues();
    renameFileMutation.mutate({ id, name });
    setRenameFileDialog(false);
  };
  const form = useForm<z.infer<typeof formSchama>>({
    resolver: zodResolver(formSchama),
  });
  return (
    <Dialog open={openRenameFileDialog} onOpenChange={setRenameFileDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename a file</DialogTitle>
          <div className=" flex flex-col ">
            {/* <Form {...form}>
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
                        <Input placeholder="Enter file name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className=" w-full"
                  disabled={renameFileMutation.isPending}
                >
                  {renameFileMutation.isPending && (
                    <Loader2 className=" animate-spin  w-4 h-4" />
                  )}
                  Rename file
                </Button>
              </form>
            </Form> */}
            Hello testings
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RenameFileModal;
