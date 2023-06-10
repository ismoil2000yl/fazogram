import React from 'react'
import ContainerAll from 'moduls/container/all'
import ImageUser from 'assets/images/jpg/Ismoil.jpg'
import { IconMessage } from 'assets/images/png'

const index = () => {
    return (
        <ContainerAll
            url={"/list"}
            queryKey={["list"]}
        >
            {
                ({ items }) => {
                    console.log(items)
                    return (
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
                                <img src={IconMessage} alt="" />
                            </button>
                        </div>
                    )
                }
            }
        </ContainerAll>
    )
}

export default index