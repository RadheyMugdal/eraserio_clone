import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Workspaces } from "@prisma/client";

export type WorkspaceResponse = Omit<Workspaces, "userId"> & {
  user: {
    name: string;
  };
};

export const useGetWorkspaces = (
  page: number,
  pageSize: number,
  name?: string
) => {
  return useQuery({
    queryKey: ["workspaces", name],
    queryFn: async () => {
      const res = await axios.get(
        `/api/workspace?name=${name}?page=${page}&pageSize=${pageSize}`
      );
      if (res.status !== 200) {
        throw new Error("Failed to get workspaces");
      }

      return res.data;
    },
  });
};
