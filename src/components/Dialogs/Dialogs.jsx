import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateMessageBody, addMessageCreator} from "../../redux/state";


const Dialogs = (props) => {

    let newMessageText = props.state.newMessageText;

    let dialogElements = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.state.messages.map( message => <Message text={message.message}/>);

    let messageText = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(addMessageCreator());
        console.log(messageText.current.value);
        messageText.current.value = "";
    };

    let onMessageChange = () => {
        props.store.dispatch(updateMessageBody(messageText.current.value))

    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogElements }
            </div>

            <div className={style.messages}>
                { messageElements }
            </div>

            <div className='ml-2 mb-2'>
                <textarea
                    onChange={onMessageChange}
                    ref={messageText}
                    value={newMessageText}>
                </textarea>
                <button
                    onClick={onSendMessageClick}
                    className='btn btn-success'>
                        Send message
                </button>
            </div>
        </div>
    );
};

export default Dialogs;
