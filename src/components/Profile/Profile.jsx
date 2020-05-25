import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
    <div >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt2SDWT8GqTd3mm2c5FOvtIZTRPf8pGl_EH4-8nfI10krg0Qak&usqp=CAU"/>
        <div>Ava + Description</div>
        <MyPosts />
    </div>
    )
}
export default Profile;