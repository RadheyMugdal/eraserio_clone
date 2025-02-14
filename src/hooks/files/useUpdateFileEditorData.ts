import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateFileEditorData = (id: string) => {
  return useMutation({
    mutationKey: ["updateFileEditorData", id],
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const res = await axios.patch(`/api/file/${id}`, {
        canvas_data: data,
        id: id,
      });
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data.files;
    },
  });
};
