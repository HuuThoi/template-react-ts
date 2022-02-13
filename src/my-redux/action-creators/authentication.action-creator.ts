import { AuthenticationActionType } from '../action-types/authentication.action-type';
import { AuthenticationAction } from "my-redux/actions/authentication.action"
import { Dispatch } from "redux"
import CryptoJS from "crypto-js";
import { AuthenticationKey } from 'constants/authen-key';

export const login = () => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    const value = CryptoJS.AES.encrypt("true", AuthenticationKey.IS_AUTHENTICATED).toString();
    await window.localStorage.setItem('authenticated', value);
    dispatch({ type: AuthenticationActionType.AUTHENTICATE });
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    await window.localStorage.removeItem('authenticated');
    dispatch({ type: AuthenticationActionType.UNAUTHENTICATED });
  }
}

export const checkAuthentication = () => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    const auth = await window.localStorage.getItem("authenticated");
    const formattedAuth = typeof auth === "string" ?
      JSON.parse(auth) :
      null;

    formattedAuth ? dispatch({ type: AuthenticationActionType.AUTHENTICATE })
      : dispatch({ type: AuthenticationActionType.UNAUTHENTICATED });
  };
}