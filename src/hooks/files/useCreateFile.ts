import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export const useCreateFile = () => {
  const router = useRouter();
  return useMutation({
    mutationKey: ["createFile"],
    mutationFn: async ({
      name,
      workspaceId,
    }: {
      name: string;
      workspaceId: string;
    }) => {
      const res = await axios.post("/api/file", { name, workspaceId });
      if (res.status !== 200) {
        throw new Error(res.data);
      }
      return res.data.files;
    },
    onSuccess(data, variables, context) {},
  });
};
