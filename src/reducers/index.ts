import { combineReducers, Reducer } from "redux";

import NameReducer from "./NameReducer";
import CountReducer from "./CountReducer";
import { AppState } from "../interfaces/AppState";

const appReducer: Reducer<AppState> = combineReducers<AppState>({
    name: NameReducer,
    count: CountReducer
});

export default appReducer;
