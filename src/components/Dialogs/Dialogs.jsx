import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs =  ( props ) => {

    

    const dialogsElements = props.dialogs.map(
        d => <DialogItem avatar={d.avatar}  name={d.name}  id={d.id} /> );

    const messagesElements = props.messages.map( 
        m => <Message message={m.message} /> );



    const onNewMessageChange = (e) => {
        let text = e.target.value;
        props.onNewMessageChange(text)

    }


    const onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>

                    <div>
                        <textarea
                            value={props.newMessageText}
                            cols="60" rows="5"
                            placeholder="Write you message"
                            onChange={ onNewMessageChange }
                        >
                        </textarea>
                    </div>

                    <div>
                        <button onClick={ onSendMessageClick } > Send message </button>
                    </div>

                </div>
              
                
            </div>
            
        </div>
    )
}
export default Dialogs;

