import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IconSendMessage, IconUserAvatar, IconLike, IconComment } from 'assets/images/png'
import Image1 from 'assets/images/jpg/image-1.jpg'
import Image2 from 'assets/images/jpg/image2.jpg'
import Image3 from 'assets/images/jpg/image3.jpg'
import Image4 from 'assets/images/jpg/image4.jpg'
import Image5 from 'assets/images/jpg/image5.jpg'

const index = () => {

    const { username } = useParams()
    const [accaunt, setAccaunt] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://blogsiteuchun.pythonanywhere.com/user/profile/${username}`)
            .then(response => response.json())
            .then(json => setAccaunt(json))
    }, [username])

    return (
        <div className='media'>
            <div className="media-box">
                <div className="media-box-avatar">
                    <img src={accaunt?.photo ? accaunt.photo : IconUserAvatar} alt="" />
                </div>
                <div className="media-box-info">
                    <h2 className='media-box-info-username'>{accaunt.username}</h2>
                    <button className='media-box-info-send-message' onClick={() => navigate(`/chats/${username}/send-message`)}>
                        <h5 className='media-box-info-send-message-title'>Send message</h5>
                        <img className='media-box-info-send-message-img' src={IconSendMessage} alt="" />
                    </button>
                </div>
            </div>
            <hr />
            <div className="media-image">
                <div className="media-image-box">
                    <div className="media-image-box-item">
                        <img src={Image1} alt="" />
                    </div>
                    <div className="media-image-like-box">
                        <button className='media-image-like-box-item'>
                            <img src={IconLike} alt="" />
                            <h5 className='media-image-like-box-item-title'>{6}</h5>
                        </button>
                        <button className='media-image-like-box-item'>
                            <img src={IconComment} alt="" />
                            <h5 className='media-image-like-box-item-title'>{0}</h5>
                        </button>
                    </div>
                </div>
                <div className="media-image-box">
                    <div className="media-image-box-item">
                        <img src={Image2} alt="" />
                    </div>
                    <div className="media-image-like-box">
                        <button className='media-image-like-box-item'>
                            <img src={IconLike} alt="" />
                            <h5 className='media-image-like-box-item-title'>{6}</h5>
                        </button>
                        <button className='media-image-like-box-item'>
                            <img src={IconComment} alt="" />
                            <h5 className='media-image-like-box-item-title'>{1}</h5>
                        </button>
                    </div>
                </div>
                <div className="media-image-box">
                    <div className="media-image-box-item">
                        <img src={Image3} alt="" />
                    </div>
                    <div className="media-image-like-box">
                        <button className='media-image-like-box-item'>
                            <img src={IconLike} alt="" />
                            <h5 className='media-image-like-box-item-title'>{6}</h5>
                        </button>
                        <button className='media-image-like-box-item'>
                            <img src={IconComment} alt="" />
                            <h5 className='media-image-like-box-item-title'>{46}</h5>
                        </button>
                    </div>
                </div>
                <div className="media-image-box">
                    <div className="media-image-box-item">
                        <img src={Image4} alt="" />
                    </div>
                    <div className="media-image-like-box">
                        <button className='media-image-like-box-item'>
                            <img src={IconLike} alt="" />
                            <h5 className='media-image-like-box-item-title'>{6}</h5>
                        </button>
                        <button className='media-image-like-box-item'>
                            <img src={IconComment} alt="" />
                            <h5 className='media-image-like-box-item-title'>{15}</h5>
                        </button>
                    </div>
                </div>
                <div className="media-image-box">
                    <div className="media-image-box-item">
                        <img src={Image5} alt="" />
                    </div>
                    <div className="media-image-like-box">
                        <button className='media-image-like-box-item'>
                            <img src={IconLike} alt="" />
                            <h5 className='media-image-like-box-item-title'>{6}</h5>
                        </button>
                        <button className='media-image-like-box-item'>
                            <img src={IconComment} alt="" />
                            <h5 className='media-image-like-box-item-title'>{9}</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index