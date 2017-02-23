import { Reducer, Action } from "redux";

import * as Actions from "../constants/ActionTypes";

const countReducer: Reducer<number> = ((state: number = 0, action: Action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return state + 1;
        case Actions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
});

export default countReducer;
