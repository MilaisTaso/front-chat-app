import { useMutation } from '@tanstack/react-query';

import { FirebaseError } from 'firebase/app';
import { MutationConfig } from '@/lib/query-client';
import { getStorageUrl } from '@/lib/firebase/storage';

type SignInOptions = {
  config?: MutationConfig<typeof getStorageUrl, FirebaseError>;
};

export const useSignIn = ({ config }: SignInOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: getStorageUrl,
    onError: (err) => {
      console.log(err.code)
      throw err
    },
  });
};
