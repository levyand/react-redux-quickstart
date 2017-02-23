import * as React from "react";

// tslint:disable-next-line:interface-name
export interface GreetingProps {
    name: string;
    count: number;
}

export const Greeting: React.StatelessComponent<GreetingProps> = props => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h3>The current count is {props.count}</h3>
        </div>
    );
};
