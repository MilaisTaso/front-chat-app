import { useMutation } from '@tanstack/react-query';
import { AuthError } from 'firebase/auth';

import { toast } from 'react-toastify';
import { MutationConfig } from '@/lib/query-client';
import { signIn } from '@/lib/firebase/auth';

type SignInOptions = {
  config?: MutationConfig<typeof signIn, AuthError>;
};

export const useSignIn = ({ config }: SignInOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: signIn,
    onSuccess: () => {
      toast.success('ログインしました');
    },
    onError: () => {
      toast.error('ログインに失敗しました');
    },
  });
};
