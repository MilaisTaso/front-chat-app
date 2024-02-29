import React from 'react';
import { useAtom } from 'jotai';

import { useNavigate } from 'react-router-dom';
import { useChats } from '../state/use-chats';
import { useCustomerImage } from '@/features/chat/state/use-customer-images';
import { ChatList } from '@/features/chat/components/ChatList';
import { CreateChat } from '../components/CreateChat';
import { customerAtom } from '@/features/auth/state/use-auth';
import { Container } from '@/components/Layout/Container';
import { Spinner } from '@/components/Elements/Spinner';

export const ChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [customer] = useAtom(customerAtom);
  const chats = useChats(customer!.id);
  const customerImage = useCustomerImage(customer!.imageUrl);

  React.useEffect(() => {
    if (!customer) {
      navigate('/')
    }
  },[customer,navigate]);

  return (
    <Container className="w-4/5 border mt-16">
      <React.Suspense fallback={<Spinner />}>
        <ChatList
          chats={chats}
          customerImage={customerImage}
          customerName={customer!.name}
        />
      <CreateChat customerId={customer!.id} />
      </React.Suspense>
    </Container>
  );
};
