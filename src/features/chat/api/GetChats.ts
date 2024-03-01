import React from 'react';
import { onChildAdded, ref } from 'firebase/database';
import { Chat } from '@/features/chat/api/createChat';
import { db } from '@/lib/firebase/settings';

export type ChatResponse = {
  id: string;
  data: Chat['data'];
};

export type Chats = ChatResponse[];

export const getChats = (path: string, setChats: React.Dispatch<React.SetStateAction<Chats>>) => {
  const dbRef = ref(db, `chat/${path}`);

  const unsubscribe = onChildAdded(dbRef, async (snapshot) => {
    if (snapshot.exists()) {
      const newChat: ChatResponse = {
        id: snapshot.key!,
        data: snapshot.val().data,
      };
      setChats((prevChats) => [...prevChats, newChat]);
    } else {
      console.log('No data available');
      setChats((prevChats) => [...prevChats]);
    }
  });

  return unsubscribe;
};