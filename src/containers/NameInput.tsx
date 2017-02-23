import { connect, MapStateToProps, MapDispatchToPropsObject } from "react-redux";

import { AppState } from "../interfaces/AppState";
import { updateName } from "../actions";
import { TextBox } from "../components/TextBox";

const mapStateToProps: MapStateToProps<any, undefined> = ((state: AppState) => {
    return {
        text: state.name
    };
});

const mapDispatchToProps: MapDispatchToPropsObject = {
    onChange: updateName
};

export const NameInput: React.ComponentClass<undefined> = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBox);
