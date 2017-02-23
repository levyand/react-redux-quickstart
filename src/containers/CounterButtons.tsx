import { connect, MapStateToProps, MapDispatchToPropsObject } from "react-redux";

import { AppState } from "../interfaces/AppState";
import { increment, decrement } from "../actions";
import { Button } from "../components/Button";

const mapStateToProps: MapStateToProps<any, undefined> = ((state: AppState) => {
    return {};
});

const incrementDispatchProps: MapDispatchToPropsObject = {
    onClick: increment
};

const decrementDispatchProps: MapDispatchToPropsObject = {
    onClick: decrement
};

export const AddButton: React.ComponentClass<undefined> = connect(
    mapStateToProps,
    incrementDispatchProps
)(Button);

export const SubtractButton: React.ComponentClass<undefined> = connect(
    mapStateToProps,
    decrementDispatchProps
)(Button);
