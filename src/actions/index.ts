import { Action, ActionCreator } from "redux";

import * as Types from "../constants/ActionTypes";

// tslint:disable-next-line:interface-name
export interface NameAction {
    type: string;
    name: string;
}

export const updateName: ActionCreator<NameAction> = ((name: string) => {
    return {
        type: Types.UPDATE_NAME,
        name: name
    };
});

export const increment: ActionCreator<Action> = (() => {
    return {
        type: Types.INCREMENT
    };
});

export const decrement: ActionCreator<Action> = (() => {
    return {
        type: Types.DECREMENT
    };
});
