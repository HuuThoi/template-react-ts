import { ActionType } from "my-redux/action-types/test";

export type PayloadType = {
    amount: number;
    name: string;
}

type DepositAction = {
    type: ActionType.DEPOSIT,
    payload: PayloadType
}

type WithdrawAction = {
    type: ActionType.WITHDRAW,
    payload: PayloadType
}

type BankruptAction = {
    type: ActionType.BANKRUPT,
}

export type BankAction = DepositAction | WithdrawAction | BankruptAction;