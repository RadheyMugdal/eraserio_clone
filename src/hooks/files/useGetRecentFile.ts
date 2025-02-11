import { useQuery } from "@tanstack/react-query";
import type { Files } from "@prisma/client";
import axios from "axios";
export const useGetRecentFile = (filename: string) => {
  return useQuery<Files[]>({
    queryKey: ["files", filename],
    queryFn: async () => {
      const res = await axios.post(`/api/files?filename=${filename}`);
      if (res.status !== 200) {
        throw new Error("Failed to get recent files");
      }
      return res.data;
    },
  });
};
