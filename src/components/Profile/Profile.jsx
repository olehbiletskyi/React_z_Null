import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    let posts6 = [
        {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
        {id: 2, message: 'This is second post', likeCounter: 68} ,
    ]

    return(
        <div >

            <ProfileInfo />

            <MyPosts posts={posts6}  posta={000} posta={000}/>

        </div>
    )
}
export default Profile;