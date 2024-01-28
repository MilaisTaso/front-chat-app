import { doc, getDoc, setDoc, DocumentData } from "firebase/firestore";
import { db } from '@/lib/firebase/settings';

export async function getData<T>(collectionPath: string): Promise<T | null> {
  const docRef = doc(db, collectionPath);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;
  
  return docSnap.data() as T;
}

export async function createData<T extends DocumentData>(collectionPath: string, data: T): Promise<T> {
  const docRef = doc(db, collectionPath);
  await setDoc(docRef, data);
  return data;
}
