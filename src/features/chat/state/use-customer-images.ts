import { useState, useEffect, useMemo } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { FirebaseError } from 'firebase/app';
import { storage } from '@/lib/firebase/settings';

export const useCustomerImage = (imagePath: string) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const storageRef = useMemo(() => ref(storage, imagePath), [imagePath]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getDownloadURL(storageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('Error downloading image:', error);
        throw error as FirebaseError;
      }
    };

    fetchImage();
  }, [storageRef]);

  return imageUrl;
};
