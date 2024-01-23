import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  AuthError,
  signOut,
} from 'firebase/auth';

const auth = getAuth();

export const signIn = async (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    const authError = error as AuthError;
    console.error('Authentication error:', authError.message);
    throw authError;
  }
};

export const logOut = async (): Promise<void> => {
  await signOut(auth);
};
