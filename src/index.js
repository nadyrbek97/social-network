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
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
