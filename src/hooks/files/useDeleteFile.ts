import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteFile = (
  setOpenDeleteFileDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
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
    },
    onError: (error) => {
      setOpenDeleteFileDialog(false);
    },
  });
};
