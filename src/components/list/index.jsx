import React, { useState } from 'react'
import { IconMessage, IconUserAvatar } from 'assets/images/png'
import { Badge } from 'antd'
import { useNavigate } from 'react-router-dom'
import ImageModal from 'components/image-modal'

const index = ({ data }) => {

    const navigate = useNavigate()
    const [imageModal, setImageModal] = useState(false)
    const [imageData, setImageData] = useState(null)

    const seenImgFunc = (item) => {
        setImageModal(true)
        setImageData(item.photo)
    }

    return (
        <>
            {data.map((item) => {
                return (
                    <div className="my-profile" key={item.id}>
                        <div className="my-profile-info">
                            <div className="my-profile-info-img">
                                <img
                                    src={item?.photo ? item.photo : IconUserAvatar}
                                    alt=""
                                    onClick={() => seenImgFunc(item)}
                                />
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
                            <button className='my-profile-settings' onClick={() => navigate(`/chats/${item.username}/send-message`)}>
                                <img src={IconMessage} alt="" />
                            </button>
                        </Badge>
                        <ImageModal
                            accaunt={imageData}
                            openModal={imageModal}
                            setOpenModal={setImageModal}
                            avatar={IconUserAvatar}
                        />
                    </div>
                )
            })}
        </>

    )
}

export default index