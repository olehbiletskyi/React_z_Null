import React from 'react'
import style from "./FriendsItem.module.css";

const FriendsItem = ({ name, avatar }) => {
    return(
        <div>
            <div >
                <img   src={avatar}   className={style.FriendsItem_image}    />
                <p className={style.FriendsItem_name}>   {name}   </p> 
            </div>
        </div>
    )

}
export default FriendsItem;
