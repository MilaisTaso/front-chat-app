import React from 'react';
import clsx from 'clsx';
import { Container } from '@/components/Layout/Container';
import { Chats } from '@/features/chat/api/getChats';
import { Card } from '@/features/chat/components/Card';
import { ChatResponse } from '../api/getChats';
import { Customer } from '@/features/auth/types/customer';

type ChatListProps = {
  chats: Chats;
  customer: Customer
  customerImage: string
  className?: string;
};

export const ChatList: React.FC<ChatListProps> = ({
  chats,
  customer,
  customerImage,
  className = '',
}) => {
  return (
    <Container display="direction" className="mx-auto w-full my-4">
      <div
        className={clsx(
          'flex flex-col justify-center items-center gap-4',
          className,
        )}
      >
        {chats.map((chat: ChatResponse) => (
          <Card
            key={chat.id}
            imagePath={customerImage}
            subtitle={customer.name}
            content={chat.data.content}
          />
        ))}
      </div>
    </Container>
  );
};
