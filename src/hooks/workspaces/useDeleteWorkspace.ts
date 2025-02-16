import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useToast } from "../use-toast";

export const useDeleteWorkspace = (
  setDeleteWorkspaceDialog: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.delete(`/api/workspace/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to delete workspace");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
      setDeleteWorkspaceDialog(false);
      toast({
        title: "✅ Workspace has been deleted successfully",
      });
    },
    onError: (err) => {
      toast({
        title: "Failed to delete workspace",
        description: err.message,
      });
    },
  });
};
