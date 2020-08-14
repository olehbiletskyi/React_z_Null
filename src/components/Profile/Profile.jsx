import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            {/* <MyPosts 
                posts={props.profilePage.posts} 
                newPostText={props.profilePage.newPostText} 
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost} 
                dispatch={props.dispatch}
            /> */}
            < MyPostsContainer store={props.store} />
        </div>
    )
}
export default Profile;
