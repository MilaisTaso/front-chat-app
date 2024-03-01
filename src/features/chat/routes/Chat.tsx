import React, { useState } from 'react';
import { useAtom } from 'jotai';

import { useNavigate } from 'react-router-dom';
import { Chats, getChats } from '@/features/chat/api/getChats';
import { ChatList } from '@/features/chat/components/ChatList';
import { CreateChat } from '../components/CreateChat';
import { customerAtom } from '@/features/auth/state/use-auth';
import { Container } from '@/components/Layout/Container';
import { Spinner } from '@/components/Elements/Spinner';
import { getStorageUrl } from '@/lib/firebase/storage';

export const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [customer] = useAtom(customerAtom);
  const [chats, setChats] = React.useState<Chats>([]);
  const [imageUrl, setImageUrl] = useState<string>('');

  React.useEffect(() => {
    let unsubscribe: () => void;
    if (customer == null) {
      navigate('/');
    }

    const fetchImageUrl = async () => {
      if (customer && customer.imageUrl) {
        try {
          const url = await getStorageUrl(customer.imageUrl); // 非同期関数をawaitして結果を待ちます
          setImageUrl(url); // 結果をステートにセット
        } catch (error) {
          console.error('Failed to load image URL:', error);
          throw error;
        }
      }
    };

    if (customer) {
      unsubscribe = getChats(customer.id, setChats);
      fetchImageUrl(); // 非同期関数を呼び出します
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [customer, navigate]);

  return (
    <Container className="w-4/5 border mt-16">
      {customer === undefined ? (
        <Spinner />
      ) : (
        <>
          <ChatList
            chats={chats}
            customer={customer!}
            customerImage={imageUrl}
          />
          <CreateChat customerId={customer!.id} />
        </>
      )}
    </Container>
  );
};
