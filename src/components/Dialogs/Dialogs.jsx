import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogElements = props.dialogsData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);


    let messageElements = props.messagesData.map( message => <Message text={message.message}/>);


    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                { dialogElements }
            </div>

            <div className={style.messages}>
                { messageElements }
            </div>
        </div>
    );
};

export default Dialogs;
