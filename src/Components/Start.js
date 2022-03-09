import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {MyContext} from '../App.js' 

function Start(){

    const [phone, setPhone] = useState()
    const value = useContext(MyContext)

    function phoneBtn(){
        value.importPhone(phone)
    }

    return(
        <div className="App">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <section className="mt-5">
                        <div className='text-menu'>
                            <div id='f'><b>F</b></div>
                            <div className='a'>a</div>
                            <div className='a'>z</div>
                            <div className='a'>o</div> 
                            <div>g</div>
                            <div>r</div>
                            <div>a</div>
                            <div>m</div>
                        </div>
                    </section>
                    <div className="phone-enter">
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                        className='form-control phoneNumber'
                    />
                    </div>
                    {/* <div className="kirish"> */}
                    <div className="row mx-2 mt-5 sign-in-btn">
                        <NavLink to={'/Sign-in'}><button onClick={phoneBtn} className="btn btn-outline-success">Sign-in</button></NavLink>
                        <NavLink to={'/home'}><button className="btn btn-outline-danger">Cancel</button></NavLink>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Start   