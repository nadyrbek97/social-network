import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";
import React from "react";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}

            />,
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
