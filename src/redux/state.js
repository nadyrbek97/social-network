const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE'){
            let text = this._state.dialogPage.newMessageText;

            let newMessageData = {
                id: 9,
                message: text
            };

            this._state.dialogPage.messages.push(newMessageData);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogPage.newMessageText = action.newMessage;
        }

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

export default store;
window.store = store;



