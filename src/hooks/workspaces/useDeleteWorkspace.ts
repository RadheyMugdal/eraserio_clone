import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteWorkspace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.delete(`/api/workspaces/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to delete workspace");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
  });
};
