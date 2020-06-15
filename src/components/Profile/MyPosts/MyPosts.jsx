import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {


    console.log("PROPS:::", props.posts);




    let newPostElement = React.createRef();

    let addPost = () => {
            // let text = newPostElement.current.value;
            props.addPost( /*text */);
            // props.updateNewPostText("");
    }

    let postsElements = props.posts.map( p => <Post message={p.message} likeCounter={p.likeCounter} /> );

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    
    console.log(postsElements);
    

    return(
        <div className={s.postsBlock}>

            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement}  value={props.newPostText}  onChange={onPostChange} />
                </div>
                <div>
                    <button onClick={ addPost } > Add post </button>
                </div>
            </div>

            <div className={s.posts}>
                { postsElements }
            </div>

        </div>
    )
}
export default MyPosts;