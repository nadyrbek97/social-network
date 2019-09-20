import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = props => {
    return <div className={style.message}>{props.text}</div>;
};

const Dialogs = props => {
    let dialogsData = [
        { id: 0, name: "Nadyr" },
        { id: 1, name: "Ajara" },
        { id: 2, name: "Jama" },
        { id: 3, name: "Edil"}
    ];

    let dialogElements = dialogsData.map( (dialog) => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messagesData = [
        { id: 0, message: "How are you?" },
        { id: 1, message: "Are you you?" },
        { id: 2, message: "Did watch match yesterday?" },
        { id: 3, message: "Yes, sure..."}
    ];

    let messageElements = messagesData.map( message => <Message text={message.message}/>);


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
