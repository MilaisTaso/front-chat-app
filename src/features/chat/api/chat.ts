import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { storeData } from '@/lib/firebase/database';
import { MutationConfig, queryClient } from '@/lib/query-client';

export type Chat = {
  data: {
    content: string;
    customerId: string;
  }
};

export type useCreateChatOptions = {
  path: string
  config?: MutationConfig<typeof storeData<Chat>, FirebaseError>;
};

export const useCreateChat = ({ config, path }: useCreateChatOptions) => {
  return useMutation({
    ...config,
    mutationFn:  (newChat) => {
      return storeData<Chat>(newChat, path);
    },
    onMutate: (newChat) => {
      // todo 楽観的更新処理を追加する
      queryClient.cancelQueries();
    },
    // todo inValidateQueries()でキャッシュを最新にする処理を追加する
    onSuccess: () => {},
    // todo 楽観的更新によって追加したデータを消去しつつrefetchする勝利を追加する
    onError: () => {}
  });
};
