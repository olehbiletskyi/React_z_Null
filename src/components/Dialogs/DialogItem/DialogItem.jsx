import React from 'react';
import s from "./../Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div>
            <div >
                <img src={props.avatar} className={s.UsersPhoto} alt="User Photo"/>
            </div>
            <div >
                <NavLink to={"/dialogs/" + props.id} className={s.dialogsItemPeople}>{props.name}</NavLink>
            </div>
        </div>
    )
}
export default DialogItem;
