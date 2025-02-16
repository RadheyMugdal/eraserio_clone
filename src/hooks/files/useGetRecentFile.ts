import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useGetRecentFile = (
  filename: string,
  page: string,
  pageSize: string
) => {
  return useQuery({
    queryKey: ["files", filename, page],
    queryFn: async () => {
      const res = await axios.get(
        `/api/file?filename=${filename}&page=${page}&pageSize=${pageSize}`
      );
      console.log(res);

      if (res.status !== 200) {
        throw new Error("Failed to get recent files");
      }
      return res.data;
    },
  });
};
