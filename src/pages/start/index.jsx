import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()

    return (
        <div className='start'>
            <section>
                <ul className='text-menu'>
                    <li id='f'><b>F</b></li>
                    <li className='a'>a</li>
                    <li className='a'>z</li>
                    <li className='a'>o</li>
                    <li className='b'>g</li>
                    <li className='b'>r</li>
                    <li className='b'>a</li>
                    <li className='b'>m</li>
                </ul>
            </section>
            <div className="btn-start-div">
                <button onClick={()=>navigate("/auth/sign-in")}>Start</button>
            </div>
        </div>
    )
}

export default index