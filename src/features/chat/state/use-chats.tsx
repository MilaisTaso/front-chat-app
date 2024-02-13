import { useEffect, useState, useMemo } from 'react';
import { getDatabase, onChildAdded, ref } from 'firebase/database';
import { Chat } from '../api/createChat';

export type ChatResponse = {
  id: string
  data: Chat['data']
}

export type Chats = ChatResponse[];

export const useChats = () => {
  const db = useMemo(() => getDatabase(), []);
  const dbref = useMemo(() => ref(db, 'chat'), [db]);
  const [chats, setChats] = useState<Chats>([]);

  useEffect(() => {
    const unsubscribe = onChildAdded(dbref, async (snapshot) => {
      if (snapshot.exists()) {
        const newChats: ChatResponse = {
          id: snapshot.key!,
          data: snapshot.val().data
        }
        setChats((prevChats) => [...prevChats, newChats])
      } else {
        setChats((prevChats) => [...prevChats])
      }
      
    });
    return () => unsubscribe();
  },[dbref]);

  return chats;
};
