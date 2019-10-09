const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
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

const dialogsReducer = (state=initialState, action) => {


    if (action.type === SEND_MESSAGE){
        let text = state.newMessageText;

        let newMessageData = {
            id: 9,
            message: text
        };

        state.messages.push(newMessageData);
        state.newMessageText = '';
    }
    else if (action.type === UPDATE_MESSAGE_TEXT){
        state.newMessageText = action.newText;
    }

    return state;
};

export default dialogsReducer;