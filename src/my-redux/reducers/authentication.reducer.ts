import { AuthenticationAction } from 'my-redux/actions/authentication.action';
import { AuthenticationActionType } from 'my-redux/action-types/authentication.action-type';
import CryptoJS from "crypto-js";
import { IS_AUTHENTICATED } from 'utilities/constants';

const initialState: Record<string, any>= {
    isAuthenticated: CryptoJS.AES.decrypt(window.localStorage.getItem("authenticated") ?? "", IS_AUTHENTICATED).toString(CryptoJS.enc.Utf8) == "true" ? true : false,
    token: window.localStorage.getItem("token") ? CryptoJS.AES.decrypt(window.localStorage.getItem("token") ?? "", IS_AUTHENTICATED) : null
}

const authenticationReducer = (state = initialState, action: AuthenticationAction) => {
    switch (action.type) {
        case AuthenticationActionType.UNAUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: false,
                token: null
            };
        };
        case AuthenticationActionType.AUTHENTICATE: {
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            };
        };
        default:
            return state;
    }
}

export default authenticationReducer;