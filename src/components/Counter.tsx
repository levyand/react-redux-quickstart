import * as React from "react";

import { AddButton, SubtractButton } from "../containers/CounterButtons";

export const Counter: React.StatelessComponent<undefined> = props => {
    return (
        <div>
            <AddButton>+</AddButton>
            <SubtractButton>-</SubtractButton>
        </div>
    );
};
