import React from 'react'
import { Badge } from 'antd';
import { useEffect, useState } from 'react'
import ImageUser from 'assets/images/jpg/Ismoil.jpg'
import { UserSettings, MyUserAvatar } from 'assets/images/png'
import List from 'components/list'
import storage from 'services/storage'
import { useNavigate } from 'react-router-dom'
import ImageModal from 'components/image-modal'

const index = ({value}) => {

    const navigate = useNavigate()

    const [myAccount, setMyAccount] = useState([])
    const [imageModal, setImageModal] = useState(false)

    useEffect(() => {
        fetch(`https://blogsiteuchun.pythonanywhere.com/user/profile/${storage.get("username")}`)
            .then(response => response.json())
            .then(json => setMyAccount(json))
    }, [])

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://blogsiteuchun.pythonanywhere.com/user/list')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <div className='chats-users'>
            <div className="chats-users-btn-group">
                <Badge
                    count={data.length}
                    showZero
                    style={{
                        backgroundColor: '#52c41a',
                    }}
                >
                    <button className='chats-users-btn-group-item'>Users</button>
                </Badge>
                <Badge
                    count={0}
                    showZero
                    style={{
                        backgroundColor: '#52c41a',
                    }}
                >
                    <button className='chats-users-btn-group-item'>Chats</button>
                </Badge>
                <Badge
                    count={0}
                    showZero
                    style={{
                        backgroundColor: '#52c41a',
                    }}
                >
                    <button onClick={()=>navigate("/requests")} className='chats-users-btn-group-item'>Request</button>
                </Badge>
            </div>
            <div className='menu-active'>
                <div className="my-profile">
                    <div className="my-profile-info">
                        <div className="my-profile-info-img">
                            <img 
                                src={myAccount?.photo ? myAccount.photo : MyUserAvatar} 
                                alt="" 
                                onClick={() => setImageModal(true)}
                            />
                        </div>
                        <div className="my-profile-info-box" >
                            <h4 className="my-profile-info-box-name">{myAccount?.first_name}</h4>
                            <h4 className="my-profile-info-box-surname">{myAccount?.last_name}</h4>
                        </div>
                    </div>
                    <button className='my-profile-settings' onClick={() => navigate('/settings')}>
                        <img src={UserSettings} alt="" />
                    </button>
                </div>
                <List value={value} data={data} />
            </div>
            <ImageModal
                accaunt={myAccount.photo}
                openModal={imageModal}
                setOpenModal={setImageModal}
                avatar={MyUserAvatar}
            />
        </div>
    )
}

export default index