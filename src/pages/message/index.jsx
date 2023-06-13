import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SeenUser from './seen-user'
import ImageModal from 'components/image-modal'
import { IconUserAvatar, IconFile, IconSend } from 'assets/images/png'
import { Upload } from 'antd'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import MessageBody from 'pages/message/message-body'
import storage from 'services/storage'
import { useRef } from 'react'



const index = () => {

    const { username } = useParams()

    const inputRef = useRef()

    const [accaunt, setAccaunt] = useState([])
    // const [myAccount, setMyAccount] = useState([])
    const [seenUser, setSeenUser] = useState(false)
    const [imageModal, setImageModal] = useState(false)
    const [values, setValues] = useState({
        "recipient": null,
        "content": null
    })


    useEffect(() => {
        inputRef.current.focus()
        fetch(`https://blogsiteuchun.pythonanywhere.com/user/profile/${username}`)
            .then(response => response.json())
            .then(json => setAccaunt(json))
    }, [username])

    // useEffect(() => {
    //     fetch(`https://blogsiteuchun.pythonanywhere.com/user/profile/${storage.get("username")}`)
    //         .then(response => response.json())
    //         .then(json => setMyAccount(json))
    // }, [])


    const mutation = useMutation({
        mutationFn: (values) => {
            console.log(values)
            return axios.post(
                `https://blogsiteuchun.pythonanywhere.com/user/chats/send-message`,
                values
            );
        },
        onSuccess: (data) => {
            console.log("xabar yuborildi")
        },
    });

    return (
        <div className='message'>
            <div className="message-header">
                <div className="message-header-info">
                    <img
                        className='message-header-info-img'
                        src={accaunt?.photo ? accaunt.photo : IconUserAvatar}
                        alt=""
                        onClick={() => setImageModal(true)}
                    />
                    <h4 onClick={() => setSeenUser(true)} className='message-header-info-title'>{accaunt?.username}</h4>
                </div>
            </div>
            <div className="message-body">
                <MessageBody accaunt={accaunt} />
            </div>
            <div className="message-footer">
                <div className="message-footer-item">
                    <button className="message-footer-item-file">
                        <img src={IconFile} className="message-footer-item-file-img" alt="" />
                    </button>
                    <div className="message-footer-item-input">
                        <input
                            type="text"
                            defaultValue={values?.title}
                            ref={inputRef}
                            onChange={e => setValues({
                                "recipient": accaunt.id,
                                "content": e.target.value
                            })}
                        />
                    </div>
                    <button className="message-footer-item-send" onClick={() => mutation.mutate(values)}>
                        <img src={IconSend} className="message-footer-item-send-img" alt="" />
                    </button>
                </div>
            </div>

            <SeenUser
                accaunt={accaunt}
                seenUser={seenUser}
                setSeenUser={setSeenUser}
            />
            <ImageModal
                accaunt={accaunt.photo}
                openModal={imageModal}
                setOpenModal={setImageModal}
                avatar={IconUserAvatar}
            />
        </div>
    )
}

export default index