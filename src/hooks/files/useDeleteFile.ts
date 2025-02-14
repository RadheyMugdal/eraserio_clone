import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "../use-toast";

export const useDeleteFile = (
  setOpenDeleteFileDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.delete(`/api/file/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to delete file");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
      setOpenDeleteFileDialog(false);
      toast({
        title: "File deleted successfully",
        description: "Your file has been deleted successfully",
        variant: "default",
      });
    },
    onError: (error) => {
      setOpenDeleteFileDialog(false);
      toast({
        title: "Error deleting file",
        description: "Something went wrong while deleting your file",
        variant: "destructive",
      });
    },
  });
};
