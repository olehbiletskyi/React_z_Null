import React from 'react';
import s from "./Friends.module.css";
import FriendsItem from './FriendsItem/FriendsItem';

// const Friends = (props) => {
//         let friendsElements = props.state.friends.map( 
//                             f => < FriendsItem name = {f.name} avatar = {f.avatar} /> );

//     return(
//         <div>
//                 {friendsElements}
//         </div>
//     )
// }
// export default Friends;

const Friends = (props) => {
    let friendsElements = props.state.friends.map( 
    f => { 
        return ( <div>{f.name}</div>  , <div><img src={f.avatar}/></div> ) 
         // АБО  // return   (f.name, <img src={f.avatar}/>)
    } 
        );

return(
    <div>
            {friendsElements}
    </div>
)
}
export default Friends;

