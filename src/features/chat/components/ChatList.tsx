import React from 'react';
import clsx from 'clsx';
import { Container } from '@/components/Layout/Container';
import { Chats } from '../state/use-chats';

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
        className={clsx('flex flex-col justify-center items-center gap-4', className)}
      >
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="border border-gray-200 rounded-lg p-4 flex items-center space-x-4 w-4/5"
          >
            <img
              src={customerImage}
              alt="profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold">{customerName}</p>
              <p className="text-gray-600">{chat.data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
