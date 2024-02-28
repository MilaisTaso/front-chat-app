import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { ProtectedLayout } from '@/components/Layout/ProtectedLayout';

import { useChats } from '../state/use-chats';
import { useCustomerImage } from '@/features/chat/state/use-customer-images';
import { ChatList } from '@/features/chat/components/ChatList';
import { CreateChat } from '../components/CreateChat';
import { customerAtom } from '@/features/auth/state/use-auth';
import { Container } from '@/components/Layout/Container';

export const ChatPage: React.FC = () => {
  const [customer] = useAtom(customerAtom);
  const navigate = useNavigate();
  const chats = useChats(customer!.id);
  const customerImage = useCustomerImage(customer!.imageUrl);

  useEffect(() => {
    if (!customer) {
      navigate('/');
    }
  }, [customer, navigate]);

  return (
    <ProtectedLayout className='flex flex-col justify-center'>
      <Container className='w-4/5 border mt-16'>
        <ChatList
          chats={chats}
          customerImage={customerImage}
          customerName={customer!.name}
        />
        <CreateChat customerId={customer!.id} />
      </Container>
    </ProtectedLayout>
  );
};
