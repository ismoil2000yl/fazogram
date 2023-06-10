import React from 'react'
import ImageUser from 'assets/images/jpg/Ismoil.jpg'
import {UserSettings, IconMessage} from 'assets/images/png'
import List from 'components/list'

const index = () => {
    return (
        <div className='menu-active'>
            <div className="my-profile">
                <div className="my-profile-info">
                    <div className="my-profile-info-img">
                        <img src={ImageUser} alt="" />
                    </div>
                    <div className="my-profile-info-box">
                        <h4 className="my-profile-info-box-name">Ismoiljon</h4>
                        <h4 className="my-profile-info-box-surname">Jalolov</h4>
                    </div>
                </div>
                <button className='my-profile-settings'>
                    <img src={UserSettings} alt="" />
                </button>
            </div>
            <List/>

            {/* <div className="my-profile">
                <div className="my-profile-info">
                    <div className="my-profile-info-img">
                        <img src={ImageUser} alt="" />
                    </div>
                    <div className="my-profile-info-box">
                        <h4 className="my-profile-info-box-name">Ismoiljon</h4>
                        <h4 className="my-profile-info-box-surname">Jalolov</h4>
                    </div>
                </div>
                <button className='my-profile-settings'>
                    <img src={IconMessage} alt="" />
                </button>
            </div> */}
        </div>
    )
}

export default index