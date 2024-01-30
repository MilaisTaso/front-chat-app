import { useMutation } from "@tanstack/react-query";
import { AuthError } from "firebase/auth";


import { MutationConfig } from "@/lib/query-client";
import { signIn } from "@/lib/firebase/auth";


type SignInOptions = {
  config?: MutationConfig<typeof signIn, AuthError>
}

export const useSignIn = ({ config }: SignInOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: signIn,
  });
};
