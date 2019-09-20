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
        {
            id: 1,
            name: "Nadyr"
        },
        {
            id: 2,
            name: "Ajara"
        },
        {
            id: 3,
            name: "Jama"
        },
        {
            id: 4,
            name: "Edil"
        }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogItem id="1" name="Nadyr" />
                <DialogItem id="2" name="Ajara" />
                <DialogItem id="3" name="Jama" />
                <DialogItem id="4" name="Edil" />
                <DialogItem id="5" name="Emil" />
                <DialogItem id="6" name="Davran" />
            </div>

            <div className={style.messages}>
                <Message text="How are you?" />
                <Message text="What did you do today?" />
                <Message text="Did you watch Champions League?" />
            </div>
        </div>
    );
};

export default Dialogs;
