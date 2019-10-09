const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 0, message: "Post 1", likesCount: 154 },
        { id: 1, message: "Post 2", likesCount: 124 },
        { id: 2, message: "Post 3", likesCount: 123 }
    ],
    newPostText: "nadyrbek.com"
};

const profileReducer = (state = initialState, action) => {

    if (action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };

        state.posts.push(newPost);
        state.newPostText = '';

    }
    else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;

    }

    return state;
};


export default profileReducer;