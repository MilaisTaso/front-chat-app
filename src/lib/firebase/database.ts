import { push, ref } from 'firebase/database';
import { FirebaseError } from 'firebase/app';
import { db } from '@/lib/firebase/settings';

export const storeData = async <T>(
  data: T,
  collectionPath: string,
): Promise<void> => {
  try {
    const dbRef = ref(db, collectionPath);
    await push(dbRef, data);
  } catch (err) {
    throw err as FirebaseError;
  }
};
