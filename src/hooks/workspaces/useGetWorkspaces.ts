import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetWorkspaces = (name: string) => {
  return useQuery({
    queryKey: ["workspaces", name],
    queryFn: async () => {
      const res = await axios.get(`/api/workspaces?name=${name}`);
      if (res.status !== 200) {
        throw new Error("Failed to get workspaces");
      }
      return res.data;
    },
  });
};
