import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetFileData = (id: string) => {
  return useQuery({
    queryKey: ["file", id],
    queryFn: async () => {
      const res = await axios.get(`/api/file/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to get file");
      }
      return res.data.file;
    },
  });
};
