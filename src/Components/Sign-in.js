import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn(){

const toastStart = () => toast.success("Fazogram ga xush kelibsiz!");

function saveBtn(){
    toastStart()
}

    return(
        <div className="App">
            <div className="row">
                <div className="col-md-12">
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
                    <div className="kirish">
                    <form className="form-group nameEnter">
                        <label htmlFor="firstName"><h3>First Name:</h3></label>
                        <input placeholder="Enter the First Name" id="firstName" className="form-control mt-1"/>
                        <label className="mt-4" htmlFor="lastName"><h3>Last Name:</h3></label>
                        <input placeholder="Enter the Last Name" id="lastName" className="form-control mt-1"/>
                    </form>
                    <div className="saveBtnMenu">
                        <NavLink to={'/Fazogram'}><button onClick={saveBtn} className="btn btn-outline-success col-md-12">Save</button></NavLink>
                        <NavLink to={'/Start'}><button className="btn btn-outline-danger col-md-12">Cancel</button></NavLink>
                    </div>
                    <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn