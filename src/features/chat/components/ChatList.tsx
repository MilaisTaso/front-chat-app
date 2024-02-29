import React from 'react';
import clsx from 'clsx';
import { Container } from '@/components/Layout/Container';
import { Chats } from '../state/use-chats';
import { Card } from '@/features/chat/components/Card';

type ChatListProps = {
  chats: Chats;
  customerImage: string;
  customerName: string;
  className?: string;
};

export const ChatList: React.FC<ChatListProps> = ({
  chats,
  customerImage,
  customerName,
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
        {chats.map((chat) => (
          <Card
            id={chat.id}
            imagePath={customerImage}
            subtitle={customerName}
            content={chat.data.content}
          />
        ))}
      </div>
    </Container>
  );
};
