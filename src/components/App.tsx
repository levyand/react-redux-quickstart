import * as React from "react";

import { AppGreeting } from "../containers/AppGreeting";
import { NameInput } from "../containers/NameInput";
import { Counter } from "./Counter";

export const App: React.StatelessComponent<undefined> = props => {
    return (
        <div className="container">
            <AppGreeting />
            <NameInput />
            <Counter />
        </div>
    );
};
