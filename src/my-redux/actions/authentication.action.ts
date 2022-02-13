import { AuthenticationActionType } from "my-redux/action-types/authentication.action-type";


export interface IAuthenticate {
    type: AuthenticationActionType.AUTHENTICATE
}

export interface IUnAuthenticate {
    type: AuthenticationActionType.UNAUTHENTICATED
}

export type AuthenticationAction = IAuthenticate | IUnAuthenticate;