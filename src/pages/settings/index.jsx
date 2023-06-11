import React, { useState } from 'react'
import { useEffect } from 'react'
import storage from 'services/storage'
import { MyUserAvatar, IconEdit, IconDelete, IconLogOut, IconPassword } from 'assets/images/png'
import { Popconfirm } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'store/auth'

const index = () => {

    const [myAccount, setMyAccount] = useState([])

    useEffect(() => {
        fetch(`https://blogsiteuchun.pythonanywhere.com/user/profile/${storage.get("username")}`)
            .then(response => response.json())
            .then(json => setMyAccount(json))
    }, [])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(signOut())
        navigate("/auth/sign-in")
    }

    const confirm = (e) => {
        handleLogout()
        // message.success('Click on Yes');
    };
    const cancel = (e) => {
        // message.error('Click on No');
    };

    return (
        <div className='settings'>
            <div className="settings-image">
                <img src={myAccount?.photo ? myAccount.photo : MyUserAvatar} className="settings-image-item" alt="" />
            </div>
            <div className="settings-user">
                <h3>{myAccount?.first_name}</h3>
                <h3>{myAccount?.last_name}</h3>
                <h3>{myAccount?.username}</h3>
            </div>
            <div className="settings-btn">
                <button className="settings-btn-edit edit-btn">
                    Edit Profile
                    <img src={IconEdit} className="settings-btn-edit-img" alt="" />
                </button>
                <Popconfirm
                    title="Profilni o'chirish"
                    description="Profilni butunlay o'chirishni xoxlaysizmi?"
                    onConfirm={()=>{}}
                    onCancel={cancel}
                    okText="Ha"
                    cancelText="Yo'q"
                >
                    <button className="settings-btn-edit delete-btn">
                        Delete Profile
                        <img src={IconDelete} className="settings-btn-edit-img" alt="" />
                    </button>
                </Popconfirm>
                <Popconfirm
                    title="Profildan chiqish"
                    description="Profildan chiqishni xoxlaysizmi?"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Ha"
                    cancelText="Yo'q"
                >
                    <button className="settings-btn-edit log-out-btn">
                        Log out
                        <img src={IconLogOut} className="settings-btn-edit-img" alt="" />
                    </button>
                </Popconfirm>
                <button className="settings-btn-edit password">
                    Password
                    <img src={IconPassword} className="settings-btn-edit-img" alt="" />
                </button>
            </div>
        </div>
    )
}

export default index