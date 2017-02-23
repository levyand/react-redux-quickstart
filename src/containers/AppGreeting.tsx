import { connect, MapStateToProps } from "react-redux";

import { AppState } from "../interfaces/AppState";
import { Greeting, GreetingProps } from "../components/Greeting";

const mapStateToProps: MapStateToProps<GreetingProps, undefined> = ((state: AppState) => {
    return {
        name: state.name,
        count: state.count
    };
});

export const AppGreeting: React.ComponentClass<undefined> = connect(
    mapStateToProps
)(Greeting);
