import { Reducer } from "redux";

import { NameAction } from "../actions";
import * as Actions from "../constants/ActionTypes";

const nameReducer: Reducer<string> = ((state: string = "", action: NameAction) => {
    switch (action.type) {
        case Actions.UPDATE_NAME:
            return action.name;
        default:
            return state;
    }
});

export default nameReducer;
