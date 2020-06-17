import React from 'react';
import s from "./Friends.module.css";
import FriendsItem from './FriendsItem/FriendsItem';

const Friends = ({ state }) => {
    let friendsElements = state.friends.map( f => <FriendsItem name={f.name} avatar={f.avatar} />);
    return (
        <div>
            {friendsElements}
        </div>
    )
}
export default Friends;
