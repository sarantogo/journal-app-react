import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleAuthProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const registerWithEmailandPassword = async (
  userEmail,
  password,
  displayName
) => {
  try {
    const result = await createUserWithEmailAndPassword(
      firebaseAuth,
      userEmail,
      password
    );
    const { email, photoURL, uid } = result.user;
    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const loginWithEmailAndPassword = async (userEmail, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      userEmail,
      password
    );
    const { uid, email, photoURL, displayName } = result.user;
    return {
      ok: true,
      uid,
      email,
      photoURL,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const firebaseLogout = async () => {
  return await firebaseAuth.signOut();
};
