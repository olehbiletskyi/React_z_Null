import React from 'react';
import MyPost from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
            props.store.dispatch( addPostActionCreator() );
    }

    let onPostChange = (text) => {
            props.store.dispatch( updateNewPostTextActionCreator(text) );
    }
    // let onFocus = () => {
    //         props.store.dispatch( updateNewPostTextActionCreator("") );
    // }
//     let onFocusCapture = () => {
//         let text = newPostElement.current.value;
//         text = "5646464";
//         props.dispatch( updateNewPostTextActionCreator(text) );
// }
                                        
    return ( < MyPost   
                        updateNewPostText={ onPostChange }
                        addPost={ addPost }
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
            /> )

}


export default MyPostsContainer;