import { ref, getDownloadURL } from 'firebase/storage';
import { FirebaseError } from 'firebase/app';
import { storage } from '@/lib/firebase/settings';

export const getStorageUrl = async (imagePath: string): Promise<string> => {
  const storageRef = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error('Error downloading image:', error);
    throw error as FirebaseError;
  }
};
