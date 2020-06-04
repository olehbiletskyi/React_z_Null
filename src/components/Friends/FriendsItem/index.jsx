import React from 'react'


const FriendsItem = ({ name, avatar }) => {
    return(
        <div>
            <div >
                <img src={avatar} />
                {name}
            </div>
        </div>
    )

}
export default FriendsItem;
