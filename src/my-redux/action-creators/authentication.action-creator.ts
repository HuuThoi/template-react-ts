import { AuthenticationActionType } from '../action-types/authentication.action-type';
import { AuthenticationAction } from "my-redux/actions/authentication.action"
import { Dispatch } from "redux"
import CryptoJS from "crypto-js";
import { IS_AUTHENTICATED } from 'utilities/constants';

export const login = (token: string) => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    const value = CryptoJS.AES.encrypt("true", IS_AUTHENTICATED).toString();
   const _token = token;// CryptoJS.AES.encrypt(token, IS_AUTHENTICATED).toString();
    
    await window.localStorage.setItem('authenticated', value);
    await window.localStorage.setItem('token', _token);

    dispatch({ type: AuthenticationActionType.AUTHENTICATE, payload: _token });
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    await window.localStorage.removeItem('authenticated');
    await window.localStorage.removeItem('token');

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