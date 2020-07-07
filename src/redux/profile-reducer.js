const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts : [
        {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
        {id: 2, message: 'This is second post', likeCounter: 68} ,
            ],
    newPostText: 'Write your message',
};

const profileReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id : 5,
                message : state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        default:
            return state;
    }

}

//екшен-креатори
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
    }

export const addPostActionCreator = () => ( { type: ADD_POST } )

export default profileReducer;