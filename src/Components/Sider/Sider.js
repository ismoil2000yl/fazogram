import './Sider.css'
import HamburgerMenu from '../Icons/menu.png'
import Security from '../Icons/security.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap'

function Sider(){

    const [menuBoolean, setMenuBoolean] = useState(false)
    const [modalIsShow, setModalIsShow] = useState(false)

    function humbMenu(){
        setMenuBoolean(prev=>!prev)
    }

    function modalIs(){
        setModalIsShow(prev=>!prev)
    }

    return(
        <div className="sider">
            <div className='icon-search-menu pt-2'>
                <img className='menu-icon' src={HamburgerMenu} alt='' onClick={humbMenu}/>
                <input placeholder='Search...' className='form-control search'/>
                <NavLink to={'/Security'}><img className='security-icon' src={Security} alt=''/></NavLink>
            </div>
            {/* Hahmurger Menu */}
            { menuBoolean?
                <div className='menuDiv'>
                    <div className='romb'></div>
                      <div className='text-menu-div'>
                        <div className='f'><b>F</b></div>
                        <div className='a'>a</div>
                        <div className='a'>z</div>
                        <div className='a'>o</div>
                        <div className='b'>g</div>
                        <div className='b'>r</div>
                        <div className='b'>a</div>
                        <div className='b'>m</div>
                      </div>
                      <button onClick={modalIs} className='btn btn-outline-success addUserBtn col-md-10 offset-1'>Add user</button>
                      <NavLink to={'/'}><button className='btn btn-outline-danger col-md-10 offset-1 ll'>Log out</button></NavLink>
                </div>
                :''
            }
            <Modal isOpen={modalIsShow} toggle={modalIs}>
                <ModalHeader>
                    <h3 className='text-center'>Enter the user's information</h3>
                </ModalHeader>
                <ModalBody>
                    <form className='form-group'>
                        <label htmlFor='firstName'>First Name:</label>
                        <input id='firstName' placeholder='Enter the First Name' className='form-control mt-1'/>
                        <label htmlFor='lastName' className='mt-3'>Last Name:</label>
                        <input id='lastName' placeholder='Enter the Last Name' className='form-control mt-1'/>
                        <label htmlFor='phoneNumber' className='mt-3'>Phone Number:</label>
                        <input id='phoneNumber' placeholder='Enter the Phone Number' className='form-control mt-1'/>
                    </form>
                </ModalBody>
                <ModalFooter>
                <button className='btn btn-outline-success'>Save</button>
                <button onClick={modalIs} className='btn btn-outline-danger'>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Sider