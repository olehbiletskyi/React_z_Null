let store = {
//поля
        _state: {
            profilePage: {
                posts : [
                    {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
                    {id: 2, message: 'This is second post', likeCounter: 68} ,
                        ],
                newPostText: 'This is my message',
            },

            dialogsPage: {
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
            },
            
            sidebarPage: {
                friends: [
                    {id: 1, name: 'Dimych', 
                    avatar: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Larus_californicus_Palo_Alto_May_2011_009.jpg'},
                    {id: 2, name: 'Anton', 
                    avatar: 'https://fs01.vseosvita.ua/01001wo3-a908/018.jpg'},
                    {id: 3, name: 'Sveta', 
                    avatar: 'https://cdn.shopify.com/s/files/1/0267/9901/3993/products/tactic-lumostars-wolf-woody.jpg?v=1572893418'},
                    ],
            },
        },
//методи
    getState() {
        return this._state;
    },


    _callSubscriber ()  {
        console.log('state is changed');
    }, 

    addPost ( ) {
        let newPost = {
            id : 5,
            message : this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    
    subscribe (observer)  {
        this._callSubscriber = observer;
    },
}

export default store;


window.store = store;