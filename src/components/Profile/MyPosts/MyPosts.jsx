import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
        {id: 2, message: 'This is second post', likeCounter: 68} ,
    ]

    return(
        <div className={s.postsBlock}>
            
            <h3>My posts</h3>
            
            <div>
                <div><textarea></textarea></div>
                
                <div><button>Add post</button></div>

            </div>

            <div className={s.posts}>
                <Post message={postData[0].message} likeCounter = {postData[0].likeCounter} />
                <Post message={postData[1].message} likeCounter = {postData[1].likeCounter} />
            </div>

        </div>
    )
}
export default MyPosts;