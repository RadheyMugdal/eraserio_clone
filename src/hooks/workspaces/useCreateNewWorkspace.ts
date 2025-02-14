import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCreateNewWorkspace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["newWorkspace"],
    mutationFn: async ({ name }: { name: string }) => {
      const res = await axios.post("/api/workspace", { name });
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
  });
};
