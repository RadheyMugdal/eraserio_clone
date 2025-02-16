import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "../use-toast";
export const useRenameFile = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationKey: ["renameFile"],
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      const response = await axios.patch(`/api/file/${id}`, {
        name,
      });
      return response.data.file;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
      toast({
        title: "File renamed successfully",
        description: "Your file has been renamed successfully",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error renaming file",
        description: "Something went wrong while renaming your file",
        variant: "destructive",
      });
    },
  });
};
