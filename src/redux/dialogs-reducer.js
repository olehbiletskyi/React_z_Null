const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs : [
        {id: 1, name: 'Dimych', 
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Larus_californicus_Palo_Alto_May_2011_009.jpg'},
        {id: 2, name: 'Anton', 
        avatar: 'https://fs01.vseosvita.ua/01001wo3-a908/018.jpg'},
        {id: 3, name: 'Sveta', 
        avatar: 'https://cdn.shopify.com/s/files/1/0267/9901/3993/products/tactic-lumostars-wolf-woody.jpg?v=1572893418'},
        {id: 4, name: 'Sasha', 
        avatar: 'https://shop1981.hstatic.dk/upload_dir/autotransfer/54987.w610.h610.fill.jpg'},
        {id: 5, name: 'Viktor', 
        avatar: 'https://icf.listex.info/300x200/0ba73a98-ae24-769b-d757-79168d9eca39.jpg'},
        {id: 6, name: 'Valera', 
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9pw0bCir6aMEYJv_V_CtGCihUxi1pYsC4zAnw9O8JvY7qpT2I&usqp=CAU'},
        {id: 6, name: 'Valera', 
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9pw0bCir6aMEYJv_V_CtGCihUxi1pYsC4zAnw9O8JvY7qpT2I&usqp=CAU'},
    ],
    messages : [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your React?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageText: "Hey, what is your skills in JS",
    };


const dialogsReducer = ( state = initialState, action ) => { 

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 5, 
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        default:
            return state;
    } 

}

//екшен-креатори
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    }
}

export const sendMessageActionCreator = () => ( {type: SEND_MESSAGE} )

export default dialogsReducer;