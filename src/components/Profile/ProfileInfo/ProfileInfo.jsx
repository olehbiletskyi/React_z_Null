import React from 'react'
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTt2SDWT8GqTd3mm2c5FOvtIZTRPf8pGl_EH4-8nfI10krg0Qak&usqp=CAU"/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + Description
            </div>
        </div>
    )
}

export default ProfileInfo;