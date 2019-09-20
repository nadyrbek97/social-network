import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 0, message: "Post 1", likesCount: 154 },
    { id: 1, message: "Post 2", likesCount: 124 },
    { id: 2, message: "Post 3", likesCount: 123 }
];

let dialogsData = [
    { id: 0, name: "Nadyr" },
    { id: 1, name: "Ajara" },
    { id: 2, name: "Jama" },
    { id: 3, name: "Edil"}
];

let messagesData = [
    { id: 0, message: "How are you?" },
    { id: 1, message: "Are you you?" },
    { id: 2, message: "Did watch match yesterday?" },
    { id: 3, message: "Yes, sure..."}
];


ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
