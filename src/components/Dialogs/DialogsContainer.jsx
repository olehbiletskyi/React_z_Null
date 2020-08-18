import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageTextActionCreator,sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs';


const DialogsContainer =  ( props ) => {

    let state = props.store.getState();
   
    // const dialogsElements = state.dialogsPage.dialogs.map(
    //     d => <DialogItem avatar={d.avatar}  name={d.name}  id={d.id} /> );

    // const messagesElements = state.dialogsPage.messages.map( 
    //     m => <Message message={m.message} /> );




    const onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }



    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }



    return (   < Dialogs
                            onNewMessageChange={onNewMessageChange}
                            onSendMessageClick={onSendMessageClick}
                            newMessageText={state.newMessageText}    
                            onNewMessageChange={onNewMessageChange} 
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            
                />   )
}
export default DialogsContainer;

