import {
  signInWithGoogle,
  registerWithEmailandPassword,
  loginWithEmailAndPassword,
  firebaseLogout,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) {
      return dispatch(logout(result.errorMessage));
    }

    return dispatch(login(result));
  };
};

export const startRegisterWithEmailandPassword = (userEmail, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, email, uid, displayName, photoURL, errorMessage } =
      await registerWithEmailandPassword(userEmail, password);
    if (!ok) return dispatch(logout({ errorMessage }));

    return dispatch(login({ email, uid, displayName, photoURL }));
  };
};

export const startLoginWithEmailAndPassword = (userEmail, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, email, photoURL, displayName, errorMessage } =
      await loginWithEmailAndPassword(userEmail, password);
    if (!ok) return dispatch(logout({ errorMessage }));

    return dispatch(login({ uid, email, displayName, photoURL }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebaseLogout();
    dispatch(logout());
  };
};
