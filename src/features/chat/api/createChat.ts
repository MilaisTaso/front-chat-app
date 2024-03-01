import { useMutation } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

import { toast } from 'react-toastify';
import { storeData } from '@/lib/firebase/database';
import { MutationConfig } from '@/lib/query-client';

export type Chat = {
  data: {
    content: string;
    customerId: string;
    createdAt: string;
  };
};

export type useCreateChatOptions = {
  path: string;
  config?: MutationConfig<typeof storeData<Chat>, FirebaseError>;
};

export const useCreateChat = ({ config, path }: useCreateChatOptions) => {
  return useMutation({
    ...config,
    mutationFn: (newChat) => {
      return storeData<Chat>(newChat, path);
    },
    onSuccess: () => {
      toast.success('メッセージの作成に成功しました');
    },
    onError: (err) => {
      toast.error('メッセージの作成に失敗しました')
      console.log(err.code);
      throw err;
    },
  });
};
