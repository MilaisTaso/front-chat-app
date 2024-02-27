import { doc, getDoc, setDoc, DocumentData } from "firebase/firestore";
import { store } from '@/lib/firebase/settings';

export const getData = async <T>(collectionPath: string): Promise<T | null> => {
  const docRef = doc(store, collectionPath);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;
  
  return docSnap.data() as T;
};

export const createData = async <T extends DocumentData>(collectionPath: string, data: T): Promise<T> => {
  const docRef = doc(store, collectionPath);
  await setDoc(docRef, data);
  return data;
};
