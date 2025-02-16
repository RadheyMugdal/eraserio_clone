import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../use-toast";

export const useRenameWorkspace = (
  setOpenRenameWorkspaceDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      workspaceId,
      name,
    }: {
      workspaceId: string;
      name: string;
    }) => {
      const res = await axios.patch(`/api/workspace/${workspaceId}`, { name });
      if (res.status !== 200) {
        throw new Error("Failed to rename workspace");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      toast({
        title: "✅ Workspace has been renamed successfully",
      });
      setOpenRenameWorkspaceDialog(false);
    },
    onError: (err) => {
      toast({
        title: "Failed to rename workspace",
        description: err.message,
      });
      setOpenRenameWorkspaceDialog(false);
    },
  });
};
