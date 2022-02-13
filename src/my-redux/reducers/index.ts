import { combineReducers } from "redux";
import authenticationReducer from "./authentication.reducer";
import bankReducer from "./bank-reducer";

const reducers = combineReducers({
    authenticationReducer: authenticationReducer,
    bankReducer: bankReducer
});

export default reducers;

export type AppState = ReturnType<typeof reducers>;