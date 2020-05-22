import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div>
            
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message="Hey its my first post using PROPS"/>
                <Post message="This is second post"/>
            </div>

        </div>
    )
}
export default MyPosts;