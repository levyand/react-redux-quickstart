// tslint:disable-next-line:no-unused-variable
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import { AppState } from "./interfaces/AppState";
import { App } from "./components/App";

let store: Store<AppState> = createStore(reducer);

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById("app"));
