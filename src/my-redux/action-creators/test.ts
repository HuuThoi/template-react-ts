import { BankAction, PayloadType } from '../actions/test';
import { Dispatch } from "redux"
import { ActionType } from "my-redux/action-types/test"

export const depositMoney = (data: PayloadType) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({ type: ActionType.DEPOSIT, payload: data })
    }
}

export const withdrawMoney = (data: PayloadType) => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({ type: ActionType.WITHDRAW, payload: data })
    }
}

export const bankrupt = () => {
    return (dispatch: Dispatch<BankAction>) => {
        dispatch({ type: ActionType.BANKRUPT})
    }
}