import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetWorkspaceData = (id: string) => {
  return useQuery({
    queryKey: ["workspaceFiles", id],
    queryFn: async () => {
      const res = await axios.get(`/api/workspace/${id}`);
      if (res.status !== 200) {
        throw new Error("Failed to get workspace files");
      }
      console.log(res.data.data);

      return res.data.data;
    },
  });
};
