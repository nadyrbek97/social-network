import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 0, message: "Post 1", likesCount: 154 },
                { id: 1, message: "Post 2", likesCount: 124 },
                { id: 2, message: "Post 3", likesCount: 123 }
            ],
            newPostText: "nadyrbek.com"
        },
        dialogPage: {
            dialogs: [
                { id: 0, name: "Nadyr" },
                { id: 1, name: "Ajara" },
                { id: 2, name: "Jama" },
                { id: 3, name: "Edil"}
            ],
            messages: [
                { id: 0, message: "How are you?" },
                { id: 1, message: "Are you you?" },
                { id: 2, message: "Did watch match yesterday?" },
                { id: 3, message: "Yes, sure..."}
            ],
            newMessageText: "write your message here"
        }
    },
    _callSubscriber(){
        console.log('state has changed')
    },
    getState(){
        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type: 'ADD-POST'
        debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.profilePage = dialogsReducer(this._state.dialogPage, action);

        this._callSubscriber(this._state);
    }

};

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,

        newText: text
    }
};

export const addMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
};

export const updateMessageBody = (text) => {

    return {
        type: UPDATE_MESSAGE_TEXT,

        newText: text
    }
};

export default store;
window.store = store;



