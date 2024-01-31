import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  AuthError,
  signOut,
} from 'firebase/auth';

import { auth } from './settings';


export const signIn = async (): Promise<User> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    throw new Error('test error')
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential!.accessToken;
    return result.user;
  } catch (error) {
    const authError = error as AuthError;
    console.error('Authentication error:', authError.message);
    throw authError;
  }
};

export const logOut = async (): Promise<void> => {
  await signOut(auth);
};
