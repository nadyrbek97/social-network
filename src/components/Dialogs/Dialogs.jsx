import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogElements = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);


    let messageElements = props.state.messages.map( message => <Message text={message.message}/>);

    let messageText = React.createRef();

    let sendMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
        console.log(messageText.current.value);
        messageText.current.value = "";
    };

    let messageChange = () => {
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: messageText.current.value})

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
                <textarea onChange={messageChange} ref={messageText} value={props.newMessageText}></textarea>
                <button onClick={sendMessage} className='btn btn-success'>Send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
