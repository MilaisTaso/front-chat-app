import { getDatabase, push, ref } from "firebase/database";
import { FirebaseError } from "firebase/app";

export const storeData = async<T> (collectionPath: string, data: T ) => {
  try {
    const db = getDatabase();
    const dbRef = ref(db, collectionPath)
    await push(dbRef,data)
  } catch (err) {
    throw err as FirebaseError
  }
}