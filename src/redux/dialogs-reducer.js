const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {


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