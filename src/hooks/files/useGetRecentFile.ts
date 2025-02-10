import { PrismaClient } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

export const useGetRecentFile = () => {
  return useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const session = await getSession();
      if (!session) {
        throw new Error("Could not find session");
      }
      const prisma = new PrismaClient();
      const data = await prisma.files.findMany({
        where: {
          user_id: session.user?.id,
        },
      });
      return data;
    },
  });
};
