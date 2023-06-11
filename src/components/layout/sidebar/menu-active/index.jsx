import React, { useEffect, useState } from 'react'
import ImageUser from 'assets/images/jpg/Ismoil.jpg'
import { UserSettings, MyUserAvatar } from 'assets/images/png'
import List from 'components/list'
import storage from 'services/storage'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()

    const [myAccount, setMyAccount] = useState([])

    useEffect(() => {
        fetch(`https://blogsiteuchun.pythonanywhere.com/user/profile/${storage.get("username")}`)
            .then(response => response.json())
            .then(json => setMyAccount(json))
    }, [])

    return (
        <div className='menu-active'>
            <div className="my-profile">
                <div className="my-profile-info">
                    <div className="my-profile-info-img">
                        <img src={myAccount?.photo? myAccount.photo : MyUserAvatar} alt="" />
                    </div>
                    <div className="my-profile-info-box">
                        <h4 className="my-profile-info-box-name">{myAccount?.first_name}</h4>
                        <h4 className="my-profile-info-box-surname">{myAccount?.last_name}</h4>
                    </div>
                </div>
                <button className='my-profile-settings' onClick={()=>navigate('/settings')}>
                    <img src={UserSettings} alt="" />
                </button>
            </div>
            <List />
        </div>
    )
}

export default index