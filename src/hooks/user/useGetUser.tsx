"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const session = await useSession();
      if (!session) {
        throw new Error("Could not find session");
      }

      return session.data?.user;
    },
  });
};
