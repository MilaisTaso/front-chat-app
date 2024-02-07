import { doc, getDoc, setDoc, DocumentData } from "firebase/firestore";
import { db } from '@/lib/firebase/settings';

export const getData = async <T>(collectionPath: string): Promise<T | null> => {
  const docRef = doc(db, collectionPath);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;
  
  return docSnap.data() as T;
};

export const createData = async <T extends DocumentData>(collectionPath: string, data: T): Promise<T> => {
  const docRef = doc(db, collectionPath);
  await setDoc(docRef, data);
  return data;
};
