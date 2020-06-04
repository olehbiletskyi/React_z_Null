import React from 'react';
import s from "./Friends.module.css";
import FriendsItem from './FriendsItem/FriendsItem';

// const Friends = (props) => {
//         let friendsElements = props.state.friends.map( 
//                             f => < FriendsItem name = {f.name} avatar = {f.avatar} /> );
//
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
        return  <div/> {f.name}  <img src={f.avatar}/><div/>;
               
    } 
        );

return(
    <div>
            {friendsElements}
    </div>
)
}
export default Friends;



// sidebarPage: {
//     friends: [
//         {id: 1, name: 'Dimych', 
//         avatar: 'https://moemisto.ua/img06'},

//         {id: 2, name: 'Anton', 
//         avatar: 'https://fs01.vseos8/0.jpg'},

//         {id: 3, name: 'Sveta', 
//         avatar: 'https://cdn.shopify.co418'},
//          ],
// }
