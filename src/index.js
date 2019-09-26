import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom";
import state from "./redux/state";
import App from "./App";
import {subscribe, addPost, updateNewPostText, addMessage, updateNewMessageText} from "./redux/state";
import React from "react";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
