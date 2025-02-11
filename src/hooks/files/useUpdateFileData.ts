import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateFileData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: {
        canvas_data?: JSON;
        text_data?: JSON;
        name?: string;
      };
    }) => {
      const res = await axios.patch(`/api/file/${id}`, data);
      if (res.status !== 200) {
        throw new Error("Failed to update file");
      }
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });
};
