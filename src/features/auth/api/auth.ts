import { useMutation } from '@tanstack/react-query';
import { AuthError } from 'firebase/auth';

import { toast } from 'react-toastify';
import { MutationConfig } from '@/lib/query-client';
import { signIn, logOut } from '@/lib/firebase/auth';

type SignInOptions = {
  config?: MutationConfig<typeof signIn, AuthError>;
};

type SignOutOptions = {
  config?: MutationConfig<typeof logOut, AuthError>
}

export const useSignIn = ({ config }: SignInOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: signIn,
    onSuccess: () => {
    },
    onError: () => {
      toast.error('ログインに失敗しました');
    },
  });
};

export const useSignOut = ({config}: SignOutOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: logOut,
    onSuccess: () => {
      toast.success('ログアウトしました')
    }
  })
}
