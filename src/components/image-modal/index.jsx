import { Modal } from 'antd';


const index = ({ accaunt, openModal, setOpenModal, avatar }) => {

    return (
        <>
            <Modal
                // title={"User image"}
                open={openModal}
                onCancel={() => setOpenModal(prev => !prev)}
                footer={false}
            >
                <div className='image-modal'>
                    <img
                        src={accaunt? accaunt : avatar}
                        alt=""
                        className='image-modal-img'
                    />
                </div>

            </Modal>
        </>
    );
};
export default index;