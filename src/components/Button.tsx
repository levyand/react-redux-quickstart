import * as React from "react";

// tslint:disable-next-line:interface-name
export interface ButtonProps {
    onClick(): void;
}

export const Button: React.StatelessComponent<ButtonProps> = props => {
    return (
        <button type="button" className="btn btn-default" onClick={props.onClick}>
            {props.children}
        </button>
    );
};
