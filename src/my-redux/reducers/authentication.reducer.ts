import { AuthenticationAction } from 'my-redux/actions/authentication.action';
import { AuthenticationActionType } from 'my-redux/action-types/authentication.action-type';
import { AuthenticationKey } from 'constants/authen-key';
import CryptoJS from "crypto-js";

const initialState = {
    isAuthenticated: CryptoJS.AES.decrypt(window.localStorage.getItem("authenticated") ?? "", AuthenticationKey.IS_AUTHENTICATED).toString(CryptoJS.enc.Utf8) == "true" ? true: false,
}

const authenticationReducer = (state = initialState, action: AuthenticationAction) => {
    switch (action.type) {
        case AuthenticationActionType.UNAUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: false
            };
        };
        case AuthenticationActionType.AUTHENTICATE: {
            return {
                ...state,
                isAuthenticated: true
            };
        };
        default:
            return state;
    }
}

export default authenticationReducer;