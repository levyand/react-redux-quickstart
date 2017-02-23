import * as React from "react";

// tslint:disable-next-line:interface-name
export interface TextBoxProps {
    text: string;
    onChange(text: string): void;
}

export const TextBox: React.StatelessComponent<TextBoxProps> = props => {
    return (
        <input
            type="text"
            className="form-control"
            value={props.text}
            onChange={(e) => props.onChange(e.target.value)} />
    );
};
