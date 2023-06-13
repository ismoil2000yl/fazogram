import { useEffect } from 'react'
import { useState } from 'react'

const index = ({ accaunt }) => {

    const [message, setMessage] = useState([])

    // useEffect(() => {
    //     fetch(`https://blogsiteuchun.pythonanywhere.com/user/chats/${accaunt?.id}/get-message`)
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }, [accaunt])

    return (
        <div className='message-body-box'>
            {/*  GET  */}
            <div className="message-body-box-inbox">
                <h6 className='message-body-box-inbox-item'>
                    Jalolov Ismoil
                </h6>
                <span className="message-body-box-inbox-span"></span>
            </div>
            {/*  SEND  */}
            <div className="message-body-box-send">
                <h6 className="message-body-box-send-title">
                    Ismoil Jalolov
                </h6>
                <span className="message-body-box-send-span"></span>
            </div>
        </div>
    )
}

export default index