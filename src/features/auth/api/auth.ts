import { useMutation } from "@tanstack/react-query";
import { AuthError } from "firebase/auth";


import { MutationConfig } from "@/lib/query-client";
import { signIn } from "@/lib/firebase/auth";


type SiginInOptions = {
  config?: MutationConfig<typeof signIn, AuthError>
}

export const useSiginIn = ({ config }: SiginInOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: signIn,
  });
};
