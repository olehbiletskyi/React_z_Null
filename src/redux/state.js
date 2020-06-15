import { rerenderEntireTree } from "../render";

let state = {

    profilePage: {
        posts : [
            {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
            {id: 2, message: 'This is second post', likeCounter: 68} ,
                ],
        newPostText: 'MY SITE',
    },

    dialogsPage: {
        dialogs : [
            {id: 1, name: 'Dimych', 
            avatar: 'https://moemisto.ua/img/cache/event_content_photo/event/0002/48/e4983a6a9a3cd1ace55654731eba5a3a1eebb957.jpeg?hash=2017-12-13-12-54-06'},
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
            avatar: 'https://moemisto.ua/img/cache/event_content_photo/event/0002/48/e4983a6a9a3cd1ace55654731eba5a3a1eebb957.jpeg?hash=2017-12-13-12-54-06'},
            {id: 2, name: 'Anton', 
            avatar: 'https://fs01.vseosvita.ua/01001wo3-a908/018.jpg'},
            {id: 3, name: 'Sveta', 
            avatar: 'https://cdn.shopify.com/s/files/1/0267/9901/3993/products/tactic-lumostars-wolf-woody.jpg?v=1572893418'},
             ],
    }
}

export const addPost = ( /*postMessage*/ ) => {
    let newPost = {
        id : 5,
        // message : postMessage,
        message : state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    
    rerenderEntireTree(state);
    state.profilePage.posts = "";
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};







export default state;