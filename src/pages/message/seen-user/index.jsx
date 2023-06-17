import { Modal } from 'antd';
import { IconUserAvatar, IconPhone, IconUsername, IconAccauntImage } from 'assets/images/png'
import { useNavigate } from 'react-router-dom';


const index = ({ accaunt, seenUser, setSeenUser }) => {

    const navigate = useNavigate()

    return (
        <>
            <Modal
                title={"User info"}
                open={seenUser}
                onCancel={()=>setSeenUser(prev=>!prev)}
                footer={false}
            >
                <div className="seen-user">
                    <div className="seen-user-box">
                        <div className="seen-user-box-image">
                            <img
                                src={accaunt?.photo ? accaunt.photo : IconUserAvatar}
                                alt=""
                                className='seen-user-box-image-item'
                            />
                        </div>
                        <div className="seen-user-box-name">
                            <h5 className="seen-user-box-name-item">{accaunt.first_name}</h5>
                            <h5 className="seen-user-box-name-item">{accaunt.last_name}</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="seen-user-phone">
                        <img className='seen-user-phone-img' src={IconPhone} alt="" />
                        <h4 className='seen-user-phone-title'>{accaunt.phone_number}</h4>
                    </div>
                    <hr />
                    <div className="seen-user-phone">
                        <img className='seen-user-phone-img' src={IconUsername} alt="" />
                        <h4 className='seen-user-phone-title'>@{accaunt.username}</h4>
                    </div>
                    <hr />
                    <div className="seen-user-phone seen-user-accaunt-image" onClick={()=>navigate(`/media/${accaunt.username}`)}>
                        <img className='seen-user-phone-img' src={IconAccauntImage} alt="" />
                        <h4 className='seen-user-phone-title'>Picture</h4>
                    </div>
                    <hr />
                </div>
            </Modal>
        </>
    );
};
export default index;