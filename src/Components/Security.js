import { NavLink } from 'react-router-dom'
import PasswordIcon from './Icons/security_2.png'
import See from './Icons/see.png'

function Security(){

    function SeeFunction(){
    var input = document.getElementById("input").getAttribute("type");

    if( input === "password" ){
        document.getElementById("input").setAttribute("type", "text");
    }
    else{
        document.getElementById("input").setAttribute("type", "password");
    }
    }

    return(
        <div className='passwordClass'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-4'>
                        <div className='passwordDiv'>
                            <div className='enter'>
                                <img alt='' className='passwordIcon' src={PasswordIcon}/>
                                <h4 className='text-center'>Enter your local passcode</h4>
                            </div>
                            <div className='passwrodInputDiv'>
                                {/* <img alt='' className='passwordIcon' src={PasswordIcon}/> */}
                                <input className='form-control' style={{width:'100%'}} id='input' type='password'/>
                                <img className='See' alt='' src={See} onClick={SeeFunction}/>
                            </div>
                            <NavLink to={'/Fazogram'}><button className='btn btn-outline-dark col-md-12 mt-4 p-3' style={{fontSize:'25px'}}>Submit</button></NavLink>
                            <NavLink to={'/'}><button className='btn btn-outline-danger col-md-4 offset-4 mt-3'>Log out</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security