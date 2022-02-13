import { ActionType } from "my-redux/action-types/test";
import { BankAction, PayloadType } from "my-redux/actions/test";

const initialState = {
    amount: 0,
    name:""
}

const bankReducer = (state = initialState, action: BankAction) =>{
    switch(action.type){
        case ActionType.DEPOSIT:{
            return {
                ...state,
                amount: state.amount + action.payload.amount
            };
        };
        case ActionType.WITHDRAW:{
            return {
                ...state,
                amount: state.amount - action.payload.amount
            };
        };
        case ActionType.BANKRUPT:
            return {
                ...state,
                amount: 0
            };
        default:
            return state;
    }
}

export default bankReducer;