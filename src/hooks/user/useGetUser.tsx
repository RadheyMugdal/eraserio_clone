"use client";
import { useQuery } from "@tanstack/react-query";
import { getSession, useSession } from "next-auth/react";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const session = await getSession();
      if (!session) {
        throw new Error("Could not find session");
      }

      return session.user;
    },
  });
};
