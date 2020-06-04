import React from 'react';
import s from "./Friends.module.css";
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = (props) => {
        let friendsElements = props.state.friends.map( 
                            f => < FriendsItem name = {f.name} avatar = {f.avatar} /> );

    return(
        <div>
                {friendsElements}
        </div>
    )
}
export default Friends;



