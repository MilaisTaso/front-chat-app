import { useEffect, useState, useMemo } from 'react';
import { onChildAdded, ref } from 'firebase/database';
import { Chat } from '../api/createChat';
import { db } from '@/lib/firebase/settings';

export type ChatResponse = {
  id: string;
  data: Chat['data'];
};

export type Chats = ChatResponse[];

export const useChats = (path: string) => {
  const dbRef = useMemo(() => ref(db, `chat/${path}`), [path]);
  const [chats, setChats] = useState<Chats>([]);

  useEffect(() => {
    const unsubscribe = onChildAdded(dbRef, async (snapshot) => {
      if (snapshot.exists()) {
        const newChats: ChatResponse = {
          id: snapshot.key!,
          data: snapshot.val().data,
        };
        setChats((prevChats) => [...prevChats, newChats]);
      } else {
        setChats((prevChats) => [...prevChats]);
      }
    });
    return () => unsubscribe();
  }, [dbRef]);

  return chats;
};
