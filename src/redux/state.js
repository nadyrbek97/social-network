import {rerenderEntireTree} from "../render";

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

let state = {
    profilePage: {
        posts: posts,
        newPostText: "nadyrbek.com"
    },

    dialogPage: {
        dialogs: dialogsData,
        messages: messagesData,
        newMessageText: "write your message here"
    }

};

export let addMessage = () => {
    let text = state.dialogPage.newMessageText;

    let newMessageData = {
        id: 9,
        message: text
    };

    messagesData.push(newMessageData);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
    state.dialogPage.newMessageText = newMessage;
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export default state;