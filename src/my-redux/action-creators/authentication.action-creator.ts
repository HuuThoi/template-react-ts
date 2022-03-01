import { AuthenticationActionType } from '../action-types/authentication.action-type';
import { AuthenticationAction } from "my-redux/actions/authentication.action"
import { Dispatch } from "redux"
import CryptoJS from "crypto-js";
import { IS_AUTHENTICATED } from 'utilities/constants';
import ILoginResultModel from 'models/logins/login-result.model';

export const login = (data: ILoginResultModel) => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    const value = CryptoJS.AES.encrypt("true", IS_AUTHENTICATED).toString();

    await window.localStorage.setItem('authenticated', value);
    await window.localStorage.setItem('token', data.accessToken);
    await window.localStorage.setItem('basicInfo', JSON.stringify(data.basicInfo));

    dispatch({ type: AuthenticationActionType.AUTHENTICATE, payload: data });
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AuthenticationAction>) => {
    await window.localStorage.removeItem('authenticated');
    await window.localStorage.removeItem('token');
    await window.localStorage.removeItem('basicInfo');

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