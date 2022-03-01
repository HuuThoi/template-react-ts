import ILoginResultModel from "models/logins/login-result.model";
import { AuthenticationActionType } from "my-redux/action-types/authentication.action-type";


export interface IAuthenticate {
    type: AuthenticationActionType.AUTHENTICATE,
    payload?: ILoginResultModel 
}

export interface IUnAuthenticate {
    type: AuthenticationActionType.UNAUTHENTICATED,
}

export type AuthenticationAction = IAuthenticate | IUnAuthenticate;