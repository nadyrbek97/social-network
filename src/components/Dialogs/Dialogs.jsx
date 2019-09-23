import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogElements = props.state.dialogs.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);


    let messageElements = props.state.messages.map( message => <Message text={message.message}/>);

    let messageText = React.createRef();

    let sendMessage = () => {
        alert(messageText.current.value)
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
                <textarea ref={messageText}></textarea>
                <button onClick={sendMessage} className='btn btn-success'>Send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
