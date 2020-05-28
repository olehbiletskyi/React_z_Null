import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hey its my first post using PROPS', likeCounter: 101},
        {id: 2, message: 'This is second post', likeCounter: 68} ,
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCounter={p.likeCounter} /> );
    return(
        <div className={s.postsBlock}>
            
            <h3>My posts</h3>
            
            <div>
                <div><textarea></textarea></div>
                
                <div><button>Add post</button></div>

            </div>

            <div className={s.posts}>
                { postsElements }
            </div>

        </div>
    )
}
export default MyPosts;