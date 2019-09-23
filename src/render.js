import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={addPost} />,
        </BrowserRouter>,
        document.getElementById('root'));
};