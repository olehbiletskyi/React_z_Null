import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="https://cdn.themag.uz/2019/05/350x350-ava-MAN.jpg"></img>
            {props.message}
            <div><span>like</span></div>
            <div><span>{props.likeCounter}</span></div>
        </div>
    )
}
export default Post;