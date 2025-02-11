"use client";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const session = await getSession();
      console.log(session);

      if (!session?.user) {
        throw new Error("Could not find session");
      }
      console.log(session);

      return session.user;
    },
    staleTime: 100 * 60 * 5,
  });
};
