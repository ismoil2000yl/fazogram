import React from 'react'
import { IconMessage, IconUserAvatar } from 'assets/images/png'
import { Badge } from 'antd'
import { useNavigate } from 'react-router-dom'

const index = ({data}) => {

    const navigate = useNavigate()

    return (
        data.map((item, index) => {
            return (
                <div className="my-profile" key={index}>
                    <div className="my-profile-info">
                        <div className="my-profile-info-img">
                            <img src={item?.photo ? item.photo : IconUserAvatar} alt="" />
                        </div>
                        <div className="my-profile-info-box">
                            <h4 className="my-profile-info-box-name">{item?.first_name}</h4>
                            <h4 className="my-profile-info-box-surname">{item?.last_name}</h4>
                        </div>
                    </div>
                    <Badge
                        count={0}
                        showZero
                    >
                        <button className='my-profile-settings' onClick={()=>navigate(`/chats/${item.id}/send-message`)}>
                            <img src={IconMessage} alt="" />
                        </button>
                    </Badge>
                </div>
            )
        })

    )
}

export default index