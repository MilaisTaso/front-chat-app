import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  AuthError,
} from 'firebase/auth';

import app from '@/firebase/app';

const auth = getAuth(app);
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

// signIn関数はUserCredentialを返すか、エラーをスローする
async function signIn(): Promise<UserCredential> {
  try {
    const result = await signInWithPopup(auth, provider);
    return result;
  } catch (error) {
    // エラーがAuthError型であることを保証する
    if (error instanceof Error) {
      const authError = error as AuthError;
      console.error("Authentication error:", authError.message);
      throw authError;
    } else {
      throw new Error("Unknown error during authentication");
    }
  }
}

export default signIn;