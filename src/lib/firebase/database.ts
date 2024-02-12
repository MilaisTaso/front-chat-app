import { getDatabase, push, ref } from "firebase/database";
import { FirebaseError } from "firebase/app";

export const storeData = async<T> (data: T, collectionPath: string): Promise<void> => {
  try {
    const db = getDatabase();
    const dbRef = ref(db, collectionPath)
    await push(dbRef,data)
  } catch (err) {
    throw err as FirebaseError
  }
}