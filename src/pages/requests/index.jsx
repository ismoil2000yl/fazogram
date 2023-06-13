import { useState } from 'react'
import { IconMessage, IconUserAvatar } from 'assets/images/png'
import { Badge } from 'antd'
import { useNavigate } from 'react-router-dom'
import ImageModal from 'components/image-modal'

const index = () => {

    const [imageModal, setImageModal] = useState(false)

    return (
        <div className='requests'>
            <div className="my-profile">
                <div className="my-profile-info">
                    <div className="my-profile-info-img">
                        <img
                            src={IconUserAvatar}
                            alt=""
                            onClick={() => setImageModal(true)}
                        />
                    </div>
                    <div className="my-profile-info-box">
                        <h4 className="my-profile-info-box-name">Ismoiljon</h4>
                        <h4 className="my-profile-info-box-surname">Jalolov</h4>
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
                    // accaunt={item}
                    openModal={imageModal}
                    setOpenModal={setImageModal}
                    avatar={IconUserAvatar}
                />
            </div>
        </div>
    )
}

export default index