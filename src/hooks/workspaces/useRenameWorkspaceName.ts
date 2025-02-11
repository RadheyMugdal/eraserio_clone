import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export const useRenameWorkspaceName = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      workspaceId,
      name,
    }: {
      workspaceId: string;
      name: string;
    }) => {
      const res = await axios.patch(`/api/workspaces/${workspaceId}`, { name });
      if (res.status !== 200) {
        throw new Error("Failed to rename workspace");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
  });
};
