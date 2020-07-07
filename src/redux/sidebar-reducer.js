const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    friends: [
        {id: 1, name: 'Dimych', 
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Larus_californicus_Palo_Alto_May_2011_009.jpg'},
        {id: 2, name: 'Anton', 
        avatar: 'https://fs01.vseosvita.ua/01001wo3-a908/018.jpg'},
        {id: 3, name: 'Sveta', 
        avatar: 'https://cdn.shopify.com/s/files/1/0267/9901/3993/products/tactic-lumostars-wolf-woody.jpg?v=1572893418'},
        ],
};

const sidebarReducer = ( state = initialState, action ) => { 

        /*    */

    return state;
}

export default sidebarReducer;