let state = {

    profilePage: {
        posts : [
            {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
            {id: 2, message: 'This is second post', likeCounter: 68} ,
        ],
    },

   dialogsPage: {
        dialogs : [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Anton'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are your React?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ],
   }
    
}
export default state;